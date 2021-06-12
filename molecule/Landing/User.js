const User = () => {
  return (
    <div className="user-container">
      <div className="icon">
        <img src="/image/icon.jpeg" alt="" />
      </div>
      <div className="name">
        name
      </div>
      <style jsx>{`
        .user-container {
          display: flex;
          align-items: center;
        }
        .icon img{
          width: 30px;
          height: 30px;
          border-radius: 50px;
        }
        .user-container .name {
          padding: 0 10px;
          font-weight: 700;
        }
      `}
      </style>
    </div>
  )
}

export default User;