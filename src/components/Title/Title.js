import React from 'react'
import st from './Title.module.css'

const Title = (props) => {
  return (
    <div className={st.title}>
      <h2>{props.title}</h2>
    </div>
  )
}

export default Title