import React from 'react'
import "../styles/Title.css"

interface TextComponent{
    text1: string,
    text2: string
}

const Title: React.FC<TextComponent> = ({ text1, text2 }) => {

  return (
    <div className="titleContainer">
      <p className="titleRed">{text1}</p>
      <p className="titleDesc">{text2}</p>
    </div>
  )
}

export default Title
