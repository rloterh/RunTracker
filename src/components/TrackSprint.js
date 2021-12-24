import React, { useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { toast } from 'react-toastify';
import { fetchSprint } from '../actions/index';

const TrackSprint = () => {
  const [targetValue, setTarget] = useState(100);
  const [hoursValue, setHours] = useState(0);
  const [minutesValue, setMinutes] = useState(0);
  const [secondsValue, setSeconds] = useState(0);
  const [distanceValue, setDistance] = useState(0);
  const [remarksValue, setRemarks] = useState('');

  const [title, setTitle] = useState('What\'s your sprint target?');
  const selectTarget = [100, 200, 500, 1000, 2000, 5000];

  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();
    const effortValue = ((distanceValue / targetValue) * 100);

    axios.post('https://ancient-meadow-09395.herokuapp.com/api/v1/sprints', {
      target: targetValue,
      hours: hoursValue,
      minutes: minutesValue,
      seconds: secondsValue,
      distance: distanceValue,
      remarks: remarksValue,
      effort: effortValue,
    });

    dispatch(fetchSprint());
    toast.success(`${targetValue}m challenge recorded successfully`);
  };

  const targetInput = useRef(null);
  const hoursInput = useRef(null);
  const minsInput = useRef(null);
  const secondsInput = useRef(null);
  const distanceInput = useRef(null);
  const remarksInput = useRef(null);
  const effortInput = useRef(null);

  const firstButtons = useRef(null);
  const secondButtons = useRef(null);
  const thirdButtons = useRef(null);
  const fourthButtons = useRef(null);
  const fifthButtons = useRef(null);
  const sixthButtons = useRef(null);

  const hourBar = useRef(null);
  const minuteBar = useRef(null);
  const secondsBar = useRef(null);
  const distanceBar = useRef(null);

  const recordOne = () => {
    targetInput.current.classList = 'block';
    hoursInput.current.classList = 'hidden';
    secondButtons.current.classList = 'hidden';
    firstButtons.current.classList = 'bg-gray-100';
    hoursInput.current.classList = 'hidden';
    hourBar.current.classList = 'hidden';
    setTitle('What\'s your sprint target?');
  };

  const recordTwo = () => {
    targetInput.current.classList = 'hidden';
    hoursInput.current.classList = 'block focus:outline-none w-full';
    secondButtons.current.classList = 'flex bg-gray-100 w=full';
    firstButtons.current.classList = 'hidden';
    thirdButtons.current.classList = 'hidden';
    minsInput.current.classList = 'hidden';
    minuteBar.current.classList = 'hidden';
    hourBar.current.classList = 'flex w-3/4';
    setTitle('Hours');
  };

  const recordThree = () => {
    hoursInput.current.classList = 'hidden';
    minsInput.current.classList = 'block focus:outline-none w-full';
    secondButtons.current.classList = 'hidden';
    thirdButtons.current.classList = 'flex bg-gray-100 w-full';
    fourthButtons.current.classList = 'hidden';
    secondsInput.current.classList = 'hidden';
    minuteBar.current.classList = 'block w-3/4';
    hourBar.current.classList = 'hidden';
    secondsBar.current.classList = 'hidden';
    setTitle('Minutes');
  };

  const recordFour = () => {
    minsInput.current.classList = 'hidden';
    secondsInput.current.classList = 'block focus:outline-none w-full';
    thirdButtons.current.classList = 'hidden';
    fourthButtons.current.classList = 'flex bg-gray-100 w-full';
    fifthButtons.current.classList = 'hidden';
    distanceInput.current.classList = 'hidden';
    minuteBar.current.classList = 'hidden';
    secondsBar.current.classList = 'block w-3/4';
    distanceBar.current.classList = 'hidden';
    setTitle('Seconds');
  };
  const recordFive = () => {
    secondsInput.current.classList = 'hidden';
    distanceInput.current.classList = 'block focus:outline-none w-full';
    fourthButtons.current.classList = 'hidden';
    fifthButtons.current.classList = 'flex bg-gray-100 w-full';
    sixthButtons.current.classList = 'hidden';
    remarksInput.current.classList = 'hidden';
    secondsBar.current.classList = 'hidden';
    distanceBar.current.classList = 'block w-3/4';
    setTitle('Distance covered');
  };

  const recordSix = () => {
    distanceInput.current.classList = 'hidden';
    remarksInput.current.classList = 'block focus:outline-none w-full';
    effortInput.current.classList = 'hidden';
    fifthButtons.current.classList = 'hidden';
    sixthButtons.current.classList = 'flex bg-gray-100';
    distanceBar.current.classList = 'hidden';
    setTitle('Remarks');
  };

  const validateTwo = () => {
    const regexHours = /\b([0-9]|[12][0-4])\b/;
    if (!regexHours.test(hoursValue)) {
      toast.error('Enter value between 0 - 24');
    } else {
      recordThree();
    }
  };

  const validateThree = () => {
    const regexMinutes = /\b([0-9]|[1-5][0-9]|60)\b/;
    if (!regexMinutes.test(minutesValue)) {
      toast.error('Enter value between 0 - 60');
    } else {
      recordFour();
    }
  };

  const validateFour = () => {
    const regexSeconds = /\b([0-9]|[1-5][0-9]|60)\b/;
    if (!regexSeconds.test(secondsValue)) {
      toast.error('Enter value between 0 - 60');
    } else {
      recordFive();
    }
  };

  const validateFive = () => {
    const regexDistiance = /\b([1-9]|[1-9][0-9]|[1-9][0-9][0-9]|[1-9][0-9][0-9][0-9]|10000)\b/;
    if (!regexDistiance.test(distanceValue)) {
      toast.error('Enter value between 0 - 10k');
    } else {
      recordSix();
    }
  };

  return (
    <div className="text-center h-full">
      <div className="p-4 bg-sblue text-white font-sans w-full">
        <h1 className="text-2xl font-black">Record Sprint</h1>
      </div>
      <div className="p-4 border-b-2">
        <div>
          <h3 className="font-bold text-gray-600 font-sans">{title}</h3>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center space-y-4">

        <div className="flex flex-col items-center justify-center py-10 font-sans">
          <section ref={hourBar} className="hidden w-3/4">
            <CircularProgressbar
              value={hoursValue}
              text={`${hoursValue} h`}
              maxValue={24}
            />
          </section>
          <section ref={minuteBar} className="hidden w-3/4">
            <CircularProgressbar
              value={minutesValue}
              text={`${minutesValue} mins`}
              maxValue={60}
            />
          </section>
          <section ref={secondsBar} className="hidden w-3/4">
            <CircularProgressbar
              value={secondsValue}
              text={`${secondsValue} s`}
              maxValue={60}
            />
          </section>
          <section ref={distanceBar} className="hidden w-3/4">
            <CircularProgressbar
              value={distanceValue}
              text={`${distanceValue} m`}
              maxValue={targetValue}
            />
          </section>
        </div>

        <form onSubmit={onSubmit} className="space-y-10 absolute bottom-20 font-sans">
          <select
            ref={targetInput}
            size="2"
            type="number"
            name="target"
            className="focus:outline-none w-full"
            value={targetValue}
            onChange={(e) => setTarget(e.target.value)}
          >
            {selectTarget.map((target) => (
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
            className="hidden"
            value={hoursValue}
            onChange={(e) => setHours(e.target.value)}
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
            onChange={(e) => setMinutes(e.target.value)}
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
            onChange={(e) => setSeconds(e.target.value)}
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
            onChange={(e) => setDistance(e.target.value)}
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
            onChange={(e) => setRemarks(e.target.value)}
          />
          <input
            ref={effortInput}
            type="hidden"
            name="effort"
            className="hidden"
          />

          <div ref={firstButtons} className="bg-gray-100 w-full">
            <button
              type="button"
              className="px-10 py-3 bg-sgreen text-white w-full"
              onClick={() => recordTwo()}
            >
              Next
            </button>
          </div>

          <div ref={secondButtons} className="hidden">
            <button
              type="button"
              className="px-10 py-3 text-gray-600 w-full"
              onClick={() => recordOne()}
            >
              Prev
            </button>
            <button
              type="button"
              className="px-10 py-3 bg-sgreen text-white w-full"
              onClick={() => validateTwo()}
            >
              Next
            </button>
          </div>

          <div ref={thirdButtons} className="hidden">
            <button
              type="button"
              className="px-10 py-3 text-grey-600 w-full text-gray-600"
              onClick={() => recordTwo()}
            >
              Prev
            </button>
            <button
              type="button"
              className="px-10 py-3 bg-sgreen text-white w-full"
              onClick={() => validateThree()}
            >
              Next
            </button>
          </div>

          <div ref={fourthButtons} className="hidden">
            <button
              type="button"
              className="px-10 py-3 text-gray-600 w-full"
              onClick={() => recordThree()}
            >
              Prev
            </button>
            <button
              type="button"
              className="px-10 py-3 bg-sgreen text-white w-full"
              onClick={() => validateFour()}
            >
              Next
            </button>
          </div>

          <div ref={fifthButtons} className="hidden">
            <button
              type="button"
              className="px-10 py-3 text-gray-600 w-full"
              onClick={() => recordFour()}
            >
              Prev
            </button>
            <button
              type="button"
              className="px-10 py-3 bg-sgreen text-white w-full"
              onClick={() => validateFive()}
            >
              Next
            </button>
          </div>

          <div ref={sixthButtons} className="hidden">
            <button
              type="button"
              className="px-10 py-3 text-gray-600 w-full"
              onClick={() => recordFive()}
            >
              Prev
            </button>

            <button
              type="submit"
              className="px-10 py-3 bg-sgreen text-white w-full"
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
