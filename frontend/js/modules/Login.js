import { ErrorMessage } from "./ErrorMessage.js";
export const Login =() =>{
    const FormLogin = document.getElementById("FormLogin")
    FormLogin?.addEventListener("submit",async(e)=>{
        e.preventDefault()
        try {
           const email = document.getElementById("email").value
           const password = document.getElementById("password").value 
           const req = await axios.get("http://localhost:3001/users")
           if(!req.data)return
           const user = req?.data.find(i => i.email === email && i.passwords === password)
           console.log(user)
           if(!user) return ErrorMessage("Identification De Connexion invalide") 
            localStorage.setItem("user",JSON.stringify({id:user.id,user:user.nameUser}))
        } catch (error) {
            console.log(error)
        }
    })
}