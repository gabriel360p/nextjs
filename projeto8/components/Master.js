import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Master({children,h1Title}){
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