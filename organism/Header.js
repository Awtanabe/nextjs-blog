const Header = () => {
  return (
    <div className="header">
      <div className="brand">
        Brand
      </div>
      <div className="header-links">
        <a href="" className="header-link">Home</a>
        <a href="" className="header-link">Blog</a>
        <a href="" className="header-link">About us</a>
      </div>
      <style jsx>{`
        .header {
          display: flex;
          justify-content: space-between;
          width: 100%;
          padding: 20px 20px;
        }

        .header .brand {
          font-weight: bold;
          font-size: 20px;
        }

        .header-links .header-link{
          padding: 0 10px;
          text-decoration: none;
          color: black;
        }
      `}
      </style>
    </div>
  )
}

export default Header;