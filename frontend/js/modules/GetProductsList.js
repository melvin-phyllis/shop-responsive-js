import { RemoveItem } from "./RemoveItem.js";
import { UpdateItems } from "./UpdateItems.js";
import { ShowProduct } from "./ShowProduct.js";
import { SellProducts} from "./SellProducts.js";

export const GetProductsList = async () => {
    try {
        const productsList = document.getElementById("productsList")
        const user = JSON.parse(localStorage.getItem("user"))
        if (!user) return
        const req = await axios.get("http://localhost:3001/products")
        if (!req.data) return
        const listesProducts = req.data.filter(item => item.idUser === user.id)

        
        listesProducts.forEach(item => {
            console.log(item)
            productsList.innerHTML += ` 
           <div class="card col-span-12 md:col-span-6 lg:col-span-3 bg-white border border-gray-200 rounded-lg hover:shadow-xl transition-all duration-300 group">
            <figure class="relative overflow-hidden bg-gray-50">
                <img src="${item.imgurl}" alt="Product" class="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105" />
                <div class="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300"></div>
            </figure>
            <div class="card-body p-5 space-y-3">
                <h2 class="text-base font-bold text-gray-900 uppercase tracking-wider">${item.title}</h2>
                <p class="text-sm text-gray-600 line-clamp-2">${item.details}</p>
                <div class="flex justify-between items-center py-2 px-3 bg-gray-100 rounded">
                    <span class="text-xs font-semibold text-gray-500 uppercase">Stock</span>
                    <span class="text-lg font-bold text-gray-900">${item.quantity}</span>
                </div>
                <div class="flex justify-between items-center py-2 px-3 bg-black text-white rounded">
                    <span class="text-xs font-semibold uppercase opacity-75">Price</span>
                    <span class="text-lg font-bold">${item.price} CFA</span>
                </div>
                <div class="card-actions grid grid-cols-2 gap-2 pt-2">
                    <button data-id="${item.id}" class="bg-red-600 text-white text-xs delete-button font-semibold py-2 rounded hover:bg-red-700 transition-colors">Delete</button>
                    <button data-id="${item.id}" class="bg-white border border-gray-300 text-gray-900 text-xs font-semibold py-2 view-button rounded hover:bg-gray-100 transition-colors" onclick="my_modal_2.showModal()">View</button>
                    <button data-id="${item.id}" class="bg-gray-900 text-white text-xs font-semibold py-2 rounded hover:bg-black update-button transition-colors" onclick="my_modal_3.showModal()">Edit</button>
                    <button data-id="${item.id}" class="bg-black text-white text-xs font-semibold py-2 rounded hover:bg-gray-800 sell-button transition-colors">Sell</button>
                </div>
            </div>
        </div>`
        });

        RemoveItem()

        ShowProduct()
        UpdateItems()
         SellProducts()

    } catch (error) {

    }
}