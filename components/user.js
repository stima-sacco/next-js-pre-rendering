function User({ user }){
    return <>
        <p>{user.name}</p>
        <p>{user.email}</p>
        <p>{user.address.street}</p>
        <p>{user.address.zipcode}</p>
    </>
}

export default User