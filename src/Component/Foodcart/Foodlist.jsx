import { FaShoppingBasket } from "react-icons/fa";


const Foodlist = ({item}) => {
    return (
        <div className="hover:font-bold mt-12">
            <div className="bg-gray-900 hover:bg-yellow-400 justify-between flex gap-5 shadow-2xl w-96 h-28  rounded-tr-full rounded-bl-full">
           <img src={item?.image} alt="" />
           <div className="">
                <h1 className="text-white mt-6">{item?.name}</h1>
                    <h1 className="text-white hover:text-red-700 ">$ {item?.price}</h1>
           </div>
           <div className="mt-7 pr-2">
            <FaShoppingBasket className="bg-yellow-500 text-5xl hover:bg-red-500 rounded-full p-2"/>
           </div>

        </div>
        
        
            
        
       </div>
    );
};

export default Foodlist;