import React from 'react'
import { useMoodContext } from '../../context/MoodContext'

const ComplimentButton = () => {
    const { compliments, setCompliments, setCurrentMood } = useMoodContext();
    const handleComplimentClick = () =>{
        setCompliments(compliments + 1);

        if (compliments < 5) {
            setCurrentMood('sad');
        } else if (compliments >= 5 && compliments <=9){
            setCurrentMood('fine');
        } else if (complliments >= 10 && compliments <= 15){
            setCurrentMood('happy');
        }
    };

  return (
    <div>
        <button onClick={handleComplimentClick}>Compliment Me</button>
        <p>Compliments: {compliments}</p>
    </div>
  )
}

export default ComplimentButton