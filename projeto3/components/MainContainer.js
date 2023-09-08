import NavBar from "./navbar";
import Footer from "./footer";

export default function MainContainer({children}){
    return(
        <div>
            
            <>
                <NavBar/>

                <div>
                    {children}
                </div>

                <Footer/>            
            </>

        </div>
    )
}