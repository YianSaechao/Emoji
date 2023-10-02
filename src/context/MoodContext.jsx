import React from 'react'
import { createContext, useContext, useState} from 'react'

const MoodContext = createContext();

export const useMoodContext = () => {

  return useContext(MoodContext)
};

export const MoodProvider = ({children}) => {
  const [currentMood, setCurrentMood] = useState('neutral')
  const [compliments, setCompliments] = useState(0)

  const value = {currentMood, setCurrentMood, compliments, setCompliments};

  return (
    <MoodContext.Provider value={value}>
      {children}
    </MoodContext.Provider>
  );
}
  
    
  

  