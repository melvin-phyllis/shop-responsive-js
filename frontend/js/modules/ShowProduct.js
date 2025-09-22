export const ShowProduct = () => {
    const btn = document.querySelectorAll(".view-button")
    console.log(btn)
    btn.forEach(items => {
        items?.addEventListener("click",async() =>{
           const id = items.getAttribute("data-id")
            const req = await axios.get(`http://localhost:3001/products/${id}`)
            console.log(req.data.price)
                const title = document.getElementById("showtitle").textContent =`${req.data.title}`
                const imgurl = document.getElementById("showimgurl").textContent =`${req.data.imgurl}`
                const description = document.getElementById("showdescription").textContent =`${req.data.description}`
                const details = document.getElementById("showdetail").textContent =`${req.data.details}`
                const quantity = document.getElementById("showquantity").textContent=`${Number(req.data.quantity)}`/* .value =`${req.data.quantity}` */
                const price = document.getElementById("showprice").textContent =`${req.data.price}`/* .value = */
                
            
        })


    });
}
