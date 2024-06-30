import React, { useState } from 'react';
import { Box, Typography, List, ListItem, Paper, IconButton } from '@mui/material';
import Header from './components/Header';
import InputBar from './components/InputBar';
import { RxCross2 } from "react-icons/rx";

interface Message {
  id: number;
  text: string;
}

const App: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [message, setMessage] = useState('');

  const sendMessage = () => {
    if (message.trim()) {
      const newMessage = { id: messages.length + 1, text: message };
      setMessages([...messages, newMessage]);
      setMessage('');
    }
  };

  const deleteMessage = (id: number) => {
    setMessages(messages.filter((msg) => msg.id !== id));
  };

  return (
    <Box sx={{ height: '100vh', display: 'flex', flexDirection: 'column',backgroundColor:'#FAF9F4' }}>
      <Header />
      <Box sx={{ flexGrow: 1, p: 2, overflowY: 'auto'  }}>
        <List>
          {messages.map((msg) => (
            <ListItem key={msg.id} sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <Paper sx={{ p: 2, width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderRadius:'20px' }}>
                <Typography variant="body1">{msg.text}</Typography>
                <IconButton aria-label="delete" onClick={() => deleteMessage(msg.id)}>
                <RxCross2/>
                </IconButton>
              </Paper>
            </ListItem>
          ))}
        </List>
      </Box>
      <Box sx={{ p: 2, borderTop: '1px solid #ccc' }}>
        <InputBar message={message} setMessage={setMessage} sendMessage={sendMessage} />
      </Box>
    </Box>
  );
};

export default App;
