import React from 'react'
import { useState } from 'react'
import { useMoodContext } from '../../context/MoodContext'

const Emojis = () => {
    const { currentMood } = useMoodContext();
  
    let emoji = ('');

    if (currentMood === 'happy'){
        emoji = '😃'
    } else if (currentMood === 'neutral'){
       emoji = '😐'
    } else if (currentMood === 'sad'){
        emoji = '😞';
    };


return (
    <div>
        <p>{emoji}</p>
    </div>
  )
}

export default Emojis