import {  SignUp} from "./modules/SignUp.js";
import {  NavBar} from "./modules/NavBar.js";
import {  Login} from "./modules/Login.js";
import { LogOut } from "./modules/LogOut.js";
import { AddProduct } from "./modules/AddProduct.js";
import { GetProductsList} from "./modules/GetProductsList.js";
import { Postprodutcs} from "./modules/Postprodutcs.js";

window.addEventListener("DOMContentLoaded",()=>{
    
    NavBar()
    SignUp()  
    Login()
    LogOut()
    AddProduct()
    GetProductsList()
   Postprodutcs()
})