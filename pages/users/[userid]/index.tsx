import Navbar from '@/pages/components/Navbar'

const UserDetails = ({ userinfo }: any) => {
    console.log({ userinfo })
    return (
        <div>
            <Navbar />

            <h3>User Information</h3>
            <div>
                <p>Name : {userinfo.name}</p>
                <p>Email: {userinfo.email}</p>
                <p>Phone: {userinfo.phone}</p>
                <p>Username: {userinfo.username}</p>
                <p>Website: {userinfo.website}</p>

            </div>
        </div>
    )
}

export default UserDetails


export const getServerSideProps = async (context: any) => {
    const { query } = context
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${query.userid}`)
    const data = await res.json()
    return {
        props: {
            userinfo: data
        }
    }

}