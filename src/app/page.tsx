import Image from "next/image";
import home1 from './assets/home-1.svg'
import Product from "./product/page";
import Link from "next/link";
import rooms1 from './assets/rooms Img.svg'
import rooms2 from './assets/rooms-Img2.svg'
import rooms3 from './assets/room-Img-3.svg'
import room4 from './assets/icon-Restangel.svg'
import allAbsolyut from './assets/all-absolyut.svg'

async function getCategory() {
  const response = await fetch('https://ecommerce-backend-fawn-eight.vercel.app/api/categories');
  if(!response.ok) {
    throw new Error("Failed to fetch categorys")
  }
  return response.json()
}
interface ICategorys {
  id: string;
  name: string;
  image: string;
}

export default async function Home() {
  const category: ICategorys[] = await getCategory();
  return (
    <div className="flex flex-col  min-h-screen py-2">
      <Image className="absolute left-1  z-0" src={home1} alt="img" />
      <div className="w-[550px] right-11 h-auto ml-[750px] mt-[100px] z-10 bg-orange-100 pt-[72px] pr-[53px] pb-[47px] pl-[39px] md:left-11">
        <p className="text-black text-base font-semibold">New Arrival</p>
        <h2 className="text-5xl text-amber-400 font-bold mt-2 mb-5">Discover Our <br />New Collection</h2>
        <p className="text-lg font-medium mb-11">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut <br /> elit tellus, luctus nec ullamcorper mattis.</p>
        <a className="text-white text-base font-bold py-6 px-16 bg-amber-500" href="/shop">Buy Now</a>
      </div>
      <div className="z-10 mt-[250px]">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-black">Browse The Range</h2>
          <p className="text-xl font-normal text-gray-400 mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className="grid grid-cols-3 my-5 ml-[60px] max-md:flex-wrap rounded-md">
          {
            category.map((c) => (
              <div className="w-[350px] max-md:flex-wrap rounded-md  h-[440px]" key={c.id}>
                <Image className="rounded-lg max-md:flex-wrap"  width={350} height={50} src={c.image} alt="Img" /> <br />
                <p className="text-center py-2 text-black text-2xl font-semibold">{c.name}</p>
              </div>
            ))
          }
        </div>
      </div>
      <div>
        <div className="flex justify-center mt-[80px]">
          <h2 className="text-4xl font-bold text-slate-900">Our Products</h2> <br /> <br /> <br />
        </div>
        <div>
          <Product />
          <div className="text-center mt-10">
            <button className="text-amber-500 border-amber-500 border w-[245px] h-[50px] font-semibold text-base text-center">
              <Link href='/shop'>Show More</Link>
            </button>
          </div>
        </div>
        <div className="mt-[100px] max-md:flex-wrap h-[670px] bg-rose-100">
          <div className="flex max-md:flex-wrap  items-center justify-between">
            <div className="ml-20">
              <h2 className="text-4xl text-black font-bold">50+ Beautiful rooms <br />inspiration</h2>
              <p className="text-base text-gray-400 my-5">Our designer already made a lot of beautiful <br /> prototipe of rooms that inspire you</p>
              <button className="text-base font-semibold text-white w-[176px] h-[48px] bg-amber-600">Explore More</button>
            </div>
            <div className="flex gap-10 relative pt-[50px]">
              <Image className="" src={rooms1} alt="rooms" />
              <div>
                <Image src={rooms2} alt="rooms2" />
                <Image className="absolute mt-5" src={room4} alt="room4" />
              </div>
              <div>
                <Image src={rooms3} alt="rooms3" />
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="text-center my-10">
            <p className="text-xl text-gray-400 font-semibold">Share your setup with</p>
            <h2 className="text-4xl text-black font-bold">#FuniroFurniture</h2>
          </div>
          <div>
            <Image src={allAbsolyut} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
