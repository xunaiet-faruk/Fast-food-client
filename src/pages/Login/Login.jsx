
import { Link, useLocation, useNavigate } from 'react-router-dom';
import avator from '../../assets/image-removebg-preview (30).png'
import { useContext } from 'react';
import { Authcontext } from '../../Firebase/Authprovider';
import Swal from 'sweetalert2';
import { FcGoogle } from 'react-icons/fc';
const Login = () => {

    const { signIn, googleSign } =useContext(Authcontext)
    const navigate =useNavigate()
    const location =useLocation()

const from =location.state?.from?.pathname || "/"

    const handlesubmit = e =>{
        e.preventDefault();
        const form =e.target;
        const email =form.email.value;
        const password = form.password.value;
        const userInfo ={email,password}
        signIn(userInfo)
        .then(res =>{
            if(res.user){
                Swal.fire({
                    icon: "success",
                    text: "successfully login user",
                });
                navigate(from , {replace : true})
            }
        })
        .catch(error => console.log(error))
    }

    const handleLogin = () =>{
        googleSign()
        .then(res =>{
            console.log(res.user)
            navigate(location?.state ? location.state : '/')

        }).catch(erro =>console.log(erro))
    }

    return (
        <div className='flex justify-center items-center'>
            <div>     
                        <div className="card hover:shadow-2xl hover:shadow-yellow-600 shrink-0 w-[400px] h-[440px]  max-w-sm shadow-2xl bg-black border-2 border-yellow-400">
                    <h1 className='text-yellow-400 text-4xl font-bold text-center py-3 rounded-md'>Login here</h1>
                            <form onSubmit={handlesubmit} className="card-body pt-6">
                               
                                <div className="form-control">
                                 
                                    <input name='email' type="email" placeholder="email" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input name='password' type="password" placeholder="password" className="input input-bordered" required />
                                   
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn bg-yellow-300 text-bold">Login</button>
                                </div>
                        <h1 className='text-white font-bold text-center'>Or</h1>

                        <div className="form-control ">
                            <button onClick={handleLogin} className="btn btn-neutral hover:bg-yellow-300 hover:text-black"><FcGoogle className='text-xl'></FcGoogle> Google</button>
                        </div>
                        <p className='text-center font-semibold text-white'>You are new please go to <Link to={'/register'} className='text-green-700'>Ragister</Link></p>

                            </form>
                        </div>
                    </div>
             


            <div className=''>
                <img className='' src={avator} alt="" />
            </div>
        </div>
    );
};

export default Login;