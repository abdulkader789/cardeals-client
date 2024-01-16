import { Link } from "react-router-dom";

const Signup = () => {
    return (
        <div className="px-14 py-5">
            <div className=" flex justify-center bg-gray-300 p-10">
                <div className="w-1/2 h-[550px] hidden lg:block">
                    <img src="https://img.freepik.com/free-photo/sign-up-form-button-graphic-concept_53876-101286.jpg?size=626&ext=jpg&ga=GA1.1.632798143.1705276800&semt=ais" alt="Placeholder Image" className=" w-full h-full" />
                </div>
                <div className="h-[550px] lg:p-20 md:p-52 sm:20 p-8 w-full lg:w-1/2 bg-gray-100">
                    <h1 className="text-2xl font-semibold mb-4">Sign up</h1>
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


                        <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-md py-2 px-4 w-full">Sign up</button>
                    </form>
                    <div className="mt-6  text-center">
                        Already Have an Accout? <Link to='/login' className="hover:underline text-blue-500">Login Here</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;