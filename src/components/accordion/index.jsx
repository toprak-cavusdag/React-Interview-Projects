import React, { useState } from 'react';
import { data } from './data';
import './style.css';

const Accordion = () => {
  //Single Selection
  //Multi Selection

  const [selected, setSelected] = useState(null);
  const [enableMultiSelected, setEnableMultiSelected] = useState(false);
  const [multiple, setMultiple] = useState([]);
  const handleSingleSelection = (getCurrentId) => {
    console.log(getCurrentId);
    setSelected(getCurrentId === selected ? null : getCurrentId);
  };

  const handleMultiSelected = (getCurrentId) => {
    let cpyMultiple = [...multiple];
    const findIndexOfCurrentId = cpyMultiple.indexOf(getCurrentId);
    if (findIndexOfCurrentId === -1) cpyMultiple.push(getCurrentId);
    else cpyMultiple.splice(findIndexOfCurrentId, 1);
    setMultiple(cpyMultiple);
  };

  console.log(selected, multiple);
  return (
    <div className='wrapper'>
      <button
        className='button'
        onClick={() => setEnableMultiSelected(!enableMultiSelected)}
      >
        Enable Multi Selection
      </button>
      <div className='accordian'>
        {data && data.length > 0 ? (
          data.map((data) => (
            <div key={data.id} className='item'>
              <div>
                <h3
                  onClick={
                    enableMultiSelected
                      ? () => handleMultiSelected(data.id)
                      : () => handleSingleSelection(data.id)
                  }
                  className='title'
                >
                  {data.question}
                </h3>
                <span>+</span>
              </div>

              {enableMultiSelected
                ? multiple.indexOf(data.id) !== -1 && (
                    <div className='content'>{data.answer}</div>
                  )
                : selected === data.id && (
                    <div className='content'>{data.answer}</div>
                  )}
            </div>
          ))
        ) : (
          <div>No data!</div>
        )}
      </div>
    </div>
  );
};

export default Accordion;
