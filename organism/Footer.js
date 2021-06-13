const Footer = () => {
  return (
    <div className="footer-container">
      <p>This a Blog Page by khatabwedaa. <a href="">Component details</a></p>
      <style jsx>{`
        .footer-container {
          background-color: black;
          width: 100vw;
          height: 40px;
          position: fixed;
          bottom: 0;
          text-align: center;
        }

        .footer-container p {
          color: white;
        }

        .footer-container a {
          color: white;
          text-decoration: none;
        }

        .footer-container .title {
          font-weight: bold;
        }
      `}</style>
    </div>
  )
}

export default Footer;