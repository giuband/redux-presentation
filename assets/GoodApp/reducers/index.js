import { combineReducers } from 'redux';
import pickedDays from './pickedDays';
import people from './people';

export default combineReducers({ pickedDays, people });
