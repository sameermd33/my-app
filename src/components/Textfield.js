import React from 'react'
import { useState } from 'react'


export default function Textfield(props) {

    const handleOnchange = (event) => {
        setText(event.target.value)
    }
    const handleOnUpper = () => {
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert('success','Converted to Upper Case')
    }
    const handleOnLower = () => {
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert('success','Converted to Lower Case')
    }
    const handleRemoveSpace = () => {
        setText(text.replace(/\s{2,}/g, ' ').trim());
        props.showAlert('success','Extra Spaces Removed!')
    }
    const handleClear = () => {
        setText('');
        props.showAlert('success','Text is Cleard!')
    }
    const handleCopy = () => {
        navigator.clipboard.writeText(text);
        props.showAlert('success','Copied to clip-board')
    }

    const countWords = () =>{
        let cnt = 0;
        let result = text.replace(/^\s+|\s+$/gm,'');
        if(result.length===0) return 0
        for(let i=0;i<result.length-1;i++) {
            if(result[i]!==' ' && result[i+1]===' ') cnt++;
        }
        if(result[result.length-1]!==' ') cnt++;
        return cnt;
    }

    const [text,setText] = useState('Enter your text here')
    return(
        <>
        <div className="container my-3">
        <h1 style={{color:props.mymode=== 'dark'?'white': 'black'}}>{props.heading}</h1>
        <div className="mb-3" >
            <textarea className="form-control"  id="exampleFormControlTextarea1" value={text} onChange= {handleOnchange} rows="4" ></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleOnUpper}>convert to uppercase</button>
        <button className='btn btn-primary mx-1' onClick={handleOnLower}>convert to lowercase</button>
        <button className='btn btn-primary mx-1' onClick={handleRemoveSpace}>remove extra spaces</button>
        <button className='btn btn-primary mx-1' onClick={handleCopy}>copy text</button>
        <button className='btn btn-primary mx-1' onClick={handleClear}>clear text</button>
        <div className=' container my-4' style={{backgroundcolour: props.mymode==='dark'? 'Grey': 'white', color:props.mymode=== 'dark'?'white': 'black'}}>
            <h3 > Text Summary </h3>
            <p>{countWords()} words and {text.length} characters</p>
            <p>{0.08 * countWords()} Minutes read</p>
        </div>
        <div className='container my-3' style={{backgroundcolour: props.mymode==='dark'? 'Grey': 'white', color:props.mymode=== 'dark'?'white': 'black'}}>
            <h3>Preview</h3>
            <p>{text.length>0?text:"Enter something to preview"}</p>
        </div>
        </div>
        </>
    )
}