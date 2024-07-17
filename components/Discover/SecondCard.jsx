import rightIcon from "@/public/icons-svg/arrow-right.svg";
import Image from "next/image";
import { Button } from "../ui/button";

const SecondCard = () => {
    return (

        <div className="container animate-fade-up  mx-auto my-10 flex flex-col items-center p-6 md:flex-row md:items-start md:space-x-8">

            <div className="relative flex flex-col items-end md:w-1/2">
                <div className="absolute -translate-y-12 translate-x-[-450px]">
                    <Image src="https://htmlbeans.com/html/botanical/images/b-bdr.png" alt="image1" width={153} height={153} />
                </div>
                <div className="z-10 shadow-md">
                    <Image src="https://htmlbeans.com/html/botanical/images/img37.jpg" alt="image2" width={570} height={400} />
                </div>
            </div>

            <div className="mb-6 flex h-auto flex-col items-start justify-center md:w-1/2">
                <h2 className="mb-2 text-xl font-semibold">Discover___</h2>
                <h4 className="mb-4 text-center font-serif text-3xl font-bold">Indoor Plants</h4>
                <p className="mb-4 text-sm font-light">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                </p>

                <Button >view more <Image src={rightIcon} width={15} height={10} alt="rightIcon" />  </Button>
            </div>
        </div>

    );
};

export default SecondCard;