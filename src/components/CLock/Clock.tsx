import React, { useEffect, useState } from "react";

export function Clock(){
  const [date, setDate] = useState(new Date());
  
  function refreshClock() {
    setDate(new Date());
    console.log('time set');
  }

  useEffect(() => {
    const timerId = setInterval(refreshClock, 1000);
    console.log('timerId created');

    return function cleanup() {
      console.log('clock unmounter');
      
      clearInterval(timerId);
    };
  }, []);

  return (
    <div>
      {date.toLocaleTimeString()}
    </div>
  );
}

