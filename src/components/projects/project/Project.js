import React from 'react'
import st from './Project.module.css'

const Project = (props) => {
  return (
    <div className={st.wrapper_project}>
      <div className={st.img} style={props.style}>
        <a href={props.web} className={st.btn}>
          <span/>
          <span/>
          <span/>
          <span/>
          view project
        </a>
      </div>
      <div className={st.projectInfo}>
        <h3>{props.title}</h3>
        <span className={st.text}>{props.text}</span>
      </div>
    </div>
  )
}

export default Project