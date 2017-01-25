import React, { PropTypes } from 'react';

const DayPicker = ({ pickedDays, person, addDay, removeDay }) => {
  const daysInMonth = 30;
  const allDays = [...Array(daysInMonth).keys()].map(i => i + 1);
  return (
    <div className="calendar-row__day-picker">
      {allDays.map((day) => {
        const isDaySelected = pickedDays.includes(day);
        const onClick = (isDaySelected) ? removeDay : addDay;
        const className = isDaySelected ? 'active' : '';
        return (
          <button key={day} className={className} onClick={() => onClick(person, day)}>
            {day}
          </button>
        );
      })}
    </div>
  );
};

DayPicker.propTypes = {
  pickedDays: PropTypes.array,
  person: PropTypes.string,
  addDay: PropTypes.func,
  removeDay: PropTypes.func,
};
export default DayPicker;
