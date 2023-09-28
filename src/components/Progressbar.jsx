import {useState} from 'react'
import Circle from './Circle'
import '../styles/Progressbar.css'

const Progressbar = () => {
    const [circle] = useState(4)
    const [active, setActive] = useState(0)
    console.log(active);
    const arr = []
    for (let i = 0; i < circle; i++) {
        arr.push(<Circle className="circle">{i}</Circle>);
        
    }
  return (

    <div className='box-container'>
        <div className='content'>
            <div className="progressbar">
                <div className="progress"></div>
                {arr}
            </div>
            <div className="buttons">
                <button className='prev btns disabled ' onClick={()=>{
                    active<=0 ? setActive(0) : setActive(active - 1)
                }}>prev</button>
                <button className='next btns'
                onClick={()=>{
                    active>=circle ? setActive(circle) : setActive(active + 1)
                }}
                >next</button>
            </div>
            
            </div>
    </div>
  )
}

export default Progressbar