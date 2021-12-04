import React from 'react';

const Scores = (props) => {
  const scores = props.scores.map((ele, index) => {

    return(
      <div className="scores">
        <p>{ele.date}</p>
        <p>{ele.score}</p>
      </div>
    )
  })
  return (
    <div>{scores}</div>
  )
}

export default Scores