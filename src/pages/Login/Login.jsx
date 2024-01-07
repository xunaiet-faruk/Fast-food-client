
import { Link } from 'react-router-dom';
import avator from '../../assets/image-removebg-preview (30).png'
const Login = () => {
    return (
        <div className='flex justify-center items-center'>
            <div>
                
                       
                        <div className="card hover:shadow-2xl hover:shadow-yellow-600 shrink-0 w-[400px] h-[440px]  max-w-sm shadow-2xl bg-black border-2 border-yellow-400">
                    <h1 className='text-yellow-400 text-4xl font-bold text-center py-3 rounded-md'>Login here</h1>
                            <form className="card-body pt-6">
                               
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" placeholder="email" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" placeholder="password" className="input input-bordered" required />
                                    <label className="label">
                                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                    </label>
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn bg-yellow-300 text-bold">Login</button>
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