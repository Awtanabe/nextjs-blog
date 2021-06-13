import Head from 'next/head'
import Link from 'next/link'
import Landing from './landing'
import Header from '../organism/Header'
import Footer from '../organism/Footer'

export default function Home() {
  return (
    <div className="container">
      <Header/>
      <Landing/>
      <Footer/>

      <style jsx>{`
        .container {
          padding: 0 0.5rem;
          flex-direction: column;
          width: 100vw;
          height: 100vh;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

      `}</style>
    </div>
  )
}
