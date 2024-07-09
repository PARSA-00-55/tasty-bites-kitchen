import Image from "next/image";
import Link from "next/link";


const HomeFooter = () => {
    return (
        <aside className="animate-fade-up animate-once container-fluid overflow-hidden px-5 xl:px-17 pt-10 xl:pt-23 pb-12 lg:pb-10 md:pb-8">
            <div className="flex flex-wrap">
                <div className="w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 mb-4">
                    <h3 className="text-lg font-bold uppercase mb-7">Contact Us</h3>
                    <ul className="list-none  mb-3">
                        <li className="mb-3 flex flex-nowrap pr-7">
                            <span className="icon icon-place mr-3"></span>
                            <address className="font-bold m-0">
                                Address: London Oxford Street, 012 United Kingdom.
                            </address>
                        </li>
                        <li className="mb-3 flex flex-nowrap">
                            <span className="icon icon-phone mr-3"></span>
                            <span className="leftAlign">
                                Phone:
                                <a href="tel:+03234567890">(+032) 3456 7890</a>
                            </span>
                        </li>
                        <li className="email flex flex-nowrap">
                            <span className="icon icon-email mr-2"></span>
                            <span className="leftAlign">
                                Email:
                                <a href="mailto:Botanicalstore@gmail.com">Botanicalstore@gmail.com</a>
                            </span>
                        </li>
                    </ul>
                </div>
                <div className="w-full sm:w-1/2 lg:w-1/3 xl:w-1/2 mb-4">
                    <div className="logo mx-auto text-center mb-5">
                        <a href="/" className="block">
                            <Image src="https://htmlbeans.com/html/botanical/images/logo.png" alt="Botanical" width={150} height={50} className="mx-auto" />
                        </a>
                    </div>
                    <ul className="list-none  flex flex-nowrap justify-center">
                        <li className="font-bold mr-4 md:mr-11">Follow us:</li>
                        <li className="mr-3 md:mr-6">
                            <Link href="/" >
                                <Image src="/social-svg/facebook.svg" alt="Botanical" width={20} height={10} className="mx-auto" />
                            </Link>
                        </li>
                        <li className="mr-3 md:mr-6">
                            <Link href="/" >
                                <Image src="/social-svg/instagram.svg" alt="Botanical" width={20} height={10} className="mx-auto" />
                            </Link>
                        </li>
                        <li className="mr-3 md:mr-6">
                            <Link href="/" >
                                <Image src="/social-svg/linkedin.svg" alt="Botanical" width={20} height={10} className="mx-auto" />
                            </Link>
                        </li>

                    </ul>
                </div>
                <div className="w-full sm:w-1/2 lg:w-1/3 xl:w-1/4">
                    <h3 className="text-lg font-bold uppercase mb-3 xl:pl-17">Instagram Post</h3>
                    <ul className="list-none instaList flex flex-nowrap justify-end">
                        <li className="mr-2">
                            <a href="/">
                                <Image src="https://htmlbeans.com/html/botanical/images/img38.jpg" alt="Instagram image" width={100} height={100} className="img-fluid" />
                            </a>
                        </li>
                        <li className="mr-2">
                            <a href="/">
                                <Image src="https://htmlbeans.com/html/botanical/images/img39.jpg" alt="Instagram image" width={100} height={100} className="img-fluid" />
                            </a>
                        </li>
                        <li>
                            <a href="/">
                                <Image src="https://htmlbeans.com/html/botanical/images/img40.jpg" alt="Instagram image" width={100} height={100} className="img-fluid" />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </aside>
    );
};

export default HomeFooter;
