import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { toast } from 'react-toastify';
import { fetchSprint } from '../actions';

const UpdateSprint = () => {
  const singleSprint = useSelector((state) => state.singleSprint.data);
  const [targetValue, setName] = useState(singleSprint[0].target);
  const [hoursValue, setHours] = useState(singleSprint[0].hours);
  const [minutesValue, setMinutes] = useState(singleSprint[0].minutes);
  const [secondsValue, setSeconds] = useState(singleSprint[0].seconds);
  const [distanceValue, setDistance] = useState(singleSprint[0].distance);
  const [remarksValue, setRemarks] = useState(singleSprint[0].remarks);

  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();
    const effortValue = ((distanceValue / targetValue) * 100);

    axios.put(
      `https://ancient-meadow-09395.herokuapp.com/api/v1/sprints/${singleSprint[0].id}`,
      {
        target: targetValue,
        hours: hoursValue,
        minutes: minutesValue,
        seconds: secondsValue,
        distance: distanceValue,
        remarks: remarksValue,
        effort: effortValue,
      },
    );

    dispatch(fetchSprint());
    toast.success(`You successfully updated ${targetValue}`);
  };

  return (
    <div className="h-screen pb-20">
      <div className="p-4 bg-sblue text-white font-sans w-full text-center">
        <h1 className="text-2xl font-black">Update Record</h1>
      </div>
      <section>
        <form
          onSubmit={onSubmit}
          className="font-bold flex flex-col px-16 space-y-1 pt-2 font-sans text-gray-400"
        >
          <div>
            <div>Target</div>
            <input
              type="number"
              name="target"
              placeholder="target"
              className="w-full"
              value={targetValue}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <div>Hours</div>
            <input
              type="number"
              name="hours"
              placeholder="hours"
              className="w-full"
              value={hoursValue}
              onChange={(e) => setHours(e.target.value)}
            />
          </div>
          <div>
            <div>Minutes</div>
            <input
              type="number"
              name="minutes"
              placeholder="minutes"
              className="w-full"
              value={minutesValue}
              onChange={(e) => setMinutes(e.target.value)}
            />
          </div>
          <div>
            <div>Seconds</div>
            <input
              type="number"
              name="seconds"
              placeholder="seconds"
              className="w-full"
              value={secondsValue}
              onChange={(e) => setSeconds(e.target.value)}
            />
          </div>
          <div>
            <div>Distance covered</div>
            <input
              type="number"
              name="distance"
              className="w-full"
              placeholder="distance"
              value={distanceValue}
              onChange={(e) => setDistance(e.target.value)}
            />
          </div>
          <div>
            <div>Remarks</div>
            <textarea
              name="remarks"
              placeholder="remarks"
              className="w-full"
              cols="20"
              rows="3"
              value={remarksValue}
              required
              onChange={(e) => setRemarks(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className=" bg-sgreen py-4 px-2 mt-5 rounded-md text-white"
          >
            Submit
          </button>
        </form>
      </section>
    </div>
  );
};

export default UpdateSprint;
