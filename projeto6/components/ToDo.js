
export async function getStaticProps(){

    //pegandos os dados do site (formato de texto)
    const data=await fetch('https://jsonplaceholder.typicode.com/todos')

    //pegandos os dados e transformando em json para serem lidos pelo js
    const todos = await data.json() 

    console.log(todos)

    return{
        props:{todos},
    }
}
export default function ToDo({todos}){
    
    return(
        <>
            <ul>
                {todos.map((todos)=>(
                    <li key={todos.id}>{todos.title} <hr/> </li>
                ))}

            </ul>
            
        </>       
    )
}