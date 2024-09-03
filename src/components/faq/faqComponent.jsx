'use client'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faPlus,faMinus,faWindowMinimize,faBars
} from "@fortawesome/free-solid-svg-icons";
import {faqData} from '../data';
import {useState} from 'react';
import './faq.scss';

const FaqComponent = () =>{
    const [faqs,setFaqs]=useState(faqData);
    // console.log(faqs);
    const faqQues = (i) => {
            const updatedFaqs = [...faqData];
            updatedFaqs[i].isOpen = !updatedFaqs[i].isOpen;
            setFaqs(updatedFaqs);
    }
    return(
        <div className='faq'>
            {faqs.map((f,i)=>(
                <div key={i} className={`hero__faqs ${f.isOpen ? 'active' : ''}`}>
                    {/* <h1>{f.question}<span style={{fontSize:'2rem', padding:'0 1rem', margin:'1rem 1rem -2rem 1rem', display:'inlineBlock'}} onClick={(i)=>opener(i)}><FontAwesomeIcon icon={faPlus} /></span></h1> */}
                    {/* {f.isOpen ? <h1>{f.answer}</h1> : ''} */}
                    <div onClick={()=>faqQues(i)}>
                        <h1 className='hero__faqs-question'>{f.question} </h1> 
                        {f.isOpen ? <span className='hero__faqs-span'><FontAwesomeIcon icon={faWindowMinimize}/></span> : <span className='hero__faqs-span'><FontAwesomeIcon icon={faBars}/></span>}
                    </div>
                    {f.isOpen && <h1 className='hero__faqs-answer'>{f.answer}</h1>}
                </div>
            ))
        }
        </div>
    )
}

export default FaqComponent

