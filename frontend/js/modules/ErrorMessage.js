//gerere les Messages D'erreur

export const ErrorMessage =(M) => {

    const ErrMessage =document.getElementById("message")
    if (!ErrMessage) return
    ErrMessage.innerHTML =`<span class=" text-red-600 text-2xl">${M}</span>`

}