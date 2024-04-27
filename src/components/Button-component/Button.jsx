import './button.css'

function Button(props) {
    const {text, color, label} = props
  return (
    <div style={{backgroundColor:`${color}`}} className='button-container'>
    {label && <span>{label}</span>}  
    <h2>{text}</h2>
    </div>
  )
}

export default Button
