import { User } from "./model.js";
export function registerUser(obj){
    let users
    getData(users);
    const {username , email , number , avatar , password} = obj;
    const user = new User(username , email , number , avatar , password);
    user.register(users)
    localStorage.setItem('users' , JSON.stringify(users))
}

export function login(user){
    const {email , password} = user;
    let data;
    let users = getData(data);
    const currentUser = users.find(usr => usr.email === email);
    if(!currentUser) {
        alert('not found')
    }
}

function getData(users){
    if(localStorage['users']){
        users = JSON.parse(localStorage['users'])
    } else {
        users = [];
    }
    return users;
}