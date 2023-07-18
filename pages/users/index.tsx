import React, { use } from 'react'
import styles from '../../styles/Users.module.css'
import Link from 'next/link'
import Navbar from '../components/Navbar'
const Users = ({ users }: any) => {
    console.log({ users })
    return (
        <div>
            <Navbar />
            <h3>Users List Data</h3>
            <div className={styles.usersdiv}>
                {
                    users && users.map((v: any, i: any) => {
                        return (
                            <div key={i} className={styles.userdiv}>
                                <p>Name : {v.name}</p>
                                <p>Email: {v.email}</p>
                                <p>Phone: {v.phone}</p>
                                <Link href={`/users/${v.id}`}>Know more</Link>
                            </div>
                        )
                    })
                }
            </div>

        </div>
    )
}

export default Users



export const getStaticProps = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await res.json()
    console.log({ data })

    return {
        props: {
            users: data
        }
    }

}
