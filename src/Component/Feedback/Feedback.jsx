import { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const Feedback = () => {
    const [datas,setData] =useState([])
    useEffect(()=>{
        fetch('/Feedback.json')
        .then(res => res.json())
        .then(data => setData(data))

    },[])
    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const onAutoplayTimeLeft = (s, time, progress) => {
        progressCircle.current.style.setProperty('--progress', 1 - progress);
        progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    };
    return (
        <div className="mt-12 p-12">
            <h1 className="text-[#FFCC00] ml-12 font-semibold">TESTIMONIALS & REVIEWS</h1>
            <h1 className="text-white text-5xl font-bold ml-12 mt-2">Our Customar <br/> Feedbacks</h1>
            <div className="flex justify-between">
                
               <div className="mt-20">


                    <Swiper
                        spaceBetween={30}
                        centeredSlides={true}
                        autoplay={{
                            delay: 2000,
                            disableOnInteraction: false,
                        }}
                        pagination={{
                            clickable: true,
                        }}
                        navigation={true}
                        modules={[Autoplay, Pagination, Navigation]}
                        onAutoplayTimeLeft={onAutoplayTimeLeft}
                        className="mySwiper w-96 h-[250px]  rounded-2xl text-white"
                    >

                        <div className="">
                            {
                                datas.map(item => <SwiperSlide className="" key={item.id}>


                                    <div className="border-yellow-300  border-4 w-96 h-52 rounded-2xl bg-white">
                                        <h1 className=" font-semibold  text-black px-5 pt-8">{item?.feedback_details}</h1>
                                        <div className="flex justify-center items-center gap-4">
                                            <p className="text-2xl font-bold ml-5 text-black">{item?.name}   </p>
                                            <div className="rating w-20 mt-2">
                                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />

                                            </div>
                                            <div>
                                                <img className="bg-yellow-300 p-3 rounded-full" src={item.image_url} alt="" />
                                            </div>

                                        </div>
                                    </div>


                                </SwiperSlide>)
                            }
                        </div>
                        <div className="autoplay-progress" slot="container-end">
                            <svg viewBox="0 0 48 48" ref={progressCircle}>
                                <circle cx="24" cy="24" r="20"></circle>
                            </svg>
                            <span ref={progressContent}></span>
                        </div>
                    </Swiper>
               </div>
               
                <div className="">

                        <div className="relative">
                        <img className="w-[500px] rounded-xl" src={"https://i.ibb.co/dMSTDwD/image.png"} alt="" />
                        </div>
                        <div className="absolute -mt-48 left-[640px]">
                        <img className="w-60 rounded-full" src={"https://winsfolio.net/html/foodio/assets/img/bratlee-hamint-3.jpg"} alt="" />
                        </div>
                        <div className="absolute -mt-[520px] left-[640px]">
                        <img className="w-60 h-56 rounded-full" src={"https://i.ibb.co/SJWvnxz/image.png"} alt="" />
                        </div>
                        <div className="absolute -mt-[360px] left-[460px]">
                        <img className="w-64 h-56 rounded-full" src={"https://i.ibb.co/Z6t5byF/image.png"} alt="" />
                        </div>

                      
                </div>
            </div>
        </div>
    );
};

export default Feedback;