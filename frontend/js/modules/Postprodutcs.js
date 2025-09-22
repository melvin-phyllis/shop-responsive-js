import { ShowProduct } from "./ShowProduct.js";
export const Postprodutcs = async () => {
    try {
        let b ="./img/red-jpg-file-icon-3d-rendered-image-file-format_84443-57044.jpg"
        const listeProducts = document.getElementById("listearticles")
        if(!listeProducts)return
        const req = await axios.get("http://localhost:3001/products")
        if(!req) return
        let products = req?.data.filter(items => items.statut === "public")
        console.log(products)
        listeProducts.innerHTML =""
        products.forEach(element => {
            listeProducts.innerHTML +=`
            <div class="card bg-white md:col-span-3 lg:col-span-2 border border-gray-200 hover:shadow-lg transition-shadow">
                <figure class="bg-gray-50">
                    <img src="${element.imgurl || b}" alt="Product" class="w-full h-56 object-cover" />
                </figure>
                <div class="card-body p-6">
                    <h2 class="text-lg font-bold text-gray-900 uppercase tracking-wide">
                        ${element.title}
                    </h2>
                    <p class="text-sm text-gray-600 mt-2">${element.description}</p>
                    <p class="text-2xl font-bold text-black mt-4">${element.price}</p>
                    <div class="card-actions justify-end gap-3 mt-6">
                        <div data-id="${element.id}" class="px-6 py-2 border border-gray-300 rounded-full text-sm font-semibold text-gray-700 hover:bg-gray-100 cursor-pointer transition-colors" onclick="my_modal_2.showModal()">View Details</div>
                        <div data-id="${element.id}" class="px-6 py-2 bg-black text-white rounded-full text-sm font-semibold hover:bg-gray-800 cursor-pointer transition-colors">Buy Now</div>
                    </div>
                </div>
            </div>`
        });
        ShowProduct()
    } catch (error) {
        
    }
    
}

