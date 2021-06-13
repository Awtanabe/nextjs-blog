import User from '../../molecule/Landing/User'

const Author = () => {
  return (
    <div className="author-container">
      <User/>
      <div className="created-posts">
        Created 52 posts
      </div>

      <style jsx>{`
        .author-container {
          display: flex;
          align-items: center;
        }
      `}</style>
    </div>
  )
}

export default Author;