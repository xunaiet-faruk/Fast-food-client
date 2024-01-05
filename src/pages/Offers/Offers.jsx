import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Offers = () => {
    const [offers,setOffers] =useState([])
    useEffect(()=>{

    fetch('Offers.json')
    .then(res => res.json())
    .then(data => setOffers(data))
    
    },[])
    return (
        <div className="max-w-screen-xl mx-auto">
            <div className="hero min-h-screen " style={{ backgroundImage: 'url(https://i.ibb.co/YPS7VCT/image.png)' }}>
                <div className="hero-overlay bg-opacity-30"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="">
                        <h1 className="mb-5 text-4xl font-semibold text-[#FFCC00]">Combos</h1>
                        <h1 className="mb-5 text-3xl italic font-bold">Our Best Combos To Choose</h1>
                       <Link className="text-red-500 text-xl hover:bg-yellow-400 px-5 rounded-full" to={'/'}>Home</Link>
                    </div>
                </div>
            </div>

            <div className="flex justify-center items-center">
                <img src={"https://i.ibb.co/3MVBgWT/image-removebg-preview-26.png"} alt="" />
            </div>

            <div className="grid lg:grid-cols-2 grid-cols-1 gap-10 ">
              {
              
              offers.map(item =>
                  <div key={item.id} className="hero  h-[330px] rounded-xl " style={{ backgroundImage: `url(${item?.image})` }}>
                      <div className="hero-overlay  hover:opacity-35 "></div>
                      <div className="mt-44">
                        <h1 className="text-white text-4xl font-bold">{item.number}</h1>
                          <h1 className="text-white  text-4xl font-bold">{item.name}</h1>
                      </div>
                 
                          
                      <div className="bg-[#FFCC00] hover:bg-red-600 absolute p-8 rounded-bl-full border ml-[500px] mb-[220px] border-red-600">
                    <h1 className="text-white font-bold">$ {item.price}</h1>
                    </div>
                    
                      
                  </div>
                
              )
              
              
              }
            </div>
        </div>
    );
};

export default Offers;