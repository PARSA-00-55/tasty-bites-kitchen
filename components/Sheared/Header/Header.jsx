import Image from "next/image";
import logo from "@/public/tasty-bites-kitchen-logo.png";

const Header = () => {
  return (
    <header class="text-gray-600 body-font">
      <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <Image src={logo} width={200} />
        </a>
        <nav class="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
          <a class="mr-5 hover:text-gray-900">Home</a>
          <a class="mr-5 hover:text-gray-900">About</a>
          <a class="mr-5 hover:text-gray-900">Restaurants</a>
          <a class="mr-5 hover:text-gray-900">Blog</a>
          <a class="mr-5 hover:text-gray-900">Contact</a>
        </nav>
        <div>
          <p>
            <span>Call For Order</span>
            <br />
            <span className="">1-123-000-000</span>
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;
