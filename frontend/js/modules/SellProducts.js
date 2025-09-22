export const SellProducts = () => {

    const btn = document.querySelectorAll(".btn-success")
    console.log(btn)
    btn?.forEach(items => {

        items.addEventListener("click", async () => {
            try {
                const modal = document.getElementById("my_modal_5")
                const id = items.getAttribute("data-id")
                const req = await axios.patch(`http://localhost:3001/products/${id}`, { statut: "public" })
                modal.showModal()
            } catch (error) {

            }
        })
    });

}