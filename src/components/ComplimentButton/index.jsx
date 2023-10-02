import React from 'react'
import { useMoodContext } from '../../context/MoodContext'

const ComplimentButton = () => {
    const { compliments, setCompliments, setCurrentMood } = useMoodContext();
    
    const handleClick = () =>{
        const newCompliments = compliments + 1;
        setCompliments(newCompliments);
        

        if (newCompliments < 5) {
            setCurrentMood('sad');
        } else if (newCompliments >= 5 && newCompliments <=9){
            setCurrentMood('neutral');
        } else if (newCompliments >= 10 && newCompliments <= 15){
            setCurrentMood('happy');
        }

    };

  return (
    <div>
        <button onClick={handleClick}>Compliment Me</button>
        <p>Compliments: {compliments}</p>
    </div>
  )
}

export default ComplimentButton;