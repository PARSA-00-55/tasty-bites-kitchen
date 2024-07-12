const Sidebar = () => {
    return (
        <div className="w-full lg:w-1/4">
            {/* sidebar */}
            <aside id="sidebar">
                {/* widget */}
                <section className="mb-9">
                    <form action="#" className="relative border">
                        <fieldset>
                            <input
                                type="search"
                                className="form-control w-full"
                                placeholder="Search product..."
                            />
                            <button className="absolute top-0 right-0">
                                <i className="icon-search"></i>
                            </button>
                        </fieldset>
                    </form>
                </section>
                {/* widget */}
                <section className="mb-9">
                    <h3 className="font-bold uppercase mb-5">PRODUCT CATEGORIES</h3>
                    <ul className="space-y-5">
                        <li className="flex justify-between">
                            <a href="#">Dried</a>
                            <span className="border px-2">6</span>
                        </li>
                        <li className="flex justify-between">
                            <a href="#">Vegetables</a>
                            <span className="border px-2">8</span>
                        </li>
                    </ul>
                </section>
                {/* widget */}
                <section className="mb-9">
                    <h3 className="font-bold uppercase mb-6">Filter by price</h3>
                    {/* filter ranger form */}
                    <form action="#" className="filter-ranger-form">
                        <div id="slider-range"></div>
                        <input type="hidden" id="amount1" name="amount1" />
                        <input type="hidden" id="amount2" name="amount2" />
                        <div className="flex justify-between items-center">
                            <button
                                type="button"
                                className="btn btn-theme btn-shop font-bold rounded-md px-3 py-1 uppercase"
                            >
                                Filter
                            </button>
                            <p id="amount" className="mb-0"></p>
                        </div>
                    </form>
                </section>
                {/* widget */}
                <section className="mb-9">
                    <h3 className="font-bold uppercase mb-6">top rate</h3>
                    <ul className="space-y-6">
                        <li className="flex space-x-2">
                            <div>
                                <a href="shop-detail.html">
                                    <img
                                        src="http://placehold.it/70x80"
                                        alt="image description"
                                        className="w-full"
                                    />
                                </a>
                            </div>
                            <div>
                                <h4 className="mb-1">
                                    <a href="shop-detail.html">Vitamin C face wash</a>
                                </h4>
                                <strong className="font-bold">21.00 $</strong>
                            </div>
                        </li>
                    </ul>
                </section>
                {/* widget */}
                <section className="mb-9">
                    <h3 className="font-bold uppercase mb-5">product tags</h3>
                    <ul className="flex flex-wrap space-x-2">
                        <li>
                            <a href="#" className="md-round block">
                                Plant
                            </a>
                        </li>
                    </ul>
                </section>
            </aside>
        </div>
    );
};

export default Sidebar;
