import React, { useState, useEffect } from 'react';

import loadingComments from '../utils/loadingComments';

const Loading = () => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const intervalID = setInterval(() => {
            console.log(index);
            if(index < loadingComments.length -1) {
                setIndex(index+1)
            } else {
                setIndex(0);
            }
        }, 2000);
        return () => clearInterval(intervalID);
    }, [index])

  return <div className='loading-container'>
    <div className="loading"></div>
    <p>{loadingComments[index]}</p>
  </div>
}

export default Loading;