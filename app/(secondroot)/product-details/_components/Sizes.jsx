const Sizes = () => {
    return (
        <ul className="list-none flex flex-wrap mb-4">
            <li className="uppercase mr-6">Size:</li>
            <li className="mr-2">
                <label htmlFor="check-3">
                    <input id="check-3" type="checkbox" />
                    <span className="fake-input"></span>
                    <span className="fake-label">S</span>
                </label>
            </li>
            <li className="mr-2">
                <label htmlFor="check-1">
                    <input id="check-1" checked="checked" type="checkbox" />
                    <span className="fake-input"></span>
                    <span className="fake-label">L</span>
                </label>
            </li>
            <li className="mr-2">
                <label htmlFor="check-2">
                    <input id="check-2" type="checkbox" />
                    <span className="fake-input"></span>
                    <span className="fake-label">M</span>
                </label>
            </li>
            <li className="mr-2">
                <label htmlFor="check-4">
                    <input id="check-4" type="checkbox" />
                    <span className="fake-input"></span>
                    <span className="fake-label">XL</span>
                </label>
            </li>
            <li className="mr-2">
                <label htmlFor="check-5">
                    <input id="check-5" type="checkbox" />
                    <span className="fake-input"></span>
                    <span className="fake-label">XXL</span>
                </label>
            </li>
        </ul>
    );
};

export default Sizes;