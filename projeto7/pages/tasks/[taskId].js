import Link from "next/link";
// "https://jsonplaceholder.typicode.com/todos"


export async function getStaticProps(context){
    const {params} = context

    const data = await fetch(
        `https://jsonplaceholder.typicode.com/todos/${params.taskId}
    `)
    
    const task = await data.json()

    return{
        props:{task}
    }

}
export async function getStaticPaths(){
    const response = await fetch("https://jsonplaceholder.typicode.com/todos")
    
    const data = await response.json()

    const paths = data.map((task)=>{
        return{
            params:{
                taskId:`${task.id}`
            }
        }
    })

    return{
        paths,
        fallback: false
    }
}
    

export default function Task ({task}){

    return(

        <>
            {/* imprimindo */}
            <h1>Exibindo a Tarefa: {task.id}</h1>
            {/* <p>Comentário: doajd aidjaida ... <Link href={`/tasks/${taskId}/comment/1`} > Detalhes </Link> </p> */}
            {/* <p>Comentário: doajd aidjaida ... <Link href={`/tasks/${taskId}/comment/1`} > Detalhes </Link> </p> */}
        </>


    )
}
