const lists = [{title: "Build Your New Idea with Laravel Freamwork.", body: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora expedita dicta totam aspernatur doloremque. Excepturi iste iusto eos enim reprehenderit nisi, accusamus delectus nihil quis facere in modi ratione libero!"},{title: "Build Your New Idea with Laravel Freamwork.", body: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora expedita dicta totam aspernatur doloremque. Excepturi iste iusto eos enim reprehenderit nisi, accusamus delectus nihil quis facere in modi ratione libero!"},{title: "Build Your New Idea with Laravel Freamwork.", body: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora expedita dicta totam aspernatur doloremque. Excepturi iste iusto eos enim reprehenderit nisi, accusamus delectus nihil quis facere in modi ratione libero!"}
]
import Item from "../../molecule/Landing/Item"
const Main = () => {
  
  return (
    <div className="main-container">
      Post
      {lists.map((list) => {
        return <Item {...list}/>
      })}
      <style jsx>{`
        flex: 2;
        padding: 0 50px;
      `}</style>
    </div>
  )
}

export default Main;