export const LogOut =() =>{
    const logout = document.getElementById("logout")
    if(!logout) return
    logout.addEventListener("click",()=>{
   localStorage.removeItem("user")
   location.href="/"
    })
}