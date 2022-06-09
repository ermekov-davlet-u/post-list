import React, { useEffect, useState } from 'react';
import logo from './logo.svg'; 
import PostTable from '../component/table/Post';
import { IPost } from '../models/post';
import { useParams, useNavigate } from 'react-router-dom';



function PostShow() {

  const { id = 1 } = useParams()
  const history = useNavigate();

  const [ post, setPost ] = useState<IPost>(
      {
        id:0,
        title:"",
        body:"",
        userI:0,
        tags:[],
        reactions:0
      }
  )

  const getPosts = async () => {
    const res: IPost= await fetch("https://dummyjson.com/posts/" + id).then(res => res.json())
    setPost(res)
  }

  useEffect(() => {
    getPosts()
    return () => {
      setPost({
        id:0,
        title:"",
        body:"",
        userI:0,
        tags:[],
        reactions:0
      })
    }
  },[])

  const goBack = () => {
    history(-1)
  }

  return (
    <div className="app">
        <div className="show">
          <div className="show_container">
            <button className="btn" onClick={goBack}>Назад</button>
            <h2 className="show_title">
              {
                post.title
              }
            </h2>
            <div className="post_body" onClick={() => {
              console.log(post)
              getPosts()
            }}>
              <strong> Текст: </strong>
              {
                post.body
              }
            </div>
          </div>
        </div>
    </div>
  );
}

export default PostShow;