import React, {useState} from 'react';
import Posts from "./components/Posts/Posts";

function foobar(obj) {
  console.log(obj)
}

const App = () => {
  return (
    <div>
      <hr/>
      <h2>posts component start</h2>
      <Posts foobar={foobar}/>
      <h2>posts component end</h2>
      <hr/>
    </div>
  );
};

export default App;
