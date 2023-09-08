import Link from 'next/link'

import { useRouter } from 'next/router'

export default function Comment() {
  const router = useRouter()

  // console.log(router.query)

  const taskId = router.query.taskId
  const commentId = router.query.commentId

  return (
    <>
      <h1>Exibindo a tarefa número: {taskId}</h1>
      <h1>Exibindo o comentário número: {commentId}</h1>
    </>
  )
}
