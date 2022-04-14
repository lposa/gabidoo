import React from 'react';
import {
  CardOutline,
  CallOutline,
  RocketOutline,
  BasketOutline,
} from 'react-ionicons';

function FeaturesBar() {
  return (
    <div className='features-bar-container'>
      <div className='features-bar-wraper'>
        <RocketOutline color={'#fecc2c'} height='50px' width='50px' />
        <div className='features-bar-text'>
          <h1>Besplatna dostava</h1>
          <p>Za iznose preko 7.000,00din</p>
        </div>
      </div>
      <div className='features-bar-wraper'>
        <CallOutline color={'#fecc2c'} height='50px' width='50px' />
        <div className='features-bar-text'>
          <h1>Podrška i pomoć</h1>
          <p>Pozovite nas u bilo koje vreme</p>
        </div>
      </div>
      <div className='features-bar-wraper'>
        <CardOutline color={'#fecc2c'} height='50px' width='50px' />
        <div className='features-bar-text'>
          <h1>100% Sigurna kupovina</h1>
          <p>Proverene transakcije</p>
        </div>
      </div>
      <div className='features-bar-wraper'>
        <BasketOutline color={'#fecc2c'} height='50px' width='50px' />
        <div className='features-bar-text'>
          <h1>Velike akcije</h1>
          <p>Popusti i do 90%</p>
        </div>
      </div>
    </div>
  );
}

export default FeaturesBar;
