import React, { useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { getSprint } from '../actions';

const TrackSprint = () => {
  const [targetValue, setTarget] = useState(100);
  const [hoursValue, setHours] = useState(0);
  const [minutesValue, setMinutes] = useState(0);
  const [secondsValue, setSeconds] = useState(0);
  const [distanceValue, setDistance] = useState(0);
  const [remarksValue, setRemarks] = useState('');
  // const [effortValue, setEffort] = useState(0);

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

  return (
    <div>
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
              onClick={() => goToSecondPage()}
            >
              Next
            </button>
          </div>

          <div ref={secondButtons} className="hidden">
            <button
              type="button"
              onClick={() => goToFirstPage()}
            >
              Prev
            </button>
            <button
              type="button"
              onClick={() => goToThirdPage()}
            >
              Next
            </button>
          </div>
 
          <div ref={thirdButtons} className="hidden">
            <button
              type="button"
              onClick={() => goToSecondPage()}
            >
              Prev
            </button>
            <button
              type="button"
              onClick={() => goToFourthPage()}
            >
              Next
            </button>
          </div>
 
          <div ref={fourthButtons} className="hidden">
            <button
              type="button"
              onClick={() => goToThirdPage()}
            >
              Prev
            </button>
            <button
              type="button"
              onClick={() => goToFifthPage()}
            >
              Next
            </button>
          </div>

          <div ref={fifthButtons} className="hidden">
            <button
              type="button"
              onClick={() => goToFourthPage()}
            >
              Prev
            </button>
            <button
              type="button"
              onClick={() => goToSixthPage()}
            >
              Next
            </button>
          </div>

          <div ref={sixthButtons} className="hidden">
            <button
              type="button"
              onClick={() => goToFifthPage()}
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

export default TrackSprint;
