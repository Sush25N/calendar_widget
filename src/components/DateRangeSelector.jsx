import React, { useState } from 'react'
import DatePicker from 'react-datepicker'
import axios from 'axios';

const DateRangeSelector = () => {
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

    const handleButtonClick = () => {
        axios.get('url', {
            params : {
                start : startDate.toISOString(),
                end : endDate.toISOString(),
            }
        })
        .then(resp => {

        })
        .catch(err => {
            console.log(err);
        });
    };

    // const datePickerStyles = {
    //     width: '200px',
    //     marginBottom: '10px',
    //   };

  return (
    <>
      <DatePicker 
        onChange={setStartDate}
        value={startDate}
        format='yy-mm-dd'
      />
      <DatePicker 
        onChange={setEndDate}
        value={endDate}
        format='yyyy-mm-dd'
        // style={datePickerStyles}
      />
      <button onClick={handleButtonClick}>Submit</button>
    </>
  )
}

export default DateRangeSelector
