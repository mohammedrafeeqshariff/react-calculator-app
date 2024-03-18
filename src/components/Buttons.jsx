


const Buttons = ({value, takeInput}) => {

  return (
    <div className="mybuttons">
        <button onClick={()=>{takeInput(value)}}>{value}</button>
    </div>
  )
}

export default Buttons
