import React from 'react'
import Sidebar from './Sidebar';
import OpenConversation from './OpenConversation';
import { useConversations } from '../contexts/ConversationsProvider';

export default function Dashboard({ id }) {
  const { selectedConversation } = useConversations()

  return (
    <div className="d-flex" 
    
    style={{ 
            height: '75vh',
            border: '3px solid black',
            borderWeight: 'thick',
            borderRadius: '10px',
            width: '100%',
            backgroundColor: 'white',
          }}
    
    >
      <Sidebar id={id} />
      {selectedConversation && <OpenConversation />}
    </div>
  )
}