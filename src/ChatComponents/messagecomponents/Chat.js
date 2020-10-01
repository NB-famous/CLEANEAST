import React from 'react'
//import Login from './Login'
//import useLocalStorage from '../hooks/useLocalStorage';
import Dashboard from './Dashboard'
import { ContactsProvider } from '../contexts/ContactsProvider'
import { ConversationsProvider } from '../contexts/ConversationsProvider';
import { SocketProvider } from '../contexts/SocketProvider';

function Chat() {
  //const [id, setId] = useLocalStorage('id')

  const id = localStorage.getItem("cleanerUser")
  const id2 = localStorage.getItem("userUser")

  const dashboard = (
    <SocketProvider id={id}>
      <ContactsProvider>
        <ConversationsProvider id={id}>
          <Dashboard id={id} />
        </ConversationsProvider>
      </ContactsProvider>
    </SocketProvider>
  )

  const dashboard2 = (
    <SocketProvider id={id2}>
      <ContactsProvider>
        <ConversationsProvider id={id2}>
          <Dashboard id={id2} />
        </ConversationsProvider>
      </ContactsProvider>
    </SocketProvider>
  )

  console.log("THIS IS ID", id)

  return (
    id ? dashboard : dashboard2 
  )
}

export default Chat;