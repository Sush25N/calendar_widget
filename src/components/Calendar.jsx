import React, { useState } from 'react'
import DatePicker from 'react-datepicker';

const Calendar = () => {
    const [date, setDate] = useState(new Date());
    const minDate = new Date();

    minDate.setFullYear(minDate.getFullYear() - 5);

  return (
    <>
      <DatePicker 
        onChange={setDate}
        value={date}
        minDate={minDate}
        format='yy-mm-dd'
      />
    </>
  )
}

export default Calendar
