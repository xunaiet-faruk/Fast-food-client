import { Link } from 'react-router-dom';
import image from '../../assets/image-removebg-preview (32).png'
const Register = () => {
    return (
        <div>
            <div className="hero min-h-screen">
                <div className="hero-content flex">
                    <img src={image} alt="" />
                    <div className="card shrink-0 hover:shadow-blue-600 hover:shadow-2xl  w-full max-w-sm shadow-2xl bg-black border-2 border-blue-600">
                        <h1 className='text-blue-400 text-4xl font-bold text-center mt-2'>Register Here</h1>
                        <form className="card-body">
                            <div className="form-control mb-4">
                               
                                <input type="text" placeholder="Name" className="input input-bordered" required />
                            </div>
                            <div className="form-control mb-4">
                               
                                <input type="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control mb-4">

                                <input type="url" placeholder="Photo" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                               
                                <input type="password" placeholder="password" className="input input-bordered" required />
                               
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