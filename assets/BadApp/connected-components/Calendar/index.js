import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import CalendarRow from '../../components/CalendarRow';

const Calendar = ({ calendarData, addDay, removeDay }) => {
  console.log('%c[RENDER] Entire calendar page', 'color: #2AA');
  const people = Object.keys(calendarData);
  return (
    <div>
      {people.map(person => (
        <CalendarRow
          key={person}
          person={person}
          pickedDays={calendarData[person]}
          addDay={addDay}
          removeDay={removeDay}
        />
      ))}
    </div>
  );
};

Calendar.propTypes = {
  calendarData: PropTypes.object,
  addDay: PropTypes.func,
  removeDay: PropTypes.func,
};

const mapStateToProps = state => ({ calendarData: state.pickedDays });
const mapDispatchToProps = dispatch => ({
  addDay: (person, day) => dispatch({ type: 'ADD_DAY', person, day }),
  removeDay: (person, day) => dispatch({ type: 'REMOVE_DAY', person, day }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Calendar);
