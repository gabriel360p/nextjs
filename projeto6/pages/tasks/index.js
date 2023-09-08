import TagHead from "@/components/Head"
// import ToDo from "@/components/ToDo"
import Link from "next/link"

export async function getStaticProps(){
    //Simulação de dados vindo do banco

    //pegandos os dados do site (formato de texto)
    const data=await fetch('https://jsonplaceholder.typicode.com/todos')

    //pegandos os dados e transformando em json para serem lidos pelo js
    const tasks = await data.json() 

    // console.log(tasks)

    return{
        props:{tasks},
    }
}

export default function Index({tasks}){
    return (
        <>
        <TagHead title="Tarefas"/>
            <div>
                <h1>Página de Tarefas</h1>

                <ul>
                    {tasks.map((tasks)=>(
                        <li key={tasks.id}>{tasks.title} <Link href={`/tasks/${tasks.id}`}> Show </Link>
                        <hr/> 
                        
                        </li>
                    ))}
                    
                </ul>

            </div>
        </>
    )
}