import User from "./User"
import Label from "../../atom/Label"

const Post = (props) => {
  return (
    <div className="post-container">
      <div className="post-header">
        <div className="title">
          {props.title}
        </div>
        <Label name="Larabel" color="label-primary"/>
      </div>
      <div className="body">
        {props.body}
      </div>
      <div className="post-footer">
        <div className="read-more">
          <a href="">Read more</a>
        </div>
        <User/>
      </div>

      <style jsx>{`
        .post-container {
          padding: 20px 40px;
          background-color: white;
          border-radius: 10px;
          margin: 20px 0;
        }
        .title {
          font-weight: bold;
          font-size: 20px;
        }
        .post-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .post-footer {
          margin-top: 10px;
          display: flex;
          align-items: center;
          justify-content: space-around;
        }
        .post-footer a {
          color: blue;
          text-decoration: none;
          font-size: 15px;
        }
      `}
      </style>
    </div>
  )
}

export default Post;