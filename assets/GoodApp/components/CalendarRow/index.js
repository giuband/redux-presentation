import React, { PropTypes } from 'react';
import DayPicker from '../../connected-components/DayPicker';

const CalendarRow = ({ person }) => {
  console.log(`%c[RENDER] Row for person ${person}`, 'color: #A7B');
  return (
    <div className="calendar-row">
      <div className="calendar-row__person">{person}:</div>
      <DayPicker person={person} />
    </div>
  );
};

CalendarRow.propTypes = {
  person: PropTypes.string,
};

export default CalendarRow;
