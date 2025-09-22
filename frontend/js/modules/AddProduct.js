
export const AddProduct = () => {
    const FromaddProduct = document.getElementById("FromaddProduct")|| null
    FromaddProduct?.addEventListener("submit", async (e) => {
        try {
            e.preventDefault()
            const user = JSON.parse(localStorage.getItem("user"))
            if (!user) return
            const imgurl = document.getElementById("imgurl").value
            const title = document.getElementById("title").value
            const description = document.getElementById("description").value
            const details = document.getElementById("details").value
            const quantity = document.getElementById("quantity").value
            const price = document.getElementById("price").value
            const req = await axios.post("http://localhost:3001/products", { idUser: user.id,title, imgurl, description, details, quantity, price ,statut:"priver"})

        } catch (error) {

            console.log(error)
        }

    })
}