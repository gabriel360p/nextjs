import Link from "next/link";
import { useRouter } from "next/router"

export default function Task (){
    //instanciando
    const router = useRouter();

    //pegando um pedaço da query passado pela requisição
    const taskId = router.query.taskId;

    return(

        <>
            {/* imprimindo */}
            <h1>Exibindo a Tarefa: {taskId}</h1>
            <p>Comentário: doajd aidjaida ... <Link href={`/tasks/${taskId}/comment/1`} > Detalhes </Link> </p>
        </>


    )
}
