import React, { useState, useEffect } from 'react';

function App() {
  const [jackets, setJackets] = useState([]);

  useEffect(() => {
    
  fetch('https://bad-api-assignment.reaktor.com/products/jackets')
  .then(response => response.json())
  .then(data => setJackets(data));
  }
  )
console.log("jackets", jackets)

if (!jackets) {
  return <></>
}

  return (
    <div >
      <div style={{ borderRadious:'25px', border: '2px solid red'}}>

      {/*<div style={{ margin:'2px'}}>
          {jackets[0].name}
        </div>
        
        <div style={{ margin:'2px'}}>
          {jackets[0].price}
        </div>
        
        <div style={{ margin:'2px'}}>
          {jackets[0].type}
        </div>
  </div>*/}
  </div>

      {jackets.map((jacket, index) => 
         <div key={index}
         style={{ margin:'2px' , borderRadious:'25px', border: '2px solid red'}}>
          <div style={{ margin:'2px'}}>
            {jacket.price}
          </div>
          <div style={{ margin:'2px'}}>
            {jacket.name}
          </div>
          <div style={{ margin:'2px'}}>
            {jacket.color[0]}
          </div>

      
      </div>
    )}


    </div>
  );
}

export default App;
