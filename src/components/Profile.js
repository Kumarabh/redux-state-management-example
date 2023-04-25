import React from 'react'
import { useSelector } from 'react-redux';

const Profile = () => {
    const userStoreData = useSelector(state => state.userReducer.value);
    const postStoreData = useSelector(state => state.postReducer.value);
    // useSelector selects reducer from the store

    return (
        <>
            <div style={{ display: 'flex', flexDirection: 'row' }}>
                <div style={{ width: '300px' }}>
                    <h4>User details</h4>
                    <h6>First name: {userStoreData.firstName}</h6>
                    <h6>Last name: {userStoreData.lastName}</h6>
                </div>
                <div style={{ width: '300px' }}>
                    <h4>Post details</h4>
                    <h6>Post id: {postStoreData.id}</h6>
                    <h6>Title: {postStoreData.title}</h6>
                    <h6>Description: {postStoreData.description}</h6>
                </div>
            </div>
            <hr></hr>
        </>
    )
}

export default Profile