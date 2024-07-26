import { Inter } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import logo from "./assets/mebel logo.svg";
import pImg from './assets/people-icon.svg'
import sImg from './assets/search-icon.svg'
import shImg from './assets/shop-icon.svg'
import yImg from './assets/yurak-icon.svg'

import Link from "next/link";
const inter = Inter({ subsets: ["latin"] });

const FurnitureLayout = ({ children }: { children: React.ReactNode }) => {

  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen flex flex-col bg-gray-100 text-gray-900">
          <nav className="bg-white text-black p-4 ">
            <div className="container mx-auto flex justify-between items-center">
              <div className="flex gap-2">
                <Image src={logo} alt="logo img" width={50} />
                <h2 className="text-black font-bold text-3xl">Furniro</h2>
              </div>
              <div className="flex space-x-12">
                <Link href="/">Home</Link>
                <Link href="/shop">Shop</Link>
                <Link href="/Checkout">About</Link>
                <Link href="/contact">Contact</Link>
              </div>
              <div className="flex space-x-6">
                <Link href='/blog'><Image width={25} src={pImg} alt="img" /></Link>
                <Link href='productComparison'><Image className="cursor-pointer" width={25} src={sImg} alt="img" /></Link>
                <Link href='/cart'><Image className="cursor-pointer" width={25} src={shImg} alt="img" /></Link>
                <Image className="cursor-pointer" width={25} src={yImg} alt="img" />
              </div>
            </div>
          </nav>
          <main className="flex-grow container mx-auto p-8 bg-white rounded-lg mt-8">
            {children}
          </main>
          <footer>
            <div className="container bg-white  h-[350px] p-2">
              <div className="flex justify-around items-start min-lg:flex-wrap md:flex-wrap">
                  <div>
                    <h2 className="text-black font-bold text-3xl mb-[55px]">Furniro</h2>
                    <p>400 University Drive Suite 200 Coral Gables, <br />FL 33134 USA</p>
                  </div>
                  <div>
                    <ul>
                      <p className="text-base font-medium text-gray-300 mb-[55px]">Links</p>
                      <li>Home</li>
                      <li className="my-[46px]">Shop</li>
                      <li>About</li>
                      <li className="mt-[55px]">Contact</li>
                    </ul>
                  </div>
                  <div>
                    <ul>
                      <p className="text-base font-medium text-gray-300 mb-[55px]">Help</p>
                      <li>Payment Options</li>
                      <li className="my-[46px]">Returns</li>
                      <li>Privacy Policies</li>
                    </ul>
                  </div>
                  <div>
                    <input className="border-b-2 border-black mr-2 outline-none cursor-pointer" type="text" placeholder="Enter Your Email Address" />
                    <button className="border-b-2 border-black cursor-pointer">SUBSCRIBE</button>
                  </div>
              </div>
            </div>
            <div>
              <p className="text-start text-black my-4 ml-[90px]">2023 furino. All rights reverved</p>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <FurnitureLayout>{children}</FurnitureLayout>;
}