import React from 'react';


const Post = ({value, foobar}) => {
  return (
    <div>
      <h3>{value.id} {value.title}</h3>
      <button onClick={()=>{
        foobar(value);
      }}>
        details
      </button>


    </div>
  );
};

export default Post;