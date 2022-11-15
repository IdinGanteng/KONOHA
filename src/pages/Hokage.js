import React from 'react';
import Hasirama from '../aset/hasirama.jpeg';

const Hokage = () => {
  return (
    <div className='flip-card'>
        <div className='flip-card-inner'>
            <div className='flip-card-front'>
              <img src={Hasirama} style={{width:"300px",height:"300px"}}/>
            </div>
            <div className='flip-card-back'>
              <h3>HASHIRAMA</h3>
            </div>
        </div>
    </div>
  )
}

export default Hokage