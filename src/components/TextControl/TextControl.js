import React from 'react';

import './TextControl.css';

const textControl = (props) => {
	return(
		<div className="TextControl">
      <textarea rows="4" cols="50" value={props.content} onChange = {
        props.changed
      }/>
      <button className="more" onClick={props.save} >
        Save
      </button>
    </div>
	)
};

export default textControl;
