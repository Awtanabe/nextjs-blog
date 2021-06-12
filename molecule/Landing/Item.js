import User from "./User"

const Item = (props) => {
  return (
    <div className="item-container">
      <div className="title">
        {props.title}
      </div>
      <div className="body">
        {props.body}
      </div>
      <div className="item-footer">
        <div className="read-more">
          <a href="">Read more</a>
        </div>
        <User/>
      </div>

      <style jsx>{`
        .item-container {
          padding: 20px 40px;
          background-color: white;
          border-radius: 10px;
          margin: 20px 0;
        }
        .title {
          font-weight: bold;
          font-size: 20px;
        }
        .item-footer {
          margin-top: 10px;
          display: flex;
          align-items: center;
          justify-content: space-around;
        }
        .item-footer a {
          color: blue;
          text-decoration: none;
          font-size: 15px;
        }
      `}
      </style>
    </div>
  )
}

export default Item;