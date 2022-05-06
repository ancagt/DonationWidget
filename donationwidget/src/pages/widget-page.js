import React, { useState } from 'react';
import WidgetContent from './widget-content';
import SendIcon from '@mui/icons-material/Send';
import Button from '@mui/material/Button';
import './widget.css';
const WidgetPage = () => {
const [sendWasClicked, setSendWasClicked] = useState(false);
const [saveWasClicked, setSaveWasClicked] = useState(false);

const onSaveClick= () => {
    setSaveWasClicked(!saveWasClicked);
};

const onSendClick= () => {
    setSendWasClicked(!sendWasClicked);
};


  return (
    <div className='widget-page'>
        <h3>Welcome to the donation widget</h3>
        <WidgetContent saveWasClicked={saveWasClicked}/>
        <div>
            <Button variant="contained" style={{backgroundColor: 'lightgreen', marginRight:'5px'}} onClick={onSaveClick}>Save for later</Button>
            <Button variant="contained" style={{backgroundColor: 'lightblue'}} onClick={onSendClick}>Tell your friends {sendWasClicked &&<SendIcon style={{marginLeft:"5px"}}/>} </Button>
       </div>
    </div>
  );
};

export default WidgetPage;