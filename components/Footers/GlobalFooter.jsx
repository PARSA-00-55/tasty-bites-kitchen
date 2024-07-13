const GlobalFooter = () => {
    return (
        <aside className="footerHolder overflow-hidden bg-lightGray pt-24 pb-8">
            <div className="container mx-auto">
                <div className="flex flex-wrap">
                    {/* Contact Us Section */}
                    <div className="w-full sm:w-1/2 lg:w-1/3 mb-8 lg:mb-0">
                        <h3 className="text-xl font-bold uppercase mb-7">Contact Us</h3>
                        <ul className="list-none mb-3">
                            <li className="mb-3 flex items-start pr-8">
                                <span className="icon icon-place mr-3"></span>
                                <address className="font-bold m-0">
                                    Address: London Oxford Street, 012 United Kingdom.
                                </address>
                            </li>
                            <li className="mb-3 flex items-start">
                                <span className="icon icon-phone mr-3"></span>
                                <span>
                                    Phone: <a href="#" className="hover:underline">(+032) 3456 7890</a>
                                </span>
                            </li>
                            <li className="flex items-start">
                                <span className="icon icon-email mr-2"></span>
                                <span>
                                    Email: <a href="#" className="hover:underline">Botanicalstore@gmail.com</a>
                                </span>
                            </li>
                        </ul>
                        <ul className="list-none flex">
                            <li className="font-bold mr-4">Follow us:</li>
                            <li className="mr-4">
                                <a href="#" className="fab fa-facebook-f hover:text-blue-600"></a>
                            </li>
                            <li className="mr-4">
                                <a href="#" className="fab fa-twitter hover:text-blue-400"></a>
                            </li>
                            <li className="mr-4">
                                <a href="#" className="fab fa-pinterest hover:text-red-600"></a>
                            </li>
                            <li>
                                <a href="#" className="fab fa-google-plus-g hover:text-red-500"></a>
                            </li>
                        </ul>
                    </div>

                    {/* Information Section */}
                    <div className="w-full sm:w-1/2 lg:w-1/4 lg:pl-14 mb-8 lg:mb-0">
                        <h3 className="text-xl font-bold uppercase mb-6">Information</h3>
                        <ul className="list-none">
                            <li className="mb-1">
                                <a href="#" className="hover:underline">New Products</a>
                            </li>
                            <li className="mb-2">
                                <a href="#" className="hover:underline">Top Sellers</a>
                            </li>
                            <li className="mb-2">
                                <a href="#" className="hover:underline">Our Blog</a>
                            </li>
                            <li className="mb-2">
                                <a href="#" className="hover:underline">About Our Shop</a>
                            </li>
                            <li>
                                <a href="#" className="hover:underline">Privacy policy</a>
                            </li>
                        </ul>
                    </div>

                    {/* My Account Section */}
                    <div className="w-full sm:w-1/2 lg:w-1/4 lg:pl-12 mb-8 lg:mb-0">
                        <h3 className="text-xl font-bold uppercase mb-7">My Account</h3>
                        <ul className="list-none">
                            <li className="mb-1">
                                <a href="#" className="hover:underline">My account</a>
                            </li>
                            <li className="mb-2">
                                <a href="#" className="hover:underline">Discount</a>
                            </li>
                            <li className="mb-2">
                                <a href="#" className="hover:underline">Orders history</a>
                            </li>
                            <li>
                                <a href="#" className="hover:underline">Personal information</a>
                            </li>
                        </ul>
                    </div>

                    {/* Products Section */}
                    <div className="w-full sm:w-1/2 lg:w-1/6 lg:pl-18 mb-8 lg:mb-0">
                        <h3 className="text-xl font-bold uppercase mb-5">Products</h3>
                        <ul className="list-none">
                            <li className="mb-2">
                                <a href="#" className="hover:underline">Delivery</a>
                            </li>
                            <li className="mb-2">
                                <a href="#" className="hover:underline">Legal notice</a>
                            </li>
                            <li className="mb-2">
                                <a href="#" className="hover:underline">Prices drop</a>
                            </li>
                            <li className="mb-2">
                                <a href="#" className="hover:underline">New products</a>
                            </li>
                            <li>
                                <a href="#" className="hover:underline">Best sales</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </aside>

    );
};

export default GlobalFooter;