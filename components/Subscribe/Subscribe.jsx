import arrowRight from "@/public/icons-svg/arrow-right.svg";
import Image from "next/image";

const Subscribe = () => {
    return (
        <div className="container mx-auto px-5 mt-5">
            <section
                className="bg-cover pt-24 pb-12 py-10 px-3"
                style={{ backgroundImage: 'url(https://htmlbeans.com/html/botanical/images/n-bg.jpg)' }}
            >
                <header className="w-full mb-9 text-center">
                    <h1 className="text-4xl font-extrabold mb-4">
                        Subscribe Our Newsletter
                    </h1>
                    <span className="w-full mb-5 mx-auto overflow-hidden flex flex-wrap justify-center">
                        <Image src="https://htmlbeans.com/html/botanical/images/hbdr.png" height={70} width={300} alt="placeholder image" />
                    </span>
                    <p className="mb-6">
                        Enter Your email address to join our mailing list and keep
                        yourself updated
                    </p>
                </header>
                <form className="w-full mx-auto overflow-hidden flex flex-wrap justify-center rounded-full ">
                    <input
                        type="email"
                        className="px-4 py-3 border border-gray-300  flex-1 max-w-md rounded-l-full"
                        placeholder="Enter your email..."
                    />
                    <button
                        type="submit"
                        className="bg-btnColor hover:bg-[#8cbd5e]  text-sm text-white font-bold py-3 px-4 rounded-r-full flex justify-center items-center gap-2 duration-300"
                    >
                        Shop Now  <Image src={arrowRight} height={5} width={10} alt="arrow right" />
                    </button>
                </form>
            </section>
        </div>
    );
};

export default Subscribe;
