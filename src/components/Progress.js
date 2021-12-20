import React from 'react';
import { useSelector } from 'react-redux';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const Progress = () => {
  const sprints = useSelector((state) => state.sprint.data);
  const totalDistance = sprints.reduce((a, b) => ({
    distance: a.distance + b.distance,
  }));
  const totalHours = sprints.reduce((a, b) => ({ hours: a.hours + b.hours }));
  const totalMinutes = sprints.reduce((a, b) => ({
    minutes: a.minutes + b.minutes,
  }));
  const totalSeconds = sprints.reduce((a, b) => ({
    seconds: a.seconds + b.seconds,
  }));
  const distanceResult = Object.keys(totalDistance).map((key) => [
    totalDistance[key],
  ]);
  const hoursResult = Object.keys(totalHours).map((key) => [totalHours[key]]);
  const minutesResult = Object.keys(totalMinutes).map((key) => [
    totalMinutes[key],
  ]);
  const secondsResult = Object.keys(totalSeconds).map((key) => [
    totalSeconds[key],
  ]);

  return (
    <div className="h-screen">
      <div className="p-4 bg-sblue text-white font-sans w-full text-center">
        <h1 className="text-2xl font-black">Progress</h1>
      </div>
      <section className="bg-gray-300 bg-opacity-30 px-5 h-full space-y-8 pt-10">
        <div className="px-6">
          <CircularProgressbar
            value={distanceResult}
            text={`${distanceResult} m`}
            styles={buildStyles({
              textSize: '14px',
              pathTransitionDuration: 2,
              textColor: '#10b981',
              trailColor: '#d7d7d7',
            })}
          />
        </div>
        <div className="bg-white text-black w-full shadow-md flex flex-col items-center justify-center py-5">
          <h2 className="text-xs text-gray-500">Time Total</h2>
          <div className="text-green-500 text-2xl font-mono">
            {hoursResult}
            :
            {minutesResult}
            :
            {secondsResult}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Progress;
