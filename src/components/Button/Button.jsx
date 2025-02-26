import './Button.css'
import arrowIcon from '../../assets/arrowIcon.svg'

function Button({ arrow, buttonStyle, loading, children, ...props}) {
  return (
    <button className={`button ${buttonStyle}`} {...props}>
        {children} {arrow && <img src={arrowIcon}/>} 
    </button>
  )
}

export default Button
