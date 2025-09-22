export const UpdateItems = () => {
    const btn = document.querySelectorAll(".btn-warning")
    const btnup = document.getElementById("button_validate_update") || null
    let b = ""
    btn?.forEach(items => {

        items?.addEventListener("click", () => {

            let id = items.getAttribute("data-id")
            btnup?.addEventListener("click", async () => {
                console.log(id)
                const imgurl = document.getElementById("updateimgurl").value
                const description = document.getElementById("updatedescription").value
                const details = document.getElementById("updatedetails").value
                const quantity = document.getElementById("updatequantity").value
                const price = document.getElementById("updateprice").value

                const req = await axios.patch(`http://localhost:3001/products/${id}`, { imgurl,  description,  details, quantity,  price })
            })
        })
    }

    )



}


    ;