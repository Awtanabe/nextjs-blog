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
          height: 1000px;
          flex: 1;
          background-color: #e5e7eb;
          display: flex;  
        }
      `}
      </style>
    </div>
  )
}

export default Landing;