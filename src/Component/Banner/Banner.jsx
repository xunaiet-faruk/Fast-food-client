import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from 'react-responsive-carousel';
const Banner = () => {
    return (
        <div>
    
         

            <Carousel className="">
                <div>
                    <img src="https://i.ibb.co/2NCV8f1/slideshow-v1.jpg" className="w-full" />
                   <div className="absolute bottom-[180px] w-1/2 space-y-6">
                        <p className="text-xl text-[#f3f3f3] italic ">DON'T MISS TODAY'S FEATURED DEALS</p>
                        <p className="text-6xl font-semibold text-[#f8f8f8] italic">Best Burger  & Delicious</p>
                        <p className="text-4xl text-[#f2f2f2] italic ">Here to bring your life style to the next level.</p>
                  <button className="btn btn-outline btn-neutral px-8 text-white">Shop now</button>
                   </div>
                </div>
                <div>
                    <img  src="https://i.ibb.co/R7sPmnc/slideshow-v1-2.jpg" className="w-full" />
                    <div className="absolute bottom-[180px] w-1/2 ml-[700px] space-y-6">
                        <p className="text-xl text-[#f2f2f2] italic ">NEED-IT-NOW</p>
                        <p className="text-6xl font-semibold text-[#f8f8f8] italic">Best Burger  & Delicious</p>
                        <p className="text-4xl text-[#f2f2f2] italic ">Contemporary, minimal and beautifully iconic.</p>
                        <button className="btn btn-outline btn-neutral px-8 text-white">Shop now</button>
                    </div>
                </div>
                <div>
                    <img src={"https://i.ibb.co/MP0xbxY/slideshow-v4.jpg"} className="w-full" />
                    <div className="absolute bottom-[180px] w-1/2  space-y-6">
                        <p className="text-xl text-[#f2f2f2] italic ">Healthy & Food</p>
                        <p className="text-6xl font-semibold text-[#f8f8f8] italic">Best Burger  & Delicious</p>
                        <p className="text-4xl text-[#f2f2f2] italic ">Inspiration from the city, sea & the journey.</p>
                        <button className="btn btn-outline btn-neutral px-8 text-white">Shop now</button>
                    </div>
                </div>
                <div className="h-[400px]">
                    <img  src={"https://i.ibb.co/J7s5fz4/image.png"} className="w-full" />
                    <div className="absolute bottom-[180px] w-1/2  space-y-6">
                        <p className="text-xl text-[#f2f2f2] italic ">Healthy & Food</p>
                        <p className="text-6xl font-semibold text-[#f8f8f8] italic">Best pizza  & Delicious</p>
                        <p className="text-4xl text-[#f2f2f2] italic ">Inspiration from the city, sea & the journey.</p>
                        <button className="btn btn-outline btn-neutral px-8 text-white">Shop now</button>
                    </div>
                </div>
                
               
              
            </Carousel>


        </div>
    );
};

export default Banner;