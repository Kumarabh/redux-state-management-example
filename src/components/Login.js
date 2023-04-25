import React from 'react'
import { useDispatch } from 'react-redux'
import { login } from '../features/user';
import {createPost} from '../features/post'
const Login = () => {

    const userDispatch = useDispatch();
    const postDispatch = useDispatch();

    const userPayload = {
        firstName: 'John',
        lastName: 'Doe'
    }
    const postPayload = {
        id: '101',
        title: 'Times of india',
        description: 'The best selling news paper of India.'
    }
    
  return (
    <>
    <button onClick={() => {userDispatch(login(userPayload))}}>login</button>
    <button onClick={() => {postDispatch(createPost(postPayload))}}>Create post</button>
    </>
  )
}

export default Login