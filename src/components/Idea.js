import React from "react";
import {FaTimes} from 'react-icons/fa'

const Idea = ({ idea, onDelete, onToggle }) => {
  return (
  <div className={`idea ${idea.important ? 'reminder' :''}`} onDoubleClick={() => onToggle(idea.id)}>
    <h3>{idea.name} <FaTimes  onClick={() => onDelete(idea.id)} style={{color:'red', cursor :'pointer'}}/> </h3>
    <p>{idea.date}</p>
    <p>{idea.type}</p>
    <p>{idea.location}</p>
  </div>
  );
};

export default Idea;
