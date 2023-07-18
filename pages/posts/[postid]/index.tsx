import Navbar from '@/pages/components/Navbar'
import React from 'react'

const PostDetails = ({ postinfo }: any) => {
    return (
        <div>
            <Navbar />
            <h4>Post Detail</h4>
            <div>
                <h3>{postinfo?.title}</h3>
                <p>
                    {postinfo?.body}
                </p>
            </div>
            <hr />
        </div>
    )
}

export default PostDetails

export const getServerSideProps = async (contex: any) => {
    const { params } = contex
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.postid}`)
    const data = await res.json()
    return {
        props: {
            postinfo: data
        }
    }

}