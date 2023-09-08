import Link from "next/link"

export default function Navbar(){
    return (

        <>
            <header>

                <nav>
                    <ul>
                        <li> <Link href="/"> Home </Link> </li>
                        <li> <Link href="/tasks"> Tarefas </Link> </li>
                        <li> <Link href="about"> Sobre </Link> </li>
                    </ul>
                </nav>

            </header>
            <hr/>

        </>

    )
}