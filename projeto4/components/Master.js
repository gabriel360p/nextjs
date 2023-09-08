import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Master({children}){
    return (
        <>
            <Navbar/>
            <div>
                {children}
            </div>
            <Footer/>
        </>
    )
}