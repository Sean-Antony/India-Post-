import Header from "../loginpages/Header.js"
import Login from "../loginpages/login.js";
import LeftPanel from "../leftpanel.js";

export default function LoginPage(){
    return(
        <>
        <div className="flex flex-row h-screen justify-between bg-[#F7F7F9]">
            <div className="w-2/12 bg-[#B01E1D] shadow-md flex flex-col justify-center">
                <LeftPanel/>
            </div>
            <div className='h-[650px] w-[600px] bg-white rounded-md flex flex-col justify-center mx-auto mt-[200px]'>
                <div className="flex flex-col items-center">
                <Header
                    heading="Get Started"
                    paragraph="Don't have an account? "
                    linkName="Register Now"
                    linkUrl="/signup"
                />
                <Login/>
                </div>
            </div>
        </div>
        </>
    )
}
