import React from 'react';
import './PageNav.css'

const PageNav = (props) => {

  const previousPageStyle = ['previous']
  const nextPageStyle = ['next']

  if(props.page === 1){
    previousPageStyle.push('disabled')
  }

  if(props.page === props.pages) {
    nextPageStyle.push('disabled')
  }

  let previousButton = (
    <li className={previousPageStyle}>
      <button onClick={props.previousPage} className="btn btn-link">
        Previous
      </button>
    </li>
  );

  let nextButton = (
    <li className={nextPageStyle}>
      <button onClick={props.nextPage} className="btn btn-link">
        Next
      </button>
    </li>
  );

  return (
    <nav>
      <ul className="pager">
        {previousButton}
        {nextButton}
      </ul>
    </nav>
  );
}

export default PageNav
