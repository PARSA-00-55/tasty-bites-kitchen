"use client"
import { usePathname } from "next/navigation";



const DynamicRoute = () => {
    const pathName = usePathname();
    console.log([pathName]);
    return (
        <section
            className="min-h-60 flex items-center w-full bg-cover bg-center"
            style={{ backgroundImage: 'url(https://htmlbeans.com/html/botanical/images/b-bg7.jpg)' }}
        >
            <div className="container mx-auto">
                <div className="pt-32 md:pt-16 sm:pt-10 text-center">
                    <h1 className="text-4xl font-bold font-playfair mb-4">Shop</h1>
                    <ul className="list-none flex justify-center">
                        <li className="mr-2">
                            <a href="/" className="hover:underline">Home</a>
                        </li>
                        <li className="mr-2">/</li>
                        <li className="active">Shop</li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default DynamicRoute;
