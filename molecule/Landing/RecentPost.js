import Label from '../../atom/Label'
import User from '../../molecule/Landing/User'

const RecentPost = () => {
  const label = {
    width: "100px",
    margin: "0 auto"
  }
  return (
    <div className="recent-post-container">
      <div className="label-container" style={label}>
        <Label name ="larabel" color="label-green"/>
      </div>
      <div className="title">
        Build Your New Idea with Laravel Freamwork.
      </div>
      <div className="footer">
        <User/>
        <div className="created-date">
          Jun 1, 2020
        </div>
      </div>
      <style jsx>{`
        .recent-post-container .footer {
           display: flex;
           align-items: center;
        }
      `}</style>
    </div>
  )
}

export default RecentPost;