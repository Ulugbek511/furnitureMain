import Image from "next/image";
import strelka from '../../assets/strelka.svg'
import feauture from '../../assets/filter-right-3.svg'
import starsFour from '../../assets/stars-four.png'
import starsFive from '../../assets/five-starrs.png'
import starsThree from '../../assets/three-star.png'
import starsTwo from '../../assets/two-starr.png'
import starsOne from '../../assets/one-star.png'
import starsBirYarim from '../../assets/stars-bir-yarim.png';
import starsIkkiYarim from '../../assets/ikki-yarim.png';
import starsUchYarim from '../../assets/uch-yarim.png';
import starsTortYarim from '../../assets/tort-yarim.png';
import zeroStars from '../../assets/zero-stars.png'
import faceBook from '../../assets/face-book.svg';
import linkedin from '../../assets/linkedin.svg';
import twitter from '../../assets/face-book.svg';
import divan1 from '../../assets/divan-single-product.svg';
import divan2 from '../../assets/divan-single-product-ikki.svg';
import relative1 from '../../assets/related-1.svg';
import relative2 from '../../assets/related-2.svg';
import relative3 from '../../assets/related-3.svg';
import Link from "next/link";
import CartClient from "@/app/cartClient/page";



async function getProdId(id: string) {
    const res = await fetch(`https://66a0f0557053166bcabd6c0a.mockapi.io/exam/v1/Dashboard/${id}`)
    if(!res.ok) {
        throw new Error('Error fetching product')
    }
    return res.json();
}

