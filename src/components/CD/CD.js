import React from 'react';
import monkas from '../../assets/monkas.png';
import hands from '../../assets/hand.png';
import ez from '../../assets/ez.png';

import styling from './CD.module.css';

const confirmAndDeath = props => {
  return (
    <div className={styling.CD}>
      <div className={styling.Card}>
        <h2 style={{color: '#0080ff'}}>Confirmed</h2>
        <h1>{parseFloat(props.life).toLocaleString()}</h1>
        <img src={monkas} width="120" alt="" style={{margin: '1rem 0'}}></img>
      </div>
      <div className={styling.Card}>
        <h2 style={{color: '#ff0000'}}>Death</h2>
        <h1>{parseFloat(props.dead).toLocaleString()}</h1>
        <img src={hands} width="145" alt="" style={{margin: '1rem 0'}}></img>
      </div>
      <div className={styling.Card}>
        <h2 style={{color: '#00ff40'}}>Recovered</h2>
        <h1>{parseFloat(props.recover).toLocaleString()}</h1>
        <img src={ez} width="120" alt="" style={{margin: '1rem 0'}}></img>
      </div>
    </div>
  );
};

export default confirmAndDeath;
