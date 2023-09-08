import Link from "next/link";

export default function NavBar(){

    return (
        <div>
            <nav>
                <ul>
                    
                    <li>
                        <Link href="/"> Home</Link>  
                    </li>

                    <li>
                        <Link href="/products"> Produtos</Link>  
                    </li>

                    <li>
                        <Link href="/profile"> Perfil </Link>  
                    </li>

                    <li>
                        <Link href="/about"> Sobre </Link>  
                    </li>

                </ul>
            </nav>
            <hr/>
        </div>

    )

}