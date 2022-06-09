import React, { ChangeEvent, KeyboardEvent, KeyboardEventHandler, useEffect, useState } from 'react';
import logo from './logo.svg'; 
import PostTable from '../component/table/Post';
import { IPost } from '../models/post';



function Main() {

  const [ posts, setPosts ] = useState<IPost[]>(
    [
    ]
  )
  const [ search, setSearch ] = useState<string>("")
  const [page, setPage] = useState<number>(1)

  const getPosts = async () => {
    const res: {
      posts: IPost[]
    } = await fetch(" https://dummyjson.com/posts?limit=10&skip=" + page).then(res => res.json())
    setPosts(res.posts)
  }

  const searchPosts = async () => {
    if(search){
        const res: {
            posts: IPost[]
          } = await fetch(" https://dummyjson.com/posts/search?q=" + search).then(res => res.json())
          setPosts(res.posts)
    }else{
        getPosts()
    }
  }

  useEffect(() => {
    getPosts()
  }, [page])

  function hundleChange(e: ChangeEvent<HTMLInputElement>){
      setSearch(String(e.target.value))
  }

  return (
    <div className="app">

        
        <h2>Список постов</h2>
        <div className="inpwrap">
            <input type="text" className="inp" onInput={hundleChange} onKeyDown={(e:KeyboardEvent<HTMLInputElement>) => {
                if(e.key == "Enter"){
                    searchPosts()
                }
            }}/>
            <button className="inp_btn " onClick={searchPosts}>Поиск</button>
        </div>
        <PostTable posts={posts}/>

        <div className="btns">
            <button className='btn' onClick={() => {
                if(page > 1){
                    const a = page - 1
                    setPage(a)
                }
            }}>Пред</button>
            <p className='page_num'>
                {
                    page
                }
            </p>
            <button className='btn' onClick={() => {
                const a = page + 1
                setPage(a)
            }}>сдед</button>
        </div>
    </div>
  );
}

export default Main;