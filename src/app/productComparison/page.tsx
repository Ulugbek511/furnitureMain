import Image from 'next/image'
import React from 'react'
import divaProduct from '../assets/product-compr.svg'
import starsProd from '../assets/stars-product.svg'
import line from '../assets/lineProduct.svg'
import divan2Prod from '../assets/product-compr1.png'
import Feature from "../feature/page";
import strelka from '../assets/strelka.svg'
import restagelImg from '../assets/Rectangle layout-img.svg'

function PageProductComparison() {
  return (
    <div>
      <div className='mb-[50px]'>
        <div className="relative flex items-center justify-center">
            <Image className="z-0" src={restagelImg} alt="res" />
            <div className="absolute top-10 w-[500px] h-[100px] flex flex-col items-center justify-center mt-[70px]">
                <h1 className="text-5xl font-medium mb-5">Product Comparison</h1>
                <h2 className="flex gap-5 text-base font-medium">Home <Image src={strelka} alt="res" /> Product Comparison</h2>
            </div>
        </div>
      </div>
      <div className='flex flex-row items-start justify-around mt-5'>
        <div>
            <h2 className='text-3xl text-black font-medium'>Go to Product <br /> page for more <br /> Products</h2>
            <button className='border-b border-gray-700 text-gray-600 px-1 mt-5'>View More</button>
        </div>
        <div>
            <Image src={divaProduct} alt='Image-rol' />
            <div>
                <h2 className='mt-5'>Asgaard Sofa</h2>
                <p className='my-3'>Rs. 250,000.00</p>
                <p className='flex items-center gap-2'>4.7 <Image src={starsProd} alt='Asgard-Star' /> <Image src={line} alt='Img line' /><span className='text-base text-gray-400'> 204 Review</span></p>
            </div>
        </div>
        <div>
            <Image src={divan2Prod} alt='Image-rol' />
            <div>
                <h2 className='mt-5'>Asgaard Sofa</h2>
                <p className='my-3'>Rs. 224,000.00</p>
                <p className='flex items-center gap-2'>4.2 <Image src={starsProd} alt='Asgard-Star' /> <Image src={line} alt='Img line' /><span className='text-base text-gray-400'> 145 Review</span></p>
            </div>
        </div>
        <div className='mt-[90px]'>
            <p className='text-2xl text-black font-semibold mb-[14px]'>Add A Product</p>
            <select className='border bg-yellow-600 w-[242px] h-[39px] rounded-lg p-2 text-white' name="" id="">
                <option value="chose">Choose a Product</option>
            </select>
        </div>
      </div>
      <hr className='w-full' />
      <div className='flex flex-row items-start'>
            <div className='ml-[50px]'>
            <p className='text-3xl text-black font-medium'>General</p>
            <div>
                <p className='mt-[28px] mb-[34px]'>Sales Package</p>
                <p>Model Number</p>
                <p className='my-[34px]'>Secondary Material</p>
                <p>Configuration</p>
                <p className='my-[34px]'>Upholstery Material</p>
                <p>Upholstery Color</p>
            </div>
            <p className='mt-[96px] text-3xl text-black font-medium'>Product</p>
            <div>
                <p className='mt-[28px] mb-[34px]'>Filling Material</p>
                <p>Finish Type</p>
                <p className='my-[34px]'>Adjustable Headrest</p>
                <p>Maximum Load Capacity</p>
                <p className='my-[34px]'>Origin of Manufacture</p>
            </div>
            <p className='text-3xl text-black font-medium'>Dimensions</p>
            <div>
                <p className='mt-[28px] mb-[34px]'>Width</p>
                <p>Height</p>
                <p className='my-[34px]'>Depth</p>
                <p>Weight</p>
                <p className='my-[34px]'>Seat Height</p>
                <p>Leg Height</p>
            </div>
            <p className='text-3xl text-black font-medium'>Warranty</p>
            <div>
                <p className='mt-[28px] mb-[63px]'>Warranty Summary</p>
                <p className='mb-[109px]'>Warranty Service <br />Type</p>
                <p className='mb-[121px]'>Covered in Warranty</p>
                <p className='mb-[159px]'>Not Covered in Warranty</p>
            </div>
            </div>
            <div className='pl-[75px] ml-[60px] pr-[80px] mr-[50px] border-l border-r'>
                <div className='mt-[65px]'>
                    <p className='mt-[28px] mb-[34px]'>1 sectional sofa</p>
                    <p>TFCBLIGRBL6SRHS</p>
                    <p className='my-[34px]'>Solid Wood</p>
                    <p>L-shaped</p>
                    <p className='my-[34px]'>Fabric + Cotton</p>
                    <p>Bright Grey & Lion</p>
                </div>
                <div className='mt-[160px]'>
                    <p className='mt-[28px] mb-[34px]'>Foam</p>
                    <p>Bright Grey & Lion</p>
                    <p className='my-[34px]'>No</p>
                    <p>280 KG</p>
                    <p className='my-[34px]'>India</p>
                </div>
                <div className='mt-[95px]'>
                    <p className='mt-[28px] mb-[34px]'>265.32 cm</p>
                    <p>76 cm</p>
                    <p className='my-[34px]'>167.76 cm</p>
                    <p>45 KG</p>
                    <p className='my-[34px]'>41.52 cm</p>
                    <p className='my-[34px]'>5.46 cm</p>
                </div>
                <div className='mt-[70px]'>
                    <p className='mt-[28px] mb-[34px]'>1 Year Manufacturing <br />Warranty</p>
                    <p>For Warranty Claims or <br />Any Product Related <br />Issues Please Email at<br /> operations@<br />trevifurniture.com</p>
                    <p className='my-[34px]'>Warranty Against<br /> Manufacturing Defect</p>
                    <p>The Warranty Does Not <br /> Cover Damages Due To <br />
                    Usage Of The Product <br /> Beyond Its Intended Use 
                    <br />And Wear & Tear In The
                    <br />Natural Course Of <br />
                    Product Usage.</p>
                    <p className='my-[34px]'>1 Year</p>
                    <button className='w-[215px] h-[60px] border-none bg-yellow-700 text-white text-xl font-normal'>Add To Cart</button>
                </div>
            </div>
            <div className='pl-[50px]'>
                <div className='mt-[45px]'>
                    <p className='mt-[40px] mb-[34px]'>1 Three Seater, 2 Single <br />Seater</p>
                    <p>DTUBLIGRBL568</p>
                    <p className='my-[34px]'>Solid Wood</p>
                    <p>L-shaped</p>
                    <p className='my-[34px]'>Fabric + Cotton</p>
                    <p className='my-[34px]'>Bright Grey & Lion</p>
                </div>
                <div className='mt-[155px]'>
                    <p className='mt-[40px] mb-[34px]'>Matte</p>
                    <p>Bright Grey & Lion</p>
                    <p className='my-[34px]'>yes</p>
                    <p>300 KG</p>
                    <p className='my-[34px]'>India</p>
                </div>
                <div className='mt-[95px]'>
                    <p className='mt-[28px] mb-[34px]'>265.32 cm</p>
                    <p>76 cm</p>
                    <p className='my-[34px]'>167.76 cm</p>
                    <p>65 KG</p>
                    <p className='my-[34px]'>41.52 cm</p>
                    <p className='my-[34px]'>5.46 cm</p>
                </div>
                <div className='mt-[47px]'>
                    <p className='mt-[28px] mb-[34px]'>1.2 Year Manufacturing<br /> Warranty</p>
                    <p>For Warranty Claims or <br />Any Product Related<br /> Issues Please Email at<br /> support@xyz.com</p>
                    <p className='my-[34px]'>Warranty of the product <br />is limited to <br /> manufacturing defects<br /> only.</p>
                    <p>The Warranty Does Not <br /> Cover Damages Due To <br /> Usage Of The Product <br /> Beyond Its Intended Use <br /> 
                    And Wear & Tear In The <br /> Natural Course Of <br /> Product Usage.</p>
                    <p className='my-[34px]'>3 Months</p>
                    <button className='w-[215px] h-[60px] border-none bg-yellow-700 text-white text-xl font-normal'>Add To Cart</button>
                </div>
            </div>
      </div>
      <div className='mt-[112px] mb-[40px]'>
        <Feature />
      </div>
    </div>
  )
}

export default PageProductComparison
