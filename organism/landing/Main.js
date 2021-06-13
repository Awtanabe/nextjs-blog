const lists = [{title: "Build Your New Idea with Laravel Freamwork.", body: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora expedita dicta totam aspernatur doloremque. Excepturi iste iusto eos enim reprehenderit nisi, accusamus delectus nihil quis facere in modi ratione libero!"},{title: "Build Your New Idea with Laravel Freamwork.", body: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora expedita dicta totam aspernatur doloremque. Excepturi iste iusto eos enim reprehenderit nisi, accusamus delectus nihil quis facere in modi ratione libero!"},{title: "Build Your New Idea with Laravel Freamwork.", body: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora expedita dicta totam aspernatur doloremque. Excepturi iste iusto eos enim reprehenderit nisi, accusamus delectus nihil quis facere in modi ratione libero!"}
]
import Post from "../../molecule/Landing/Post"
import Pagenation from "../Pagenation"
const Main = () => {
  
  return (
    <div className="main-container">
      <div className="post-title">Post</div>
      {lists.map((list) => {
        return <Post {...list}/>
      })}
      <Pagenation/>
      <style jsx>{`
        .main-container {
          flex: 2;
          padding: 0 50px;  
        }
        .post-title {
          font-weight: bold;
        }
      `}</style>
    </div>
  )
}

export default Main;