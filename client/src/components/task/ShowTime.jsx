import React from 'react';
import getTime from './get_time';
import { useState, useEffect } from 'react';

  function ShowTime(props) {
    const startTime = new Date(props.currentTime)
    const [time, setTime] = useState(['00','00','00']);
    useEffect(() => {
        const intervalId = setInterval(() => {
          setTime(getTime(startTime));
        }, 1000);
        return () => {
            clearInterval(intervalId)
        }
    });

    const [hours, minutes, seconds] = [time[0],time[1],time[2]]
  return (
    <div>
      <p>Timer: {hours}:{minutes}:{seconds}</p>
    </div>
  );
}

export default ShowTime;
