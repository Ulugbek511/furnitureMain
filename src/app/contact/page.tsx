"use client"
import React, { ChangeEvent } from 'react'
import Image from 'next/image'
import location from '../assets/location.svg';
import phone from '../assets/phone.svg';
import time from '../assets/time.svg';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Feature from "../feature/page";
import saka from '../assets/strelka.svg';
import restagelImg from '../assets/Rectangle layout-img.svg';

interface IInitialState {
    name: string,
    email: string,
    subject: string;
    message: string;
}

const initialState: IInitialState = {
    name: '',
    email: '',
    subject: '',
    message: ''
}

function PageContact() {
    const [state, setState] = React.useState(initialState)
    const handleSubmit = () => {
        if (state.name == '' || state.email == '' || state.subject == '' || state.message == '') {
            toast.error('Please fill all the fields', {
                position: "top-right",
                autoClose: 5000,
            })
        }
        else {
            toast.success('Message sent successfully', {
                position: "top-right",
                autoClose: 5000,
            })
            console.log(state);
            setState(initialState)
        }
    }
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setState({ ...state, [event.target.name]: event.target.value })
    }
  return (
    <div>
        <div>
            <div className="relative flex items-center justify-center">
            <Image className="z-0" src={restagelImg} alt="res" />
            <div className="absolute top-10 w-[500px] h-[100px] flex flex-col items-center justify-center mt-[70px]">
                <h1 className="text-5xl font-medium mb-5">Contact</h1>
                <h2 className="flex gap-5 text-base font-medium">Home <Image src={saka} alt="res" /> Contact</h2>
            </div>
        </div>
        </div>
        <div className='flex flex-col text-center mt-16 mb-24'>
            <h2 className='text-4xl font-semibold text-black'>Get In Touch With Us</h2>
            <p className='text-base font-medium text-gray-400 my-2'>For More Information About Our Product & Services. Please Feel Free To Drop Us
                <br /> An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!</p>
        </div>
        <div className='flex items-start justify-around'>
            <div>
                <div className='flex items-start gap-6'>
                    <div>
                        <Image src={location} alt='location' />
                    </div>
                    <div>
                        <h3 className='text-2xl font-medium text-black'>Address</h3>
                        <p className='text-base font-normal text-slate-800 '>236 5th SE Avenue, New <br /> York NY10000, United <br /> States</p>
                    </div>
                </div>

                <div className='flex items-start gap-6 my-10'>
                    <div>
                        <Image src={phone} alt='phone' />
                    </div>
                    <div>
                        <h3 className='text-2xl font-medium text-black'>Phone</h3>
                        <p className='text-base font-normal text-slate-800 '>Mobile: +(84) 546-6789 <br />Hotline: +(84) 456-6789</p>
                    </div>
                </div>

                <div className='flex items-start gap-6'>
                    <div>
                        <Image src={time} alt='time' />
                    </div>
                    <div>
                        <h3 className='text-2xl font-medium text-black'>Working Time</h3>
                        <p className='text-base font-normal text-slate-800  '>Monday-Friday: 9:00 - 22:00 <br />Saturday-Sunday: 9:00 - 21:00</p>
                    </div>
                </div>
            </div>
            <div className='flex flex-col'>
                <div className='flex flex-col'>
                    <label className='text-base font-medium text-black' htmlFor="name">Youre name</label>
                    <input onChange={handleChange} name='name' value={state.name} id='name' className='w-[520px] h-[70px] rounded-xl bg-transparent border-gray-500 border pl-5 outline-none cursor-pointer my-5' type="text" placeholder='Abc' />
                </div>

                <div className='flex flex-col'>
                    <label className='text-base font-medium text-black' htmlFor="email">Email address</label>
                    <input onChange={handleChange} name='email' value={state.email} id='email' className='w-[520px] h-[70px] rounded-xl bg-transparent border-gray-500 border pl-5 outline-none cursor-pointer my-5' type="text" placeholder='Abc@def.com' />
                </div>

                <div className='flex flex-col'>
                    <label className='text-base font-medium text-black' htmlFor="subject">Subject</label>
                    <input onChange={handleChange} name='subject' value={state.subject} id='subject' className='w-[520px] h-[70px] rounded-xl bg-transparent border-gray-500 border pl-5 outline-none cursor-pointer my-5' type="text" placeholder='This is an optional' />
                </div>

                <div className='flex flex-col'>
                    <label className='text-base font-medium text-black' htmlFor="message">Message</label>
                    <input onChange={handleChange} name='message' value={state.message} id='message' className='w-[520px] h-[110px] rounded-xl bg-transparent border-gray-500 border pl-5 outline-none cursor-pointer my-5' type="text" placeholder='Hi! i’d like to ask about' />
                </div>
                <div className='my-5'>
                    <button onClick={handleSubmit} className='w-[230px] h-[55px] bg-yellow-600 rounded-md text-white outline-none'>Submit</button>
                    <ToastContainer />
                </div>
            </div>
        </div>
        <div className='my-5'>
            <Feature />
        </div>
    </div>
  )
}

export default PageContact
