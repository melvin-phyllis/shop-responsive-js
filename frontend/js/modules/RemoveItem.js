
export const RemoveItem =  ()=>{
    try {
        const btn = document.querySelectorAll(".delete-button")
    
    btn?.forEach(item => {
        item.addEventListener("click",async ()=>{
           const index = item.getAttribute("data-id")
           const req = await axios.delete(`http://localhost:3001/products/${index}`)
            console.log("a")
        })
    });
    } catch (error) {
        
    }
}