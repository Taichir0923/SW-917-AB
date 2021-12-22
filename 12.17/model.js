export class User {
    constructor(username , email , number , avatar , password){
        this.username = username;
        this.email = email;
        this.number = number;
        this.avatar = avatar;
        this.password = password;
        this.id = Math.random().toString().split('.')[1]
    }

    register(users){
        users.push(this)
    }
}