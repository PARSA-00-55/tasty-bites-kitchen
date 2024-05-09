import logo from "@/public/tasty-bites-kitchen-logo.png";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  const QuickLinks = [
    { id: 0, name: "Pizza", Link: "http://localhost:3000/pizza" },
    { id: 1, name: "Burger", Link: "http://localhost:3000/burger" },
    { id: 2, name: "Cake", Link: "http://localhost:3000/cake" },
    { id: 3, name: "Chocolate", Link: "http://localhost:3000/chocolate" },
    { id: 4, name: "Ice Cream", Link: "http://localhost:3000/iceCream" },
  ];
  const ImportantLinks = [
    { id: 0, name: "About", Link: "http://localhost:3000/about" },
    { id: 1, name: "News", Link: "http://localhost:3000/News" },
    { id: 2, name: "Shop", Link: "http://localhost:3000/Shop" },
    { id: 3, name: "Contact", Link: "http://localhost:3000/Contact" },
  ];

  return (
    <footer className="text-gray-600 body-font container  mx-auto">
      <div className=" px-5 py-24  flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
        <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left my-3">
          <Link
            href="/"
            className="title-font font-medium items-center md:justify-start justify-center "
          >
            <Image src={logo} width={200} alt="logo" />
            <p className="text-gray-500 text-xs mb-3">
              Where Taste Meets Tradition
            </p>
          </Link>
        </div>

        <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
          <div className="lg:w-1/3 md:w-1/2 w-full px-4">
            <h2 className="title-font font-bold text-gray-900 tracking-widest text-sm mb-3">
              Quick Links
            </h2>
            <nav className="list-none mb-10 flex flex-col gap-2">
              {QuickLinks.map((QuickLink) => {
                return (
                  <li key={QuickLink.id}>
                    <Link
                      href={QuickLink.Link}
                      className="text-gray-600 hover:text-gray-800"
                    >
                      {QuickLink.name}
                    </Link>
                  </li>
                );
              })}
            </nav>
          </div>

          <div className="lg:w-1/3 md:w-1/2 w-full px-4">
            <h2 className="title-font text-gray-900 tracking-widest text-sm mb-3 font-bold">
              Important Links
            </h2>
            <nav className="list-none mb-10 flex flex-col gap-2">
              {ImportantLinks.map((ImportantLink) => {
                return (
                  <li key={ImportantLink.id}>
                    <Link
                      href={ImportantLink.Link}
                      className="text-gray-600 hover:text-gray-800"
                    >
                      {ImportantLink.name}
                    </Link>
                  </li>
                );
              })}
            </nav>
          </div>

          <div className="lg:w-1/3 md:w-1/2 w-full px-4  items-center ">
            <h2 className="title-font font-bold text-gray-900 tracking-widest text-sm mb-3">
              Social Links
            </h2>
            <nav className="list-none mb-10 flex flex-col gap-2 ">
              <li className="ml-3 text-gray-500 inline-flex">
                <svg
                  fill="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                </svg>
                Twitter
              </li>
              <li className="ml-3 text-gray-500 inline-flex">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                </svg>{" "}
                instagram
              </li>
              <li className="ml-3 text-gray-500 inline-flex">
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="0"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="none"
                    d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                  ></path>
                  <circle cx="4" cy="4" r="2" stroke="none"></circle>
                </svg>{" "}
                Linkedin
              </li>
              <li className="text-gray-500 inline-flex px-2">
                <svg
                  fill="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                </svg>
                Facebook
              </li>
            </nav>
          </div>
        </div>
      </div>
      <div className=" flex justify-center items-center text-center sm:text-left">
        <p className="text-gray-500 text-xs">
          © 2024 All Rights Reserved By Company —
          <Link
            href="/"
            rel="noopener noreferrer"
            className="text-gray-600 ml-1"
          >
            @TastyBitesKitchen
          </Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
