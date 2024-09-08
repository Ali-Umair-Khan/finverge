import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCheck
} from "@fortawesome/free-solid-svg-icons";
import AnimatedLink from '@/UI/AnimatedLink';
import './pricing.scss';
const PricingComponent = ({features}) => {
    const {type,text,price,qualities}= features;
    return(
            <div className='pricing__cards'>    
                <h1>{type}</h1>
                <h2>{text}</h2>
                <AnimatedLink title={price}/>
                {qualities.map((q,i)=>(
                    <div key={i} style={{display:'flex',alignItems:'center',gap:'0.4rem'}} className='qualities'><FontAwesomeIcon icon={faCheck}  style={{color:'grey',margin:'0.2rem', fontSize:'1.8rem'}}/><h3 className='pricing__cards-h3'><AnimatedLink title={q}/></h3></div>
                ))}
                <button><AnimatedLink title='Get Started'/></button>
            </div>
    )
}

export default PricingComponent

{/* <FontAwesomeIcon icon={faCheck} /> */}