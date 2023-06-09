class ProductManagerMemory {
    constructor() {
        this.products = [];
    };

    guardar(product) {
        const id = this.products.length + 1
        product = {id: id, ...product}
        this.products.push(product)
        return id
    }

    getAll() {
        return this.products
    }

    getById(id) {
        const productById = this.products.find(product => product.id == id)
        if(productById === undefined){
            return null
        } else {
        return productById
        }
    }

    actualizar(id, data) {
        id = parseInt(id)
        const productPosition = this.products.findIndex(product => product.id == id)
        let updatedProduct = {id, ...data}
        this.products[productPosition] = updatedProduct
    }

    borrar(id) {
        const minusOne = this.products.filter(product => product.id != id)
        this.products = minusOne
    }

    borrarAll() {
        this.products = []
    }

    filtrarProductos(limit) {
        const sortedProducts = this.products.sort((a, b) => {
            if (a.nombre > b.nombre) {
                return 1;
            }
            if(a.nombre < b.nombre) {
                return -1;
            }
            return 0;
        })
        let sortedWithLimit = []
        for(let i = 0; i < limit; i++) {
            sortedWithLimit.push(sortedProducts[i])
        }
        return JSON.stringify(sortedWithLimit)
    }

}

export {ProductManagerMemory}