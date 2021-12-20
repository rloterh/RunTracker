import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { CircularProgressbar } from 'react-circular-progressbar';
import { Link } from 'react-router-dom';
import dateFormat from 'dateformat';
import { fetchsingleSprint } from '../actions';

const SprintList = () => {
  const sprints = useSelector((state) => state.sprint.data);
  const dispatch = useDispatch();

  return (
    <div className="h-full pb-16">
      <div className="p-4 font-black bg-sblue text-white font-sans w-full text-center">
        <h1 className="text-2xl">Achievements</h1>
      </div>
      <section>
        {sprints.map((el) => (
          <Link
            onClick={() => dispatch(fetchsingleSprint(el))}
            to={`/sprints/${el.id}`}
            key={el.id}
          >
            <div className="py-4 px-5 bg-gray-300 bg-opacity-30 border-b-2 border-t-2 flex justify-between items-center mb-4">
              <div>
                <h2 className="font-sans text-slate-500">
                  <span className="font-bold ">{el.target}</span>
                  <span>m challenge</span>
                </h2>
                <p className="text-xs">
                  {dateFormat(el.created_at, 'yyyy-mmm-dd')}
                </p>
              </div>
              <div className="font-mono">
                <span className="p-1">run</span>
                <span className="text-blue-400 text-lg font-bold">{el.distance}</span>
                <span className=" text-slate-300 text-lg">m</span>
              </div>
              <div className="w-12">
                <CircularProgressbar
                  value={el.effort}
                  text={`${el.effort} %`}
                  maxValue={100}
                />
              </div>
            </div>
          </Link>
        ))}
      </section>
    </div>
  );
};

export default SprintList;
