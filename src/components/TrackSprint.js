import React, { useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { getSprint } from '../actions';

const RecordSprint = () => {
  const [targetValue, setTarget] = useState(100);
  const [hoursValue, setHours] = useState(0);
  const [minutesValue, setMinutes] = useState(0);
  const [secondsValue, setSeconds] = useState(0);
  const [distanceValue, setDistance] = useState(0);
  const [remarksValue, setRemarks] = useState('');
  // const [effortValue, setEffort] = useState(0);

  const [title, setTitle] = useState('What\'s your sprint target?');
  const selectTarget = [100, 200, 500, 1000, 2000, 5000];

  const dispatch = useDispatch();

  const onSubmit = e => {
    e.preventDefault();
    const effortValue = ((distanceValue / targetValue) * 100);

    axios.post('http://localhost:3000/api/v1/sprints', {
      target: targetValue,
      hours: hoursValue,
      minutes: minutesValue,
      seconds: secondsValue,
      distance: distanceValue,
      remarks: remarksValue,
      effort: effortValue,
    });

    dispatch(getSprint());
  };

  // Inputs
  const targetInput = useRef(null);
  const hoursInput = useRef(null);
  const minsInput = useRef(null);
  const secondsInput = useRef(null);
  const distanceInput = useRef(null);
  const remarksInput = useRef(null);
  const effortInput = useRef(null);

  // Buttons
  const firstButtons = useRef(null);
  const secondButtons = useRef(null);
  const thirdButtons = useRef(null);
  const fourthButtons = useRef(null);
  const fifthButtons = useRef(null);
  const sixthButtons = useRef(null);

  // Progress bar
  const hourBar = useRef(null);
  const minuteBar = useRef(null);
  const secondsBar = useRef(null);
  const distanceBar = useRef(null);

  return (
    <div>
      <div>
        <h1>Record Sprint</h1>
      </div>
      <div>
        <div>
          <h3>{title}</h3>
        </div>
      </div>
      <div>
     
        <form onSubmit={onSubmit}>
          <select
            ref={targetInput}
            size="2"
            type="number"
            name="target"
            value={targetValue}
            onChange={e => setTarget(e.target.value)}
          >
            {selectTarget.map(target => (
              <option key={target} value={target}>
                {target}
                {' '}
                metres
                {' '}
              </option>
            ))}
          </select>
          <input
            ref={hoursInput}
            type="number"
            name="hours"
            min="0"
            max="24"
            placeholder="hours"
            className="hidden"
            value={hoursValue}
            onChange={e => setHours(e.target.value)}
          />
          <input
            ref={minsInput}
            type="number"
            name="minutes"
            min="0"
            max="60"
            placeholder="minutes"
            value={minutesValue}
            className="hidden"
            onChange={e => setMinutes(e.target.value)}
          />
          <input
            ref={secondsInput}
            type="number"
            name="seconds"
            min="0"
            max="60"
            placeholder="seconds"
            className="hidden"
            value={secondsValue}
            onChange={e => setSeconds(e.target.value)}
          />
          <input
            ref={distanceInput}
            type="number"
            name="distance"
            min="10"
            max="10000"
            placeholder="distance"
            className="hidden"
            value={distanceValue}
            onChange={e => setDistance(e.target.value)}
          />
          <textarea
            ref={remarksInput}
            name="remarks"
            placeholder="remarks"
            min="2"
            max="100"
            className="hidden"
            cols="20"
            rows="6"
            value={remarksValue}
            required
            onChange={e => setRemarks(e.target.value)}
          />
          <input
            ref={effortInput}
            type="hidden"
            name="effort"
            className="hidden"
            // value={effortValue}
          />
  
          <div ref={firstButtons}>
            <button
              type="button"
              onClick={() => recordTwo()}
            >
              Next
            </button>
          </div>

          <div ref={secondButtons} className="hidden">
            <button
              type="button"
              onClick={() => recordOne()}
            >
              Prev
            </button>
            <button
              type="button"
              onClick={() => recordThree()}
            >
              Next
            </button>
          </div>

          <div ref={thirdButtons} className="hidden">
            <button
              type="button"
              onClick={() => recordTwo()}
            >
              Prev
            </button>
            <button
              type="button"
              onClick={() => recordFour()}
            >
              Next
            </button>
          </div>
          <div ref={fourthButtons} className="hidden">
            <button
              type="button"
              onClick={() => recordThree()}
            >
              Prev
            </button>
            <button
              type="button"
              onClick={() => recordFive()}
            >
              Next
            </button>
          </div>

          <div ref={fifthButtons} className="hidden">
            <button
              type="button"
              onClick={() => recordFour()}
            >
              Prev
            </button>
            <button
              type="button"
              onClick={() => recordSix()}
            >
              Next
            </button>
          </div>

          <div ref={sixthButtons} className="hidden">
            <button
              type="button"
              onClick={() => recordFive()}
            >
              Prev
            </button>
            <button
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RecordSprint;
