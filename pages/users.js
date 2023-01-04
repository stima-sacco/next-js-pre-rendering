function UserList({ users }) {

    return <><h1>List of users</h1>
    {
        users.map(user => {
            return(
                <div key={user.id} class="pt">
                    <p>{user.name}</p>
                    <p>{user.email}</p>
                    <p>{user.address.street}</p>
                    <p>{user.address.zipcode}</p>
                </div>
            )
        })
    }
    </>
}

export default UserList

export async function getStaticProps() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await response.json()
    console.log(data)
    
    return {
        props: {
            users: data
        },
    }
}

// export const getStaticProps = async () => {
//     const response = await fetch('https://jsonplaceholder.typicode.com/users')
//     const data = await response.json()
//     console.log(data)
    
//     return {
//         props: {
//             users: data
//         },
//     }
// }