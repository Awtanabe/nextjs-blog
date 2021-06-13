import Author from '../../molecule/Landing/Author'
import Category from '../../molecule/Landing/Category'
import RecentPost from '../../molecule/Landing/RecentPost'

const SideBar = () => {
  return (
    <div className="sidebar-container">
      <div className="title">
        Auhthor
      </div>
      <div className="authors-container">
        <div className="author-wrapper">
          <Author/>
        </div>
        <div className="author-wrapper">
          <Author/>
        </div>
        <div className="author-wrapper">
          <Author/>
        </div>
      </div>
      <div className="title">
        Categories
      </div>
      <div className="categories-container">
        <div className="category-wrapper">
          <Category/>
        </div>
        <div className="category-wrapper">
          <Category/>
        </div>
        <div className="category-wrapper">
          <Category/>
        </div>
      </div>

      <div className="title">
        Recent Post
        <div className="recent-posts-container">
          <div className="recent-post-wrapper">
            <RecentPost/>
          </div>
        </div>
      </div>

     <style jsx>{`
        .sidebar-container {
          flex: 1;
        }
        .sidebar-container .title {
          font-weight: bold;
        }

        .author-wrapper {
          margin: 10px 0;
        }
        .authors-container {
          background-color: white; 
          margin-top: 20px;
          padding: 20px 30px;
          border-radius: 10px;
        }

        .category-wrapper {
          margin: 5px 0;
        }

        .categories-container {
          background-color: white; 
          margin-top: 20px;
          padding: 20px 30px;
          border-radius: 10px;
        }

        .recent-posts-container {
          background-color: white; 
          margin-top: 20px;
          padding: 20px 30px;
          border-radius: 10px;
        }
     `}</style>
    </div>
  )
}

export default SideBar;