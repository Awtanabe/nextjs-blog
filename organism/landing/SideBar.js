import Author from '../../molecule/Landing/Author'

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
     `}</style>
    </div>
  )
}

export default SideBar;