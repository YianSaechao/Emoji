import { useState } from 'react'
 import React from 'react'
import './App.css'
import ComplimentButton from './components/ComplimentButton'
import Emojis from './components/Emojis'
import { MoodProvider } from './context/MoodContext'

function App() {
  return (
<div>
  <MoodProvider>
    <Emojis />
    <ComplimentButton />
  </MoodProvider>
</div>
  )
}

export default App
