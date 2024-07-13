const Copyright = () => {
    return (
        <footer id="footer" className="container-fluid overflow-hidden px-5 xl:px-20">
            <hr className="border-t-2 border-gray-200 my-4" />
            <div className="copyRightHolder text-center pt-5 lg:pt-5 pb-4 lg:pb-4 py-3">
                <p className="mb-0">
                    Copyright 2024 by{' '}
                    <a href="/" className="text-blue-500 hover:underline">
                        Botanical Store
                    </a>{' '}
                    - All rights reserved
                </p>
            </div>
        </footer>
    );
};

export default Copyright;