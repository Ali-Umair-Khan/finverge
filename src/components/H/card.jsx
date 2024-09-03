
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faAddressBook,
    faCalendarCheck,
    faMap
} from "@fortawesome/free-solid-svg-icons";
import './h.scss'
const Card = ({icon,name,text, icon_color}) =>{
    return(
        <div className='card' style={{backgroundColor: `#${icon_color}`}} >
            <div className='card__meta' >
                <div><FontAwesomeIcon icon={icon} style={{fontSize:'2.5rem', backgroundColor: `#${icon_color}`,padding:'0.2rem',borderRadius:'5px'}}/></div>
                <h3 className='card__meta-h3'>{name}</h3>
            </div>
            <h2>{text}</h2>
        </div>
    )
}

export default Card