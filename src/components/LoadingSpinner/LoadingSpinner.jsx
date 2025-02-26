import './LoadingSpinner.css'
import loading from '../../assets/loading.gif'

function LoadingSpinner() {
  return (
    <div className=' d-flex al-center jc-center loading-overlay-container'>
        <img src={loading} alt='loading' height='250px'/>
    </div>
  )
}

export default LoadingSpinner
