import React from 'react'
import Navbar from '../components/Navbar'
import Link from 'next/link'
import { useRouter } from 'next/router'

const Posts = ({ posts }: any) => {

  const router=useRouter()

  const routeChange=(id:any)=>{
    router.push(`posts/${id}`)
  }

  return (
    <div>
      <Navbar />
      <h4>Posts List</h4>
      {
        posts && posts.map((v:any, i:any) => {
          return <div key={i}>
           <div onClick={()=>{
            routeChange(v.id)
           }}>
           
            <h3>{v.title}</h3>
            <p>
              {v.body}
            </p>
           </div>
            <hr />

          </div>
        })
      }
    </div>
  )
}

export default Posts

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts")
  const data = await res.json()
  return {
    props: {
      posts: data
    }
  }
}