import { Link, useNavigate } from 'react-router-dom';
import image from '../../assets/image-removebg-preview (32).png'
import { useContext } from 'react';
import { Authcontext } from '../../Firebase/Authprovider';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
const Register = () => {
    const nablink =useNavigate()
    const { createUser, updateUserprofile } = useContext(Authcontext)
    const {
        register,
        formState: { errors },
        handleSubmit,
        reset
        
    } = useForm()
    const onSubmit = (data) => {
        console.log("data",data);
        createUser(data.email,data.password)
        .then(res => {
            const logedUser =res.user
            console.log(logedUser);
            updateUserprofile(data.name, data.photoURL)
           .then(() =>{
            console.log("updated user profile");
            reset();
               Swal.fire({
                   position: "top-end",
                   icon: "success",
                   title: "Successfully register ",
                   showConfirmButton: false,
                   timer: 1500
               });
               nablink('/')
           })
           .catch(error =>console.log(error))
              
               
         
        })

    }



    return (
        <div>
            <div className="hero min-h-screen">
                <div className="hero-content flex">
                    <img src={image} alt="" />
                    <div className="card shrink-0 hover:shadow-blue-600 hover:shadow-2xl  w-full max-w-sm shadow-2xl bg-black border-2 border-blue-600">
                        <h1 className='text-blue-400 text-4xl font-bold text-center mt-2'>Register Here</h1>
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <div className="form-control mb-4">
                               
                                <input name='name'  {...register("name", { required: true })} type="text" placeholder="Name" className="input input-bordered" />
                           {errors.name && <span className='text-red-400'>Name field is required</span>}
                            </div>
                            <div className="form-control mb-4">
                               
                                <input name='email'    {...register("email", { required: true })} type="email" placeholder="email" className="input input-bordered" />
                                {errors.email && <span className='text-red-400'>Email field is required</span>}

                            </div>
                            <div className="form-control mb-4">

                                <input name='photo'  {...register("photoURL", { required: true })} type="url" placeholder="Photo" className="input input-bordered"  required/>
                            </div>
                            <div className="form-control">
                               
                                <input name='password'   {...register("password", { required: true, minLength: 6, maxLength: 20, pattern:/(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/ })} type="password" placeholder="password" className="input input-bordered"  />
                                {errors.password?.type === "minLength" && <span className='text-red-400'>Password must be 6 characters</span>}
                                {errors.password?.type === "maxLength" && <span className='text-red-400'>Password minimum  20 characters</span>}
                                {errors.password?.type === "pattern" && <span className='text-red-400'>Password  must be one number, one lowercase,one upercase and one speacial character</span>}

                            </div>
                          
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                            <p className='text-center font-semibold text-white'>Already Have an account go to <Link to={'/login'} className='text-green-400'>Login</Link></p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;