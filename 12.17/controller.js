import { User } from "./model.js";
const users = [];
export function registerUser(obj){
    const {username , email , number , avatar , password} = obj;
    const user = new User(username , email , number , avatar , password);
    user.register(users)
    localStorage.setItem('users' , JSON.stringify(users))
}