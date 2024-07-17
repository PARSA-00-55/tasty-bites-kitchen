import rightIcon from "@/public/icons-svg/arrow-right.svg";
import Image from "next/image";
import { Button } from "../ui/button";

const FirstCard = () => {
    return (
        <div className="animate-fade-up container mx-auto my-10 flex flex-col items-center p-6 md:flex-row md:items-start md:space-x-8">
            <div className="mb-6 flex flex-col items-end justify-center md:w-1/2">
                <h2 className="mb-2 text-xl font-semibold">Discover___</h2>
                <h4 className="mb-4 text-center font-serif text-3xl font-bold">Tropical Plants</h4>
                <p className="mb-4 items-end text-end text-sm">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                </p>

                <Button >view more <Image src={rightIcon} width={15} height={10} alt="rightIcon" />  </Button>

            </div>
            <div className="relative flex flex-col items-end md:w-1/2">
                <div className="absolute -translate-y-12 translate-x-8">
                    <Image src="https://htmlbeans.com/html/botanical/images/b-bdr.png" alt="image1" width={153} height={153} />
                </div>
                <div className="z-10 shadow-md">
                    <Image src="https://htmlbeans.com/html/botanical/images/img36.jpg" alt="image2" width={570} height={400} />
                </div>
            </div>
        </div>
    );
};

export default FirstCard;
