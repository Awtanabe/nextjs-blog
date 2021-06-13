const Label = (props) => {
  return (
    <div className={`label-container ${props.color}`}>
      {props.name}
      <style jsx>{`
        .label-container {
          border-radius: 3px;
          text-align: center;
          padding: 5px;
        }
        .label-primary {
          background-color: gray;
          color: white;
        }
        .label-green {
          background-color: rgba(209, 250, 229, 1);
          color: white;
        }
      `}</style>
    </div>
  )
}

export default Label;