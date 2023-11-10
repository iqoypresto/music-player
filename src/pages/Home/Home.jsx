import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div className="dark:bg-slate-700 text-white">
            <div className="max-w-screen-xl mx-auto h-screen flex flex-col items-center justify-center gap-[10px]">
                <h1 className="text-8xl text-center">Welcome, Fellas!</h1>
                <p className="text-lg">Ready to enjoy some music?</p>
                <Link to='/dashboard'><button className="border mx-auto w-[100px] py-[5px] text-lg rounded-[50px] hover:bg-white hover:text-slate-700">GO</button></Link>
            </div>
        </div>
    )
}

export default Home;