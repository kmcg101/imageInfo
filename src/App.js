// git init
// git add .
// git remote add origin git@github.com:kmcg101/imageInfo.git
// git commit -m 'first commit'
// git push origin master

import React, { useEffect, useState } from 'react'
import Dropzone from './Dropzone'
import './App.css';
import WidthComponent from './WidthComponent';
import HeightComponent from './HeightComponent';

import StatsMiddle from './StatsMiddle'


function App(props) {

  const [videoAttributes, setVideoAttributes] = useState([])

  const handleAttributesChange = (name, value) => {
    setVideoAttributes((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  const createWarning = () => {
    
  }



  return (
    <section className="container">
      <div className="contentArea">

        <div className='centerContent'>
          <WidthComponent width={videoAttributes.Width} />
          <Dropzone createWarning={createWarning} handleAttributesChange={handleAttributesChange}/>
          <div className='statsContainer'>
            <StatsMiddle extension={videoAttributes.Extension} fileType={videoAttributes.FileType} format={videoAttributes.Format} />
          </div>
        </div>
        <div className='rightContent'>
          <HeightComponent width={videoAttributes.Height} />
        </div>


      </div>


    </section>
  );
}

export default App;
