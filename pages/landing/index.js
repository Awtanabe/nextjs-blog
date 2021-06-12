import Main from '../../organism/landing/Main'
import SideBar from '../../organism/landing/SideBar'

const Landing = () => {
  return (
    <div className="landing-container">
      <Main/>
      <SideBar/>

      <style jsx>{`
        .landing-container{
          width: 100vw;
          height: 100vh;
          background-color: #e5e7eb;
          display: flex;  
        }
      `}
      </style>
    </div>
  )
}

export default Landing;