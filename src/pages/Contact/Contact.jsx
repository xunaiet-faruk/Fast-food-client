import { Link } from "react-router-dom";

const Contact = () => {
    return (
        <div>
            <div className="hero min-h-screen " style={{ backgroundImage: 'url(https://i.ibb.co/Tr6SqWS/image.png)' }}>
                <div className="hero-overlay bg-opacity-30"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="">
                        <h1 className="mb-5 text-4xl font-semibold text-[#FFCC00]">Contact Us</h1>
                        <Link className="text-red-500 text-xl hover:bg-yellow-400 px-5 rounded-full" to={'/'}>Home</Link>
                    </div>
                </div>
            </div>



            <div className="grid lg:grid-cols-4 mt-20 grid-cols-1 md:grid-cols-3 gap-5 max-w-screen-xl mx-auto justify-center items-center">

                <div className="bg-white hover:bg-[#FFCC00] text-center p-[50px] rounded-xl">
                    <img className="ml-16 bg-gray-300 p-4 rounded-full" src={"https://themeholy.com/wordpress/pizzan/wp-content/uploads/2023/06/contact_feature_1.svg"} alt="" />
                    <h1 className="text-2xl font-bold text-white">Our Address</h1>
                    <p className="font-semibold">Street :Parker Rd. Allentown,<br/>
                        New Mexico 31134</p>
            </div>
                <div className="bg-white hover:bg-[#FFCC00] text-center p-[50px] rounded-xl">
                    <img className="ml-16 bg-gray-300 p-4 rounded-full" src={"https://themeholy.com/wordpress/pizzan/wp-content/uploads/2023/06/contact_feature_2.svg"} alt="" />
                    <h1 className="text-2xl font-bold text-white">Our Address</h1>
                    <p className="font-semibold">Street :Parker Rd. Allentown,<br/>
                        New Mexico 31134</p>
            </div>
                <div className="bg-white hover:bg-[#FFCC00] text-center p-[50px] rounded-xl">
                    <img className="ml-16 bg-gray-300 p-4 rounded-full" src={"https://themeholy.com/wordpress/pizzan/wp-content/uploads/2023/06/contact_feature_3.svg"} alt="" />
                    <h1 className="text-2xl font-bold text-white">Our Address</h1>
                    <p className="font-semibold">Street :Parker Rd. Allentown,<br/>
                        New Mexico 31134</p>
            </div>
                <div className="bg-white hover:bg-[#FFCC00] text-center p-[50px] rounded-xl">
                    <img className="ml-16 bg-gray-300 p-4 rounded-full" src={"https://themeholy.com/wordpress/pizzan/wp-content/uploads/2023/06/contact_feature_4.svg"} alt="" />
                    <h1 className="text-2xl font-bold text-white">Our Address</h1>
                    <p className="font-semibold">Street :Parker Rd. Allentown,<br/>
                        New Mexico 31134</p>
            </div>

            </div>




            <div className="text-center mt-20">
                <h1 className="text-[#FFCC00] italic text-xl font-bold ">
                    Fill the form
                </h1>
                <h1 className="text-5xl font-bold text-white">Do You Have Any Question?</h1>
                <div>

                </div>
            </div>
        </div>
    );
};

export default Contact;