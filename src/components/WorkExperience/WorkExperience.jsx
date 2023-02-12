import React from 'react';
import { motion } from 'framer-motion';
const WorkExperience = () => {
  const experienceList = [
    {
      id: 1,
      companyName: 'Vendi, TAO BIN',
      position: 'Front-End Engineer Intern',
      startDate: {
        day: '05',
        month: 'July',
        year: '2022',
      },
      endDate: {
        day: '15',
        month: 'August',
        year: '2022',
      },
      location: {
        country: 'Thailand',
        city: 'Bangkok',
        state: '',
        remote: 'hybrid',
      },
    },
    {
      id: 2,
      companyName: 'AT&T',
      position: 'Summer Learning Academy Extern',
      startDate: {
        day: '01',
        month: 'June',
        year: '2021',
      },
      endDate: {
        day: '01',
        month: 'July',
        year: '2021',
      },
      location: {
        country: 'USA',
        city: 'TX',
        state: '',
        remote: 'remote',
      },
    },
    {
      id: 3,
      companyName: 'Gaysorn Property Co. Ltd.',
      position: 'Finance Intern',
      startDate: {
        day: '01',
        month: 'August',
        year: '2020',
      },
      endDate: {
        day: '31',
        month: 'December',
        year: '2020',
      },
      location: {
        country: 'Thailand',
        city: 'Bangkok',
        state: '',
        remote: 'on-site',
      },
    },
  ];
  return (
    <motion.div
      initial={{ x: '-100vw' }}
      animate={{ x: 0 }}
      transition={{
        duration: 1,
      }}
    >
      <section id="Work-Experience" className="bg-white p-4 ">
        <h2 className="text-3xl font-bold mb-4">WORK EXPERIENCE</h2>
        <div>
          {experienceList.map((ex) => {
            return (
              <div key={ex.id} className="mb-4">
                <p className="text-lg font-medium md:grid md:grid-cols-3">
                  <span className="font-medium block text-gray-900 ">
                    {ex.companyName}
                  </span>
                  <span className="font-medium block text-gray-600">
                    {ex.position}
                  </span>
                  <span className="text-gray-600 block">{`${ex.startDate.month} ${ex.startDate.year} - ${ex.endDate.month} ${ex.endDate.year}`}</span>
                </p>
                <hr className="my-2 border border-gray-400" />
              </div>
            );
          })}
        </div>
      </section>
    </motion.div>
  );
};

export default WorkExperience;
