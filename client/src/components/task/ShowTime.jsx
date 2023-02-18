import React from 'react';
import {getTime,notify} from './get_time';
import { useState, useEffect } from 'react';
import './ShowTime.css'

  function ShowTime() {
    const [time, setTime] = useState(['00','00','00']);
    const [startTime, setStartTime] = useState(0);
    const [isRunning, setIsRunning] = useState(false)
    const [isDisabled, setIsDisabled] = useState(false)
    const [message, setMessage] = useState(null)
    useEffect(() => {
      let interval;
      if(isRunning)
      {

        interval = setInterval(() => {
        setTime(getTime(startTime));
        setMessage(notify(time))

        }, 1000);
      }
      else{
        clearInterval(interval)
      }
        return () => {
            clearInterval(interval)
        }
    });
    function handleStart() {
      setIsRunning(true);
      setStartTime(new Date());
    }
  
    function handleStop() {
      setIsRunning(false);
      setIsDisabled(true);
    }
    const [hours, minutes, seconds] = [time[0],time[1],time[2]]
    return (
    <div className='task-tracker'>
        <button className="button start-button" disabled={isDisabled} onClick={handleStart}>
          Check In
        </button>
        <button className="button stop-button" disabled={isDisabled} onClick={handleStop}>
          Checkout
        </button>
     
      <p className='timer'>Timer: {hours}:{minutes}:{seconds}</p>
      {message!==null 
      ?(
        <p>{message}</p>
      )
      :
      (<p></p>)
      }
    </div>
  );
}

export default ShowTime;
