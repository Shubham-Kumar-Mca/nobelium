import React, { useState } from 'react';
import Calendar from 'react-calendar';
const Calender = () => {
    const [value, onChange] = useState(new Date());

  return (
    <div>
        <Calendar onChange={onChange} value={value} />

        <h3>{value.toString()}</h3>
    </div>
  )
}

export default Calender