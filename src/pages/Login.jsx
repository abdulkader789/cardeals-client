import { Link } from "react-router-dom";

const Login = () => {
    return (
        <div className="px-14 py-5">
            <div className=" flex justify-center bg-blue-600 p-10">
                <div className="w-1/2 h-full hidden lg:block">
                    <img src="https://dotnetworkbd.net/uploaded/setting/1675694989login_63e1138d16d04.jpg" alt="Placeholder Image" className="object-cover w-full h-full" />
                </div>
                <div className="lg:p-20 md:p-52 sm:20 p-8 w-full lg:w-1/2 bg-gray-100">
                    <h1 className="text-2xl font-semibold mb-4">Login</h1>
                    <form action="#" method="POST">
                        {/* <div className="mb-4">
                        <label htmlFor="username" className="block text-gray-600">Username</label>
                        <input type="text" id="username" name="username" className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500" autoComplete="off" />
                    </div> */}
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-gray-600">Email</label>
                            <input type="text" id="email" name="email" className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500" autoComplete="off" />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="password" className="block text-gray-600">Password</label>
                            <input type="password" id="password" name="password" className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500" autoComplete="off" />
                        </div>

                        <div className="mb-6 text-blue-500">
                            <a href="#" className="hover:underline">Forgot Password?</a>
                        </div>
                        <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-md py-2 px-4 w-full">Login</button>
                    </form>
                    <div className="mt-6  text-center">
                        Don't Have an Accout? <Link to='/signup' className="hover:underline text-blue-500">Sign up Here</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;