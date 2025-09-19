export const NavBar = () => {
    const navBar = document.getElementById("Navbar")
    if (!navBar) return

    navBar.innerHTML = `
    <div>
                <div class="navbar bg-base-100 shadow-sm">
                    <div class="navbar-start">
                        <div class="dropdown">
                            <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M4 6h16M4 12h8m-8 6h16" />
                                </svg>
                            </div>
                            <ul tabindex="0" class="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                                <li><a>Item 1</a></li>
                                <!-- <li>
                                    <a>Parent</a>
                                    <ul class="p-2">
                                        <li><a>Submenu 1</a></li>
                                        <li><a>Submenu 2</a></li>
                                    </ul>
                                </li> -->
                                <li><a>Item 3</a></li>
                            </ul>
                        </div>
                        <a href="../index.html" class="btn btn-ghost text-xl">SHOP</a>
                    </div>
                    <div class="navbar-center hidden lg:flex">
                        <ul class="menu menu-horizontal px-1">
                            <li><a>Men</a></li>
                            <li><a>Women</a></li>
                            <li><a>Kids</a></li>
                            <li><a>Customise</a></li>
                            <!-- <li>
                                <details>
                                    <summary>Parent</summary>
                                    <ul class="p-2">
                                        <li><a>Submenu 1</a></li>
                                        <li><a>Submenu 2</a></li>
                                    </ul>
                                </details>
                            </li> -->
                            <li><a>Sale</a></li>
                        </ul>
                    </div>
                    <div class="navbar-end gap-2">
                        <ul class="flex  items-center gap-6">
                            <li class=" text-[17px] md:text-xl hover:bg-gray-200 font-bold border-1 px-4 rounded-xl" ><a href="./frontend/login.html" >Login</a></li>
                            <li class=" text-[17px] md:text-xl hover:bg-gray-200 font-bold border-1 px-[1.2px] py-[1.2px] md:px-5 rounded-xl" ><a href="./frontend/sigin.html" >Sigin Up</a></li>
                        </ul>
                        
                
                    </div>
                </div>
            </div>
    `
}