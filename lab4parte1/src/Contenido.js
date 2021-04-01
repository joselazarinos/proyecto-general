import React from 'react'
import Statics from './Statics.js'
const Content = (props) => {
const {good , neutral , bad } = props
    return (
        
        <div>
           {good || neutral || bad  ?
           <div>
           <Statics text ="good" value = {good}/>    
           <Statics text ="neutral" value = {neutral}/> 
           <Statics text ="bad" value = {bad}/> 
           <Statics text ="all" value = {props.all}/> 
           <Statics text ="average" value = {props.average}/> 
           <Statics text ="positive" value = {props.positive}/></div>
           : 
           <p>01100010 01100001 01101100 01101100 01100001 01110011<br></br>
            01100101 00100000 01100001 00100000 01101100 01100001 00100000 <br></br>
            01100010 01100101 01110010 01100111 01100001 00100000 01110000
            <br></br> 01110010 01101111 01100110 01100101 00100000 01101010<br></br> 
            01110101 01101110 01101001 01101111 01110010</p>
           }  
        
        </div>
    )
}
export default Content
