

const Bestfood = () => {
    return (
        <div className="">
            <h1 className="text-[#FFCC00] text-2xl font-semibold text-center mb-2 mt-16">BEST FOOD MENU</h1>
            <h1 className="text-white text-5xl font-semibold text-center">Choose Your Best Menus</h1>
            <div className="flex gap-12 p-12">

                <div>

                    <img className="rounded-full" src={"https://i.ibb.co/zQpcLv7/menu-single-1.jpg"} alt="" />

                </div>
                <div className="mt-12 space-y-12">

                    <div className="flex mb-5 gap-4">
                        <img src={"https://i.ibb.co/rstq20D/thumb-1.png"} alt="" />
                        <div className="space-y-2">
                            <h1 className="text-gray-300 mt-7 text-2xl hover:text-red-500">Hamburger ---------------------$24</h1>
                            <h1 className=" text-gray-300">Toested french bread topped with romano</h1>
                            <div className="rating mt-2">
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400"  />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <h1 className="text-gray-400 text-xl ">(5k Reviews)</h1>
                            </div>
                        </div>
                    </div>
                    <div className="flex mb-5 gap-4">
                        <img src={"https://i.ibb.co/hfPkcZg/thumb-2.png"} alt="" />
                        <div className="space-y-2">
                            <h1 className="text-gray-300 mt-7 text-2xl hover:text-red-500">Pizza ---------------------$64</h1>
                            <h1 className=" text-gray-300">Cherry-size fresh mozzarella cheese balls</h1>
                            <div className="rating mt-2">
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400"  />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" /> 
                                <h1 className="text-gray-400 text-xl ">  (5k Reviews)</h1>
                            </div>
                        </div>
                    </div>
                    <div className="flex mb-5 gap-4">
                        <img src={"https://i.ibb.co/MnSvrsM/thumb-3.png"} alt="" />
                        <div className="space-y-2">
                            <h1 className="text-gray-300 mt-7 text-2xl hover:text-red-500">Baked Chicken Wings -------------$74</h1>
                            <h1 className=" text-gray-300">Parboiled, spiced, and roasted in a high-heat oven</h1>
                            <div className="rating mt-2">
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400"  />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400"  />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" /> 
                                <h1 className="text-gray-400 text-xl ">  (5k Reviews)</h1>
                            </div>
                        </div>
                    </div>
                    <div className="flex mt-5 gap-4">
                        <img className="w-36" src={"https://i.ibb.co/N3MQcQH/discover-1.png"} alt="" />
                        <div className="space-y-2">
                            <h1 className="text-gray-300 mt-7 text-2xl hover:text-red-500">Dessert -----------------$84</h1>
                            <h1 className=" text-gray-300">Cherry-size fresh mozzarella cheese balls

</h1>
                            <div className="rating mt-2">
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400"  />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400"  />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" /> 
                                <h1 className="text-gray-400 text-xl ">  (5k Reviews)</h1>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default Bestfood;