export default async function PagePro({ params }: { params: { id: string } }) {
    const { id } = params;
    const product = await getProdId(id)
    return (
        <div>
            <div className="bg-rose-100 h-24 flex items-center gap-5 pl-24">
                <p className="text-base font-normal text-gray-400">Home</p>
                <Image src={strelka} alt="strelka" />
                <p className="text-base font-normal text-gray-400">Shop</p>
                <Image src={strelka} alt="strelka" />
                <Image src={feauture} alt="future" />
                <p className="text-base font-medium text-black">{product.title}</p>
            </div>
            <div className="flex items-start justify-around my-5">
                <div>
                    <Image className="rounded-md" width={100} height={60} src={product.image} alt="img" />
                    <Image className="rounded-md my-8" width={100} height={60} src={product.image} alt="img" />
                    <Image className="rounded-md" width={100} height={60} src={product.image} alt="img" />
                    <Image className="rounded-md mt-8" width={100} height={60} src={product.image} alt="img" />
                </div>
                <div>
                    <Image src={product.image} alt="img-Product" width={423} height={500} />
                </div>
                <div>
                    <h1 className="text-5xl font-normal text-black capitalize">{product.title}</h1>
                    <p className="text-2xl font-medium text-gray-400 mt-5 mb-3">Rs {product.price}.00</p>
                    <p>
                        {
                            product.rate === 1 ? <Image  width={250} height={250} src={starsOne} alt="stars-four" /> 
                            : product.rate === 2 ? <Image  width={250} height={250} src={starsTwo} alt="star-three" /> 
                            : product.rate === 3 ? <Image  width={250} height={250} src={starsThree} alt="stars-three" /> 
                            : product.rate === 4 ? <Image  width={250} height={250} src={starsFour} alt="star-one" />
                            : product.rate === 5 ? <Image  width={250} height={250} src={starsFive} alt="stars-five" />
                            : product.rate === 1.5 ? <Image  width={250} height={250} src={starsBirYarim} alt="stars-one-yarim" />
                            : product.rate === 2.5 ? <Image  width={250} height={250} src={starsIkkiYarim} alt="stars-two-yarim" />
                            : product.rate === 3.5 ? <Image  width={250} height={250} src={starsUchYarim} alt="stars-three-yarim" />
                            : product.rate === 4.5 ? <Image  width={250} height={250} src={starsTortYarim} alt="stars-four-yarim" />
                            : <Image width={250} height={250} src={zeroStars} alt="stars-zero" />
                        }
                    </p>
                    <p className="text-sm font-normal text-black mt-5 mb-3">{product.subtitle}</p>
                    <p className="text-sm font-normal text-gray-400">Size</p>
                    <button className="w-10 h-10 bg-amber-600 text-white rounded-lg uppercase my-3">{product.size}</button>
                    <p className="text-sm font-normal text-gray-400">Color</p>
                    <button className={`bg-${product.color}-600 w-10 h-10 rounded-full my-3`}></button>
                    <div className="flex items-center gap-5">
                        <CartClient message={`${product.id}`} />
                        <button className="w-[200px] h-[60px] border rounded-xl border-black">+ Compare</button>
                    </div>
                    <hr className="border my-10" />
                    <div className="flex items-center justify-between w-[290px]">
                        <div>
                            <p className="text-base font-medium text-gray-400">SKU</p>
                            <p className="text-base font-medium text-gray-400">Category</p>
                            <p className="text-base font-medium text-gray-400">Tags</p>
                            <p className="text-base font-medium text-gray-400">Share</p>
                        </div>
                        <div>
                            <p className="text-base font-medium text-gray-400"><span className="mr-3">:</span>  SS001</p>
                            <p className="text-base font-medium text-gray-400"><span className="mr-3">:</span>  Sofas</p>
                            <p className="text-base font-medium text-gray-400"><span className="mr-3">:</span>  Sofa, Chair, Home, Shop</p>
                            <p className="flex items-center gap-3 text-gray-400"><span className="mr-3">:</span>  
                                <Image src={faceBook} alt="ijtimoiy tarmoq rasmi" />
                                <Image src={linkedin} alt="ijtimoiy tarmoq rasmi" />
                                <Image src={twitter} alt="ijtimoiy tarmoq rasmi" />
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div>
                    <hr className="border-2" />
                </div>
                <div className="flex items-center justify-around my-[40px]">
                    <p className="text-2xl text-black font-medium">Description</p>
                    <p className="text-2xl text-gray-400 font-normal">Additional Information</p>
                    <p className="text-2xl text-gray-400 font-normal">Reviews [5]</p>
                </div>
                <div className="flex flex-col items-start ml-20">
                    <p className="text-lg font-normal text-gray-400 mb-8">Embodying the raw, wayward spirit of rock n roll, the Kilburn portable active stereo speaker takes the unmistakable look and 
                        <br /> sound of Marshall, unplugs the chords, and takes the show on the road.</p>
                    <p className="text-lg font-normal text-gray-400">Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest 
                        <br /> speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange 
                        <br /> and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls 
                        <br /> to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.</p>
                </div>
                <div className="flex items-center justify-around my-5">
                    <Image src={divan2} alt="divan" />
                    <Image src={divan1} alt="divan2" />
                </div>
            </div>
            <div>
                <hr className="border-2" />
                <div className="mt-11 mb-5">
                    <h2 className="text-3xl font-medium text-center">Related Products</h2>
                </div>
                <div>
                    <div className="flex items-center justify-around">
                        <div className="relative">
                            <button className="absolute bg-rose-400 w-12 h-12 rounded-full text-white top-6 left-[210px]">-30%</button>
                            <Image width={284} height={300} src={relative1} alt="relative" />
                            <div className="bg-gray-200 w-[284px] p-5">
                                <h2 className="text-2xl font-semibold text-black">Syltherine</h2>
                                <p className="text-base font-medium text-gray-400 my-2">Stylish cafe chair</p>
                                <div className="flex items-center justify-between">
                                    <p className="text-xl font-medium text-black">Rp 2.500.000</p>
                                    <del className="text-base font-normal text-gray-400">Rp 3.500.000</del>
                                </div>
                            </div>
                        </div>

                        <div className="relative">
                            <Image width={284} height={300} src={relative2} alt="relative" />
                            <div className="bg-gray-200 w-[284px] p-5">
                                <h2 className="text-2xl font-semibold text-black">Leviosa</h2>
                                <p className="text-base font-medium text-gray-400 my-2">Stylish cafe chair</p>
                                <div className="flex items-center justify-between">
                                    <p className="text-xl font-medium text-black">Rp 2.500.000</p>
                                </div>
                            </div>
                        </div>

                        <div className="relative">
                            <button className="absolute bg-rose-400 w-12 h-12 rounded-full text-white top-6 left-[210px]">-50%</button>
                            <Image width={284} height={300} src={relative3} alt="relative" />
                            <div className="bg-gray-200 w-[284px] p-5">
                                <h2 className="text-2xl font-semibold text-black">Lolito</h2>
                                <p className="text-base font-medium text-gray-400 my-2">Luxury big sofa</p>
                                <div className="flex items-center justify-between">
                                    <p className="text-xl font-medium text-black">Rp 7.000.000</p>
                                    <del className="text-base font-normal text-gray-400">Rp 14.000.000</del>
                                </div>
                            </div>
                        </div>

                        <div className="relative">
                            <button className="absolute bg-emerald-500 w-12 h-12 rounded-full text-white top-6 left-[210px]">New</button>
                            <Image width={284} height={300} src={relative1} alt="relative" />
                            <div className="bg-gray-200 w-[284px] p-5">
                                <h2 className="text-2xl font-semibold text-black">Respira</h2>
                                <p className="text-base font-medium text-gray-400 my-2">Outdoor bar table and stool</p>
                                <div className="flex items-center justify-between">
                                    <p className="text-xl font-medium text-black">Rp 500.000</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center justify-center mt-[44px] mb-[50px]">
                        <button className="w-[245px] h-[45px] border border-amber-600">
                            <Link className="text-amber-600 text-base font-medium" href='/shop'>Show More</Link>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}