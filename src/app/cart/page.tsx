"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import Feature from "../feature/page";
import strelka from "../assets/strelka.svg";
import restagelImg from "../assets/Rectangle layout-img.svg";
import Image from "next/image";
import deleteImg from "../assets/delete.svg";

interface Cart {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  description: string;
  rate: number;
  price: number;
  size: string;
  color: string;
  __v: string;
}

function PageCart() {
  const [product, setProduct] = useState([]);
  const [cart, setCart] = useState<Cart[]>([]);
  const [total, setTotal] = useState(0);
  // const [count, setCount] = useState(0);
  useEffect(() => {
    const productLocalStorageJson = JSON.parse(
      localStorage.getItem("product-details") || "[]"
    );
    setProduct(productLocalStorageJson);
  }, []);
  useEffect(() => {
    async function getProductsId() {
      try {
        const responses = await Promise.all(
          product.map((id) =>
            axios.get(
              `https://66a0f0557053166bcabd6c0a.mockapi.io/exam/v1/Dashboard/${id}`
            )
          )
        );
        const products = responses.map((response) => response.data);
        setCart(products);
      } catch (errr) {
        console.log(errr);
      }
    }
    getProductsId();
  }, [product]);
  useEffect(() => {
    const calculateTotal = () => {
      const totalPrice = cart.reduce((acc, p) => acc + p.price, 0);
      setTotal(totalPrice);
    };
    calculateTotal();
  }, [cart]);

  function delItem(id: any) {
    const x = product.splice(id, 1);
    console.log(x);
    setProduct(product.splice(id, 1)); // 2nd parameter means remove one item only

    localStorage.setItem("product-details", JSON.stringify(product));
    console.log(product);
  }

  return (
    <div>
      <div>
        <div className="relative flex items-center justify-center">
          <Image className="z-0" src={restagelImg} alt="res" />
          <div className="absolute top-10 w-[500px] h-[100px] flex flex-col items-center justify-center mt-[70px]">
            <h1 className="text-5xl font-medium mb-5">Cart</h1>
            <h2 className="flex gap-5 text-base font-medium">
              Home <Image src={strelka} alt="res" />
              Cart
            </h2>
          </div>
        </div>
      </div>
      <div className="flex flex-row gap-5 items-start max-md:flex-wrap">
        <div className="flex flex-col mt-[72px]">
          <div className="w-[817px] h-14 bg-rose-100 flex items-center mb-[55px]">
            <p className="text-base font-semibold text-black ml-[142px] mr-[114px]">
              Product
            </p>
            <p className="text-base font-semibold text-black">Price</p>
            <p className="text-base font-semibold text-black ml-[137px] mr-[36px]">
              Quantity
            </p>
            <p className="text-base font-semibold text-black">Subtotal</p>
          </div>
          <div>
            {cart.map((p, i) => (
              <div key={p.id} className="mb-10 flex items-center">
                <Image width={105} height={105} src={p.image} alt={p.title} />
                <p className="text-lg text-gray-400 ml-9">{p.title}</p>
                <p className="text-lg text-gray-400 ml-[70px]">
                  Rs. {p.price}.00
                </p>
                <button className="w-8 h-8 border border-gray-300 rounded-md ml-[100px]">
                  1
                </button>
                <p className="text-lg font-medium ml-[60px]">
                  Rs. {p.price}.00
                </p>
                <button onClick={() => delItem(i)}>
                  <Image className="ml-8" src={deleteImg} alt="delete" />
                </button>
              </div>
            ))}
          </div>
        </div>
        <div>
          <div className="w-[393px] h-[390px] bg-rose-100 rounded-sm mt-[70px]">
            <div className="text-center pt-4">
              <h2 className="text-3xl font-semibold text-black mt-7">
                Cart Totals
              </h2>
            </div>
            <div className="mt-16 ml-2">
              <div className="flex items-center w-[300px]  ml-[55px]">
                <p className="text-lg font-medium text-black mr-[70px] ml-[5px]">
                  Subtotal
                </p>
                <p className="text-base font-medium text-gray-400">
                  Rs.{total}
                </p>
              </div>
              <div className="flex items-center w-[300px] ml-[55px]">
                <p className="text-lg font-medium text-black mr-[45px] ml-[5px]">
                  Total
                </p>
                <p className="text-2xl font-medium text-yellow-700">
                  Rs. {total}
                </p>
              </div>
              <div className="ml-[75px] mt-[50px]">
                <a
                  className="w-[222px] h-[55px] border border-black rounded-2xl p-5
                "
                  href="/Checkout"
                >
                  Check Out
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="my-5">
        <Feature />
      </div>
    </div>
  );
}

export default PageCart;
