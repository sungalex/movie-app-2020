import React from 'react';

function Food({fav}) {
return <h2>I like {fav}</h2>
}

function App() {
  return (
    <div>
      <h1>Hello!!!</h1>
      <Food fav="aaa" />
      <Food fav="bbb" />      
    </div>
  );
}

export default App;
