import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const Contact = () => {
    const handlesubmit = e=>{
        e.preventDefault()
        const name =e.target.name.value
        const email =e.target.email.value
        console.log(name,email);
        if(name,email){
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Thanks successfully send message",
                showConfirmButton: false,
                timer: 1500
            });
        }
    }
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
                    <img className="ml-14 bg-gray-300 p-4 rounded-full" src={"https://themeholy.com/wordpress/pizzan/wp-content/uploads/2023/06/contact_feature_1.svg"} alt="" />
                    <h1 className="text-2xl font-bold ">Our Address</h1>
                    <p className="font-semibold">Parker Rd. Allentown,<br/>
                        New Mexico 31134</p>
            </div>
                <div className="bg-white hover:bg-[#FFCC00] text-center p-[50px] rounded-xl">
                    <img className="ml-16 bg-gray-300 p-4 rounded-full" src={"https://themeholy.com/wordpress/pizzan/wp-content/uploads/2023/06/contact_feature_2.svg"} alt="" />
                    <h1 className="text-2xl font-bold ">Our Email </h1>
                    <p className="font-semibold">Xunaiet28@gmail.com<br/>
                        Fizza@gmailcom</p>
            </div>
                <div className="bg-white hover:bg-[#FFCC00] text-center p-[50px] rounded-xl">
                    <img className="ml-16 bg-gray-300 p-4 rounded-full" src={"https://themeholy.com/wordpress/pizzan/wp-content/uploads/2023/06/contact_feature_3.svg"} alt="" />
                    <h1 className="text-2xl font-bold ">Phone number</h1>
                    <p className="font-semibold">+881882239828<br/>
                        +971 232 5432</p>
            </div>
                <div className="bg-white hover:bg-[#FFCC00] text-center p-[50px] rounded-xl">
                    <img className="ml-16 bg-gray-300 p-4 rounded-full" src={"https://themeholy.com/wordpress/pizzan/wp-content/uploads/2023/06/contact_feature_4.svg"} alt="" />
                    <h1 className="text-2xl font-bold">Open & Closing</h1>
                    <p className="font-semibold">Mon - Fri: 09:00am ,<br/>
                        to  07.00pm </p>
            </div>

            </div>




            <div className=" mt-20">
               
                <div className="flex gap-32 max-w-screen-xl mx-auto mt-16">
                    
                    <div className=" bg-white  rounded-xl hover:bg-yellow-300 ">
                        <form onSubmit={handlesubmit} action="" className="mt-12 p-6">

                            <h1 className="text-4xl font-bold  mb-5">Do You Have Any Question?</h1>
                            <input type="text" name="name" placeholder="Your name" className="input bg-gray-100 input-bordered input-warning mb-3 w-[300px]" />
                            <input type="email" name="email" placeholder="Your email" className="input bg-gray-100 input-bordered input-warning mb-3  w-[300px] ml-5" /><br/>
                            <input type="text" placeholder="Subject" className="input bg-gray-100 input-bordered input-warning   w-full" />
                            <textarea name="" id="" cols= "30" className="w-full bg-gray-100 mt-3 rounded-xl" placeholder="Give me any message" rows="10"></textarea>
                            <input type="submit" value="Send" className="bg-[#FFCC00] px-10 py-2 rounded-xl mt-3 hover:bg-white font-bold" />
                        </form>
                       </div>

                       <div className="mt-5 ">
                        
                        <h1 className="text-4xl text-white font-bold italic ">Our Office Address</h1>
                        <div className="divider divider-warning w-14"></div>
                        <div className="space-y-4 mr-28">
                            <h1 className="font-bold text-2xl text-white">Main Restaurant:</h1>
                            <p className="text-white">587, Dartmouthi Street, Boston,<br /> Massachusetts 0658, PO Box 16122 <br />Bangladesh</p>
                            <h1 className="font-bold text-2xl text-white">Branch, Raurance Road:</h1>
                            <p className="text-white">357, West Victoria, Darbaians, Collinsicious<br />  0658,PO Box 16578 Banglades,Dhaka</p>
                            <h1 className="font-bold text-2xl text-white">Have any querry::</h1>
                            <p className="text-white">Call us on : +8801882239828</p>
                        </div>
                       </div>
                   
                </div>
            </div>
        </div>
    );
};

export default Contact;