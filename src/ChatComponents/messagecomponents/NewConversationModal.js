import React, { useState, useEffect } from 'react'
import { Modal, Form, Button } from 'react-bootstrap'
import { useContacts } from '../contexts/ContactsProvider'
import { useConversations } from '../contexts/ConversationsProvider'
import axios from 'axios'

export default function NewConversationModal({ closeModal }) {
  const [selectedContactIds, setSelectedContactIds] = useState([])
  const { contacts } = useContacts()
  const { createConversation } = useConversations()


  ///// GET REQUEST CLEANERS 

  const [registeredUser, setRegisteredUser] = useState([])

   /////// This is where get user is coming from and pass down to maps
   useEffect(()=>{
      axios({
          method: 'GET',
          url:'http://localhost:5000/cleaners/services'})
       .then(res => {
           setRegisteredUser(res.data)
           console.log("this is response", res)
       })
       .catch(err => console.log(err))
   }, [])

  ///////////

  function handleSubmit(e) {
    e.preventDefault()


    createConversation(registeredUser.map(cleaner => {
      let result
      if(cleaner.cleanerName === localStorage.getItem('cleanerData')){
         result = cleaner.cleanerName // dont take out the return from outside the if statement 
      }
      return result
    } ).sort().slice(0,1))

    console.log("THIS IS SELECTEDCONVERSATION:", selectedContactIds)
    closeModal()
  }

  function handleCheckboxChange(contactId) {
    setSelectedContactIds(prevSelectedContactIds => {
      if (prevSelectedContactIds.includes(contactId)) {
        return prevSelectedContactIds.filter(prevId => {
          return contactId !== prevId
        })
      } else {
        return [...prevSelectedContactIds, contactId]
      }
    })
  }

  return (
    <>
      <Modal.Header closeButton>Start Conversation with {localStorage.getItem("cleanerData")}</Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          {contacts.map(contact => (
            <Form.Group controlId={contact.id} key={contact.id}>
              <Form.Check
                type="checkbox"
                value={selectedContactIds.includes(contact.id)}
                label={contact.name}
                onChange={() => handleCheckboxChange(contact.id)}
              />
            </Form.Group>
          ))}
          <Button type="submit" style={{backgroundColor:"#44B244", borderColor: "unset"}}>Connect With The Cleanpreneur</Button>
        </Form>
      </Modal.Body>
    </>
  )
}