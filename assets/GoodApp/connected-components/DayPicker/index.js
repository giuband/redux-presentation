import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

const DayPicker = ({ pickedDays, person, addDay, removeDay }) => {
  const daysInMonth = 30;
  const allDays = [...Array(daysInMonth).keys()].map(i => i + 1);
  console.log(`%c[RENDER] Entire daypicker for ${person}`, 'color: #5AF');
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

const mapStateToProps = (state, ownProps) => {
  const { person } = ownProps;
  return {
    pickedDays: state.pickedDays[person],
  };
};

const mapDispatchToProps = dispatch => ({
  addDay: (person, day) => dispatch({ type: 'ADD_DAY', person, day }),
  removeDay: (person, day) => dispatch({ type: 'REMOVE_DAY', person, day }),
});

export default connect(mapStateToProps, mapDispatchToProps)(DayPicker);
