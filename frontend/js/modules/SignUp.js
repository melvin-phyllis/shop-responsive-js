import { ErrorMessage } from "./ErrorMessage.js";

export const SignUp = () => {
  const formSignup = document.getElementById("FormSiginup");
  if (!formSignup) return;

  formSignup.addEventListener("submit", async (e) => {
    try {
      e.preventDefault();
      const email = document.getElementById("email").value
      const nameUser = document.getElementById("userName").value
      const password = document.getElementById("passwords").value
      const passwordConfirm = document.getElementById("passwordConfirm").value
      
      //verifie si les deux mots de passe sont egaux
      if(passwords !== passwordConfirm) return ErrorMessage("Les deux mots de passe doivent être identiques")

      const req = await axios.post("http://localhost:3001/users", { email, nameUser, password })
      ErrorMessage("Bienvenue")
      
    } catch (error) {
      console.log(error)
    }

  });
};
