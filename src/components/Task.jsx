import React, { useState, useEffect } from 'react';
import CoinBalance from './CoinBalance';
import { task as initialTasks } from '../constant';

const Task = ({ count, setCount }) => {
  const [tasks, setTasks] = useState(initialTasks);

  useEffect(() => {
    const timers = tasks.map((task) => {
      if (task.countdown !== null && task.countdown > 0) {
        return setInterval(() => {
          setTasks((prevTasks) =>
            prevTasks.map((t) =>
              t.id === task.id ? { ...t, countdown: t.countdown - 1 } : t
            )
          );
        }, 1000);
      }
      return null;
    });

    return () => timers.forEach((timer) => timer && clearInterval(timer));
  }, [tasks]);

  useEffect(() => {
    tasks.forEach((task) => {
      if (task.isCompleted && !task.rewarded) {
        setCount((prevCount) => prevCount + task.reward);
        setTasks((prevTasks) =>
          prevTasks
            .map((t) =>
              t.id === task.id ? { ...t, rewarded: true } : t
            )
            .filter((t) => !t.isCompleted || !t.rewarded)
        );
      }
    });
  }, [tasks, setCount]);

  const handleLinkClick = (id) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id
          ? { ...task, isLinkClicked: true, countdown: 5 }
          : task
      )
    );
    return false;
  };

  const handleVerification = (id) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id && task.countdown === 0 && !task.rewarded
          ? { ...task, isCompleted: true }
          : task
      )
    );
  };

  return (
    <>
      <div className="mt-10">
        <h2 className="text-center text-2xl">Your Share Balance</h2>
        <CoinBalance count={count} />
      </div>
      {tasks.map((task, index) => (
        <div
          key={index}
          className="mt-10 max-w-md mx-auto bg-white shadow-md rounded-lg overflow-hidden md:max-w-2xl"
        >
          <div className="md:flex">
            <div className="w-full p-4">
              <h2 className="text-lg font-semibold text-gray-800">{task.title}</h2>
              <p className="mt-2 text-gray-600">🍬{task.reward}</p>
              {!task.isLinkClicked && (
                <a
                  href={task.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => handleLinkClick(task.id)}
                  className="text-blue-500 hover:underline mt-2 inline-block"
                >
                  {task.linkText}
                </a>
              )}
              <div className="mt-4">
                {task.countdown !== null && task.countdown > 0 && (
                  <p className="text-red-500">Please wait {task.countdown} seconds...</p>
                )}
                {task.countdown === 0 && !task.isCompleted && (
                  <button
                    onClick={() => handleVerification(task.id)}
                    className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-700"
                  >
                    Verify Completion
                  </button>
                )}
                {task.isCompleted && (
                  <p className="text-green-500">
                    Task completed! You have earned {task.reward} coins. ✔️
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Task;
