
import Image from "next/image";
import Link from "next/link";

const SocialShare = () => {
    return (
        <ul className="list-none flex flex-wrap mb-4">
            <li className="uppercase mr-5">SHARE THIS PRODUCT:</li>
            <li className="mr-3 md:mr-6">
                <Link href="/" >
                    <Image src="/social-svg/facebook.svg" alt="Botanical" width={20} height={10} className="mx-auto" />
                </Link>
            </li>
            <li className="mr-3 md:mr-6">
                <Link href="/" >
                    <Image src="/social-svg/whatsapp.svg" alt="Botanical" width={20} height={10} className="mx-auto" />
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
    );
};

export default SocialShare;

