class UsersManagerMemory {
    constructor() {
        this.users = []
    }

    addUser(user) {
        this.users.push(user);
    }

    getUser(userData) {
        const user = this.users.find(user => user.email == userData)
        return user
    }

}

export {UsersManagerMemory}