import React from 'react';
import { useSelector } from 'react-redux';
import dateFormat from 'dateformat';
import { Link } from 'react-router-dom';

const SprintList = () => {
  const singleSprint = useSelector((state) => state.singleSprint.data);
  const title = singleSprint[0].target;

  return (
    <div className="h-screen pb-20">
      <div className="p-4 bg-sblue text-white font-sans w-full text-center">
        <h1 className="text-2xl font-black">
          {title}
          <span> metres challenge record</span>
        </h1>
      </div>
      <section className="mx-6 text-center pt-10">
        {singleSprint.map((el) => (
          <div className="space-y-6" key={Math.random().toString(36).substr(2, 9)}>
            <div
              className="py-6 px-5 bg-gray-300 bg-opacity-30 relative"
            >
              <div className="text-xs text-sgray font-sans absolute top-2 left-2">
                Distance covered
              </div>
              <div className="font-sans text-green-700 text-2xl">
                <div>
                  <span>{el.distance}</span>
                  <span className="pl-1">metres</span>
                </div>
              </div>
            </div>
            <div className="py-6 px-5 bg-gray-300 bg-opacity-30 relative">
              <div className="text-xs text-sgray font-sans absolute top-2 left-2">
                Time
              </div>
              <div className="font-mono text-red-700 text-2xl">
                <div>
                  <span>{el.hours}</span>
                  :
                  <span>{el.minutes}</span>
                  :
                  <span>{el.seconds}</span>
                </div>
              </div>
            </div>
            <div className="py-6 px-5 bg-gray-300 bg-opacity-30 relative">
              <div className="text-xs text-sgray font-sans absolute top-2 left-2">
                Remarks
              </div>
              <div className="font-sans text-black text-base">
                <div>
                  <p>{el.remarks}</p>
                </div>
              </div>
            </div>
            <div className="py-6 px-5 bg-gray-300 bg-opacity-30 relative">
              <div className="text-xs text-sgray font-sans absolute top-2 left-2">
                Date
              </div>
              <div className="font-mono text-black text-lg">
                <div>{dateFormat(el.created_at, 'yyyy-mmm-dd')}</div>
              </div>
            </div>
            <Link to={`/sprints/${el.id}/edit`}>
              <button type="button" className="rounded-md w-full py-4 px-2 mt-5 bg-sgreen hover:bg-sblue hover:text-white">EDIT</button>
            </Link>
          </div>
        ))}
      </section>
    </div>
  );
};

export default SprintList;
