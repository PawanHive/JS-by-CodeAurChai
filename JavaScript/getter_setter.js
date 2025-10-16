class User {
    constructor(email, password) {
        this.email = email;
        this.password = password
    }

    get password() {
        return this._password.toUpperCase()     // what user get is (ABC)
    }

    set password(value) {
        this._password = value                  // actual value assigned is (abc)
    }
}

const hitesh = new User('h@hitesh.ai', 'abc')
console.log(hitesh.password)