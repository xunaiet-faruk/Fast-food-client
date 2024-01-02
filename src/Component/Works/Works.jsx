import { TiShoppingCart } from "react-icons/ti";
import { FaCcAmazonPay } from "react-icons/fa";
import { RiEBike2Line } from "react-icons/ri";

const Works = () => {
    return (
        <div className="mb-20 mt-12">
            <div className="bg-white rounded-tr-full space-y-3 rounded-bl-full w-full h-[300px]">
                <h1 className="text-5xl font-semibold text-center text-[#FFCC00] pt-5"> How It Works</h1>
                <p className="text-center text-xl font-semibold italic">Vestibulum libero nisl, porta vel, scelerisque eget, malesuada at, neque.<br/> Vivamus
                    eget nibh. Etiam cursus leo vel metus. Nulla facilisi.</p>
               <div className="flex justify-center items-center ml-5">
                    <div className="">

                        <TiShoppingCart className="text-7xl ml-5 text-red-500 hover: rounded-full " />
                        <h1 className="font-bold">Select Your Food</h1>
                    </div>
                    <img className="w-12 ml-5" src={"https://i.ibb.co/MS2W3wc/image-removebg-preview-19.png"} alt="" />

                    <div className="p-10 ">
                        <FaCcAmazonPay className="text-7xl ml-10 text-red-500 rounded-full " />
                        <h1 className="font-bold">Pay With Card or Cash </h1>
                    </div>
                    <img className="w-12 ml-7" src={"https://i.ibb.co/MS2W3wc/image-removebg-preview-19.png"} alt="" />

                    <div className="p-10 ">
                        <RiEBike2Line className="text-7xl  ml-5 text-red-500 rounded-full " />
                        <h1 className="font-bold">Pickup or Delivery</h1>
                    </div>
                   
               </div>
             
            </div>
            <div>
                
            </div>

        </div>
    );
};

export default Works;