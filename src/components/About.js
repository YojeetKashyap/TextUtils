import React from 'react'

function About(props) {
  return (
    <div className={`container bg-${props.mode} text-${props.mode=="light"?"black":"white"}`}>
      This just basic React App to Learn react basics,
      this basically count words , count vowels in whole text entered 
    </div>
  )
}

export default About
