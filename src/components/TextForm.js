import React,{useState} from 'react'




export default function TextForm(props) {
  const handleUpClick = () => {
    //console.log("uppercase was clicked");
    let newText = text.toUpperCase()
    setText(newText)
    props.showalert("Converted to UpperCase","success");
  }

  const handleOnChange = (event) => {
    //console.log("On change");
    setText(event.target.value);
    

  }

  const handleLowClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showalert("Converted to LowerCase","success")
  }

  const clearText = () => {
    if (CountWords(text)===0) {
      props.showalert("Its already cleared!","warning")
    }
    let newText = "";
    setText(newText);
  }

  const Countvowels = (str) => {
    const vowesls = "aeiouAEIOU";
    let count = 0;
    for(let char of str) {
      if(vowesls.includes(char)) {
        count++;
      }
    }
    return count;
  }

  const [text, setText] = useState("");

  let st = {color:props.mode === "dark"?"white":"black"}
 
const CountWords = (getwords) => {
  const word = getwords.trim().split(/\s+/).filter(word => word !== "");
  return word.length;
}

 
  
  return (
    <>
    <div className='container' >
         <h1 style={st}>{props.heading} </h1>
          <div className="mb-3">
              <textarea className={`form-control bg-${props.mode==="dark"?"black":"white"} text-${props.mode === "dark"?"white":"black"}`} value={text} onChange={handleOnChange}   id="myBox" rows="8" ></textarea>
          </div>
          <button className="btn btn-primary my-2 mx-2" onClick={handleUpClick}>Convert ot uppercase</button>
          <button className='btn btn-primary my-2 mx-2' onClick={handleLowClick} >Covert to lowercase</button>
          <button className='btn btn-primary my-2 mx-2' onClick={clearText} >Clear</button>
    </div>
    <div style={st}>
        <h1>Text Summary</h1>
        <h2 >Characters : {text.length}</h2>
        <h2 >Words : {CountWords(text)}</h2>
        <h2 >Vowels:{Countvowels(text)}</h2>
    </div>
    </>
  )
}
