import React from 'react';
import { Box, IconButton, Menu, MenuItem, TextField } from '@mui/material';
import { PiPaperPlaneRightBold } from "react-icons/pi";
import { ImAttachment } from "react-icons/im";

interface InputBarProps {
  message: string;
  setMessage: React.Dispatch<React.SetStateAction<string>>;
  sendMessage: () => void;
}

const InputBar: React.FC<InputBarProps> = ({ message, setMessage, sendMessage }) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ display: 'flex', alignItems: 'center', p: 2, borderTop: '1px solid #ccc' }}>
      <TextField
        variant="outlined"
        placeholder="Reply to @Rohit Yadav"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        fullWidth
        sx={{
          mr: 2,
          '& .MuiOutlinedInput-root': {
            borderRadius: '20px',
            '& fieldset': {
              borderColor: '#ccc',
            },
            '&:hover fieldset': {
              borderColor: '#aaa',
            },
            '&.Mui-focused fieldset': {
              borderColor: '#000',
            },
          },
        }}
      />
      <IconButton aria-label="attachment" component="span" onClick={handleMenuOpen}>
        <ImAttachment />
      </IconButton>
      <Menu 
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
        sx={{ style: { display: 'flex', flexDirection: 'row' } }}
      >
        <MenuItem onClick={handleMenuClose}>
          <IconButton aria-label="Camera">
            <img src="/camera02.svg" alt="camera" />
          </IconButton>
        </MenuItem>
        <MenuItem onClick={handleMenuClose}>
          <IconButton aria-label="Video">
            <img src="/iconvideo.svg" alt="video" />
          </IconButton>
        </MenuItem>
        <MenuItem onClick={handleMenuClose}>
          <IconButton aria-label="Document">
            <img src="/document.svg" alt="document" />
          </IconButton>
        </MenuItem>
      </Menu>
      <IconButton aria-label="Send" onClick={sendMessage}>
        <PiPaperPlaneRightBold />
      </IconButton>
    </Box>
  );
};

export default InputBar;
