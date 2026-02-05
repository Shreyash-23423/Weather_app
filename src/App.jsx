import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from '@mui/material/Button';

import CheckIcon from '@mui/icons-material/Check';
import Alert from '@mui/material/Alert';

function App() {

  let handleclick =()=>{
    console.log("button was clicked")
  }
  return (
    <>
      <Button onClick={handleclick} variant="contained">Click me</Button>
      <Button onClick={handleclick} color="error" >Click me</Button>
       <Alert icon={<CheckIcon fontSize="inherit" />} severity="success">
      Here is a gentle confirmation that your action was successful.
    </Alert>
    </>
  )
}

export default App
