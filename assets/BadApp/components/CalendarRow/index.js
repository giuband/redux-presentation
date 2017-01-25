import React, { PropTypes } from 'react';
import DayPicker from '../DayPicker';

const CalendarRow = ({ person, pickedDays, addDay, removeDay }) => {
  console.log(`%c[RENDER] Row for person ${person}`, 'color: #A7B');
  return (
    <div className="calendar-row">
      <div className="calendar-row__person">{person}:</div>
      <DayPicker pickedDays={pickedDays} addDay={addDay} removeDay={removeDay} person={person} />
    </div>
  );
};

CalendarRow.propTypes = {
  person: PropTypes.string,
  pickedDays: PropTypes.array,
  addDay: PropTypes.func,
  removeDay: PropTypes.func,
};
export default CalendarRow;
