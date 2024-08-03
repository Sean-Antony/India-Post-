import Header from "../loginpages/Header.js"
import Login from "../loginpages/login.js";

export default function LoginPage(){
    return(
        <div className='h-[500px] w-[550px] shadow-md'>
             <Header
                heading="Get Started"
                paragraph="Don't have an account? "
                linkName="Register Now"
                linkUrl="/signup"
                />
                <Login/>
            
        </div>
    )
}
