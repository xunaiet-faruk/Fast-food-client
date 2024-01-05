import { useEffect } from "react";
import { useState } from "react";
import { FaShoppingBasket } from "react-icons/fa";
import { Link } from "react-router-dom";

const Shop = () => {
 
    const [shop,setShop] =useState([])
    useEffect(()=>{

        fetch('Shop.json')
        .then(res => res.json())
        .then(data => setShop(data))

    },[])
    return (
        <div className="">
            <div className="hero min-h-screen mb-20" style={{ backgroundImage: 'url(https://i.ibb.co/1ffxGxr/image.png)' }}>
                <div className="hero-overlay bg-opacity-40"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold italic">Shop here</h1>
                        <Link className="text-red-500 text-xl hover:bg-yellow-400 px-5 rounded-full" to={'/'}>Home</Link>
                    </div>
                </div>
            </div>
            <h1>
                <h2 className="text-5xl mt-5 mb-20 text-[#FFCC00] font-bold italic text-center ">Choose your best food</h2>
            </h1>
            
            <div className="grid grid-cols-3 gap-12 max-w-screen-xl mx-auto">
                {
                    shop.map(item => <div key={item.id} className="card hover:h-[430px]  ease-in duration-300   h-[400px] w-96 hover:shadow-yellow-300 bg-base-100 shadow-xl">
                        <figure><img src={item?.image}  alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">
                              {item?.name}
                             
                            </h2>
                           
                            <p>{item?.short_description}</p>
                            <div className="absolute bottom-[250px] ml-[300px]">
                                <FaShoppingBasket className="bg-yellow-500 cursor-pointer text-5xl hover:bg-red-500 rounded-full p-2" />

                            </div>
                            <div className="card-actions justify-between">
                                                 
                                
                                <div className="flex gap-5 font-bold">
                                    <div className=" text-[#FFCC00] ">${item?.price}</div>
                                    <div className="text-black line-through">
                                        $ {item.privious}
                                    </div>
                                </div>
                                <div className="rating rating-md">
                                    <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" checked />
                                    <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                                </div>   
                                   </div>
                      
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Shop;