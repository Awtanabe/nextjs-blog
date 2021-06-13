const Pagenation = () => {
  return (
    <div className="pagenation-container">
      <div className="page">
        prev
      </div>
      <div className="page">
        1
      </div>
      <div className="page">
        2
      </div>
      <div className="page">
        3
      </div>
      <div className="page">
        next
      </div>
      <style jsx>{`
        .pagenation-container {
          display: flex;
        }
        .pagenation-container .page {
          background-color: white;
          margin: 0 5px;
          padding: 5px 10px;
          border-radius: 5px;
        }
      `}</style>
    </div>
  )
}

export default Pagenation;