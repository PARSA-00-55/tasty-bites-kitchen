import Copyright from "@/components/Footer/Copyright";
import { dbConnect } from "@/dataQueries/mongo";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "TastyBitesKitchen",
  description: "Where Taste Meets Tradition",
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
