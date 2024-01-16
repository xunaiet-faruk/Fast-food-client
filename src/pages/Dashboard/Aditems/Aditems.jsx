import { useForm } from "react-hook-form";
import UseaxiosPublic from "../../../Hooks/UseaxiosPublic";

// const Image_hoistiing_developer = import.meta.env.VITE_IMAGE_HOSTING_KEY;
// const Image_hoisting_key =`https://api.imgbb.com/1/upload?key=${Image_hoistiing_developer}`
const Aditems = () => {
    const AxiosPublic =UseaxiosPublic()
    const { register, handleSubmit } = useForm()


    const onSubmit = (data) => {
    console.log("form vaildation",data)


        }
        // const imageFile ={image : data.image[1]}
        // const res = AxiosPublic.post(Image_hoisting_key)
    
    return (
        <div className="mt-12">
            <h1 className="text-3xl font-semibold text-center italic text-yellow-300"> New Update  Items Add</h1>
         <div>

            <div className="p-12">
               
                    <form onSubmit={handleSubmit(onSubmit)}>
                        
                        <input  {...register("Name", { required: true })} type="text" placeholder="Food Name*" className="input input-bordered input-warning w-full " required />
                        
                       <div className="flex gap-4 mt-5">
                      
                            <select className="select select-warning w-full " {...register("categori")} required>
                                    <option value="pizza">pizza</option>
                                    <option value="burger">burger</option>
                                    <option value="sandwich">sandwich</option>
                                    <option value="milkshake">milkshake</option>
                                    <option value="ice-cream">ice-cream</option>
                                    <option value="cake">cake</option>
                                </select>
                            <input {...register("price", { required: true })} type="number" placeholder="Price*" className="input input-bordered input-warning w-full " required />
   
                       </div>
                        <textarea {...register("details", { required: true })} cols="12" rows={"7"} placeholder="Food Details*" className="textarea textarea-warning w-full rounded-lg mt-5" required></textarea>


                        <input  {...register("image",{required:true})} type="file" className="file-input file-input-bordered hover:file-input-warning mt-3" name="" id="" required/>
                        <div className="mt-5">
                            <button type="submit" className="btn w-full hover:btn-warning"><img className="w-12" src={"https://i.ibb.co/1bc1ghR/image-removebg-preview-20.png"} alt="" />Add items</button>

                        </div>
                    </form>

               
            </div>

         </div>
        </div>
    );
};

export default Aditems;