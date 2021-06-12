
import { useRouter } from 'next/router'

const Detail = () => {
  const router = useRouter()
  return (
    <div>detail:{router.query.id} </div>
  )
}

export default Detail;