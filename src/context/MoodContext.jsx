import React from 'react'
import { createContext, useContext, useState} from 'react'

MoodContext = createContext();

export const useMoodContext = () => {

  return useContext(MoodContext)
};

export const MoodProvider = () => {
  const [currentMood, setCurrentMood] = useState('')
  const [compliments, setCompliments] = useState('')

  const value = {currentMood, setCurrentMood, compliments, setCompliments};

  return (
    <MoodContext.Provider value={value}>
      {children}
    </MoodContext.Provider>
  );
}
  
    
  

  