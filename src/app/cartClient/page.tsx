"use client"
import { useEffect, useState } from "react"
import { json } from "stream/consumers";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface CartClientMessage {
    message: string;
}

const CartClient: React.FC<CartClientMessage> = ({ message }) => {
    const [count, setCount] = useState<number>(1);
    const [ id, setId ] = useState<string[]>([])
    const [cart, setCart] = useState(false)
    useEffect(() => {
        setId(message ? [message] : []);
    }, [message])
    const increment = () => {
        setCount(count + 1)
    }
    const decrement = (zero: number) => {
        zero > 1 ? setCount(zero - 1) : setCount(1)
    }
    const handleSubmit = () => {
        const cart = JSON.parse(localStorage.getItem('product-details') || '[]');
        if (cart.includes(id)) {
          const index = cart.indexOf(id);
          cart.splice(index, 1);
          localStorage.setItem('product-details', JSON.stringify(cart));
          setCart(false);
        } else {
          cart.push(id);
          localStorage.setItem('product-details', JSON.stringify(cart));
          toast.success("Completed successfully", {
            position: "top-right",
            autoClose: 5000,
          })
          setCart(true);
        }
    };
  return (
    <div>
        <div className="flex items-center gap-5">
        <div className="w-[125px] h-[60px] border flex items-center justify-around rounded-lg">
            <button onClick={() => decrement(count)} className="text-xl font-medium text-black">-</button>
            <p>{count}</p>
            <button onClick={increment} className="text-xl font-medium text-black">+</button>
        </div>
        <button onClick={handleSubmit} className="w-[215px] h-[60px] border rounded-xl border-black">Add To Cart</button>
        <ToastContainer />
        </div>
    </div>
  )
}

export default CartClient
