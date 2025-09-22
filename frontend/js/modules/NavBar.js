export const NavBar = () => {
    const navBar = document.getElementById("Navbar")
    const user = JSON.parse(localStorage.getItem("user"))
    const path = location.pathname
    if (!navBar) return
   let a = `<li>
                <span class="text-sm font-semibold text-gray-900 uppercase tracking-wider">
                    ${user?.user}
                </span>
            </li>
            <li>
                <button type="button" id="logout" class="text-sm font-semibold text-gray-700 hover:text-black px-4 py-2 rounded-full hover:bg-gray-100 transition-colors">
                    Logout
                </button>
            </li>`

let b = `<li>
            <a href="./frontend/login.html" class="text-sm font-semibold text-gray-700 hover:text-black px-4 py-2 rounded-full hover:bg-gray-100 transition-colors">
                Login
            </a>
        </li>
        <li>
            <a href="./frontend/sigin.html" class="bg-black text-white text-sm font-semibold px-6 py-2 rounded-full hover:bg-gray-800 transition-colors">
                Sign Up
            </a>
        </li>`

navBar.innerHTML = `
                    <div>
                        <div class="navbar bg-white shadow-sm sticky top-0 z-50 border-b border-gray-200">
                            <div class="navbar-start">
                                <div class="dropdown">
                                    <div tabindex="0" role="button" class="btn btn-ghost btn-circle lg:hidden">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" />
                                        </svg>
                                    </div>
                                    <ul tabindex="0" class="menu menu-sm dropdown-content bg-white shadow-lg z-50 mt-3 w-52 p-2 border border-gray-200">
                                        ${user ? `
                                        <li><a href="/frontend/dashbord.html" class="text-gray-700 hover:text-black hover:bg-gray-50 rounded transition-colors">Dashboard</a></li>
                                        <li><a href="/frontend/articles.html" class="text-gray-700 hover:text-black hover:bg-gray-50 rounded transition-colors">Market</a></li>
                                        <li><a href="/frontend/add-articles.html" class="text-gray-700 hover:text-black hover:bg-gray-50 rounded transition-colors">Articles</a></li>
                                        `: `
                                        <li><a href="/frontend/articles.html" class="text-gray-700 hover:text-black hover:bg-gray-50 rounded transition-colors">Market</a></li>`}
                                    </ul>
                                </div>
                                <a href="/frontend/index.html" class="text-xl font-bold text-black hover:text-gray-700 transition-colors">
                                    SHOP
                                </a>
                            </div>
                            <div class="navbar-center hidden lg:flex">
                                <ul class="menu menu-horizontal px-1 gap-6">
                                    ${user ? `
                                    <li><a href="/frontend/dashbord.html" class="text-sm font-semibold text-gray-700 hover:text-black transition-colors uppercase tracking-wider">Dashboard</a></li>
                                    <li><a href="/frontend/articles.html" class="text-sm font-semibold text-gray-700 hover:text-black transition-colors uppercase tracking-wider">Market</a></li>
                                    <li><a href="/frontend/add-articles.html" class="text-sm font-semibold text-gray-700 hover:text-black transition-colors uppercase tracking-wider">Articles</a></li>
                                    `: `
                                    <li><a href="/frontend/articles.html" class="text-sm font-semibold text-gray-700 hover:text-black transition-colors uppercase tracking-wider">Market</a></li>`}
                                </ul>
                            </div>
                            <div class="navbar-end">
                                <ul class="flex items-center gap-4">
                                    ${!user ? b : a}
                                </ul>
                            </div>
                        </div>
                    </div>
`

    
}