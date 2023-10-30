import React, {useEffect, useState} from 'react';
import {getAllPosts} from "../../services/post.api.service";
import Post from "../Post/Post";

const Posts = ({foobar}) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getAllPosts()
      .then(value => setPosts(value.data));
  }, []);
  return (
    <div>
      {
        posts.map(value => (<Post foobar={foobar} value={value} key={value.id}/>))
      }
    </div>
  );
};

export default Posts;