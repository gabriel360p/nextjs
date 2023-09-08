import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa'

export default function Footer(){
    return(

        <>
            <hr/>
            <footer>    

                <div>
                    <h4>Curso Next.js - 2023</h4>
                </div>
                
                <div>
                    <FaFacebook/>
                    <FaInstagram/>
                    <FaTwitter/>
                    <FaLinkedin/>
                </div>

            </footer>
        </>
    )
}