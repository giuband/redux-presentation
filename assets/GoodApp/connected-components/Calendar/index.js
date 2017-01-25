import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import CalendarRow from '../../components/CalendarRow';

const Calendar = ({ people }) => {
  console.log('%c[RENDER] Entire calendar page', 'color: #2AA');
  return (
    <div>
      {people.map(person => (
        <CalendarRow
          key={person}
          person={person}
        />
      ))}
    </div>
  );
};

Calendar.propTypes = {
  people: PropTypes.array,
};

const mapStateToProps = state => ({ people: state.people });

export default connect(mapStateToProps)(Calendar);
