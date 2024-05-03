import React from 'react'
import {ChatEngine} from 'react-chat-engine'
import {ChatFeed} from './components/ChatFeed'
import './App.css'
import LoginForm from './components/LoginForm'

const App = () => {

  if (!localStorage.getItem('username')) return <LoginForm />
  return (
    <ChatEngine
        height="100vh"
        projectID="96ee4963-9d7d-45a1-8e72-233abe4f0b1d"
        userName={localStorage.getItem('username')}
        userSecret={localStorage.getItem('password')}
        
        renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
    />

  )
}

export default App
