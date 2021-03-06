import React from 'react';
import { changeFilter } from '../../redux/contacts/contacts-actions';
import s from './Filter.module.css';
import { useDispatch } from 'react-redux';

export default function Filter() {
  const dispatch = useDispatch();
  return (
    <div>
      <label>
        Find contacts by name:
        <input
          type="text"
          name="filter"
          onChange={e => {
            dispatch(changeFilter(e.target.value));
          }}
          className={s.fieldInput}
        />
      </label>
    </div>
  );
}
