import React, { useState, useEffect } from 'react';
import CoinBalance from './CoinBalance';
import Modal from './Modal';

const Boost = ({ count }) => {
  const initialBoosters = {
    'Tapping Guru': 3,
    'Full Tank': 3,
    'Boost x2': 3,
    'Multitap': 3,
    'Energy Limit': 3,
  };

  const [boosters, setBoosters] = useState(initialBoosters);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedBooster, setSelectedBooster] = useState(null);

  useEffect(() => {
    const savedBoosters = JSON.parse(localStorage.getItem('boosters'));
    const lastResetTime = localStorage.getItem('lastResetTime');

    if (savedBoosters && lastResetTime) {
      const now = new Date().getTime();
      const timeDiff = now - parseInt(lastResetTime, 10);

      if (timeDiff < 24 * 60 * 60 * 1000) {
        setBoosters(savedBoosters);
      } else {
        localStorage.setItem('boosters', JSON.stringify(initialBoosters));
        localStorage.setItem('lastResetTime', now.toString());
      }
    } else {
      localStorage.setItem('boosters', JSON.stringify(initialBoosters));
      localStorage.setItem('lastResetTime', new Date().getTime().toString());
    }
  }, []);

  const handleUseBooster = () => {
    if (boosters[selectedBooster] > 0) {
      const updatedBoosters = {
        ...boosters,
        [selectedBooster]: boosters[selectedBooster] - 1,
      };
      setBoosters(updatedBoosters);
      localStorage.setItem('boosters', JSON.stringify(updatedBoosters));
      console.log(`Booster "${selectedBooster}" used! Effect applied to the home app.`);
    } else {
      console.log(`No uses left for "${selectedBooster}".`);
    }
    setIsModalOpen(false);
  };

  const openModal = (booster) => {
    setSelectedBooster(booster);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedBooster(null);
  };

  return (
    <>
      <div className="mt-10">
        <h2 className="text-center text-2xl">Your Share Balance</h2>
        <CoinBalance count={count} />
      </div>

      <div className="mt-5">
        <div>
          <h2 className="text-2xl text-center ml-4">Your daily boosters</h2>
        </div>

        <div className="flex justify-center gap-5 mt-4">
          <div className="p-4 rounded-lg shadow-md flex border-2" onClick={() => openModal('Tapping Guru')}>
            <div>
              <h1 className="text-5xl">🔥</h1>
            </div>
            <div>
              <h2 className="text-[16px] items-start mb-2">Tapping Guru</h2>
              <p className="mb-4">{boosters['Tapping Guru']}/3</p>
            </div>
          </div>

          <div className="p-4 rounded-lg shadow-md flex border-2" onClick={() => openModal('Full Tank')}>
            <div>
              <h1 className="text-5xl">⚡</h1>
            </div>
            <div>
              <h2 className="text-[16px] mb-2">Full Tank</h2>
              <p className="mb-4">{boosters['Full Tank']}/3</p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-2xl ml-4 mt-5">Boosters</h2>
      </div>

      <div className="p-4 rounded-lg shadow-md mt-3 mb-3 flex border-2" onClick={() => openModal('Boost x2')}>
        <div>
          <h1 className="text-5xl">⚡</h1>
        </div>
        <div>
          <h2 className="text-xl mb-2">Boost x2</h2>
          <p className="mb-4">{boosters['Boost x2']}/3</p>
        </div>
      </div>

      <div className="p-4 rounded-lg shadow-md flex mb-3 border-2" onClick={() => openModal('Multitap')}>
        <div>
          <h1 className="text-5xl">⚡</h1>
        </div>
        <div>
          <h2 className="text-xl mb-2">Multitap</h2>
          <p className="mb-4">{boosters['Multitap']}/3</p>
        </div>
      </div>

      <div className="p-4 rounded-lg shadow-md flex mb-3 border-2" onClick={() => openModal('Energy Limit')}>
        <div>
          <h1 className="text-5xl">⚡</h1>
        </div>
        <div>
          <h2 className="text-xl mb-2">Energy Limit</h2>
          <p className="mb-4">{boosters['Energy Limit']}/3</p>
        </div>
      </div>

      <Modal isOpen={isModalOpen} onClose={closeModal} onConfirm={handleUseBooster} />
    </>
  );
};

export default Boost;
