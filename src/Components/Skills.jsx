import React from 'react'
import '../Style/skills.scss'

const Skills = () => {

  return (
    <div className="skills">
      <div className="container">
        <h4>Html</h4>
        <div className="skillbar-border">
          <p className='yazi'>%90</p>
          <div className="html-background">
          </div>
        </div>
        <h4>Css</h4>
        <div className="skillbar-border">
          <p className='yazi'>%85</p>
          <div className="css-background">
          </div>
        </div>
        <h4>Java Scpirt</h4>
        <div className="skillbar-border">
          <p className='yazi'>%70</p>
          <div className="js-background">
          </div>
        </div>
        <h4>React JS</h4>
        <div className="skillbar-border">
          <p className='yazi'>%75</p>
          <div className="react-background">
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills