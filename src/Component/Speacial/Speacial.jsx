

const Speacial = () => {
    return (
      <div className="max-w-screen-xl mx-auto ">
            <div>
                <p className="text-[#FFCC00] text-2xl font-semibold text-center mb-2 mt-8">Speciality</p>
                <p className="text-[#f3f3f3] text-5xl font-semibold text-center">Our Special Ingridients</p>
            </div>
            <div className="flex justify-center  ml-52 mt-12">
             <div className="mt-12 space-y-20">
                    <div className="w-1/2  text-center">
                        <h1 className="text-white font-semibold italic text-4xl">Fresh Bun</h1>
                        <p className=" text-white">This Mexican Style Burger is pumped out with flavor from chilli powder, cilantro & jalapeno pepper. Served on buns topped with lettuce.</p>
                    </div>
                    <div className="w-1/2 text-center">
                        <h1 className="text-white  font-semibold italic text-4xl">Slice
                            Onion</h1>
                        <p className=" text-white">This Mexican Style Burger is pumped out with flavor from chilli powder, cilantro & jalapeno pepper. Served on buns topped with lettuce.</p>
                    </div>
             </div>

                <div>
                    <img className="w-[900px] -ml-20" src={"https://i.ibb.co/vBTKsKs/special-food.png"} alt="" />

                </div>
                <div className="space-y-12">
                    <div className="w-1/2 text-center mt-12">
                        <h1 className="text-white text-4xl  font-semibold italic">Pure
                            Butter</h1>
                        <p className=" text-white">This Mexican Style Burger is pumped out with flavor from chilli powder, cilantro & jalapeno pepper. Served on buns topped with lettuce..</p>
                    </div>
                    <div className="w-1/2 text-center">
                        <h1 className="text-white text-4xl  font-semibold italic">Fresh
                            Lettuse</h1>

                        <p className="text-white">This Mexican Style Burger is pumped out with flavor from chilli powder, cilantro & jalapeno pepper. Served on buns topped with lettuce..</p>                    </div>
                </div>
            </div>
      </div>
    );
};

export default Speacial;