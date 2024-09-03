// import './style.css'
import './appreciation.scss'
const AppreciationCards = ({text,name,company}) =>{
    return(
        <div className='appr__card'>
            <p>{text}</p>
            <h1>{name}</h1>
            <h2>{company}</h2>
        </div>
    )
}

export default AppreciationCards