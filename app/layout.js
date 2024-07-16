import Copyright from "@/components/Footers/Copyright";
import { dbConnect } from "@/dataQueries/mongo";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Botanical",
  description:
    "Botanical offers a curated selection of premium plants and gardening essentials. Discover a variety of vibrant houseplants, unique planters, and expert care tips to transform your space into a lush, green sanctuary. Elevate your home with Botanical's natural beauty.",
};

export default async function RootLayout({ children }) {
  await dbConnect();
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Copyright />
      </body>
    </html>
  );
}
