import React from 'react';
import { motion } from 'framer-motion';
const WorkExperience = () => {
  const experienceList = [
    {
      id: 1,
      companyName: 'The Grooker Group PCL',
      position: 'Full-Stack Developer Intern (Digital Assets)',
      startDate: {
        day: '05',
        month: 'June',
        year: '2023',
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
        remote: 'in-person',
      },
    },
    {
      id: 2,
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
      id: 3,
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
      id: 4,
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
      <section id="Work-Experience" className="p-4 ">
        <h2 className="mb-4 text-3xl font-bold">Work Experience</h2>
        <div>
          {experienceList.map((ex) => {
            return (
              <div key={ex.id} className="mb-4">
                <p className="text-lg font-medium md:grid md:grid-cols-3">
                  <span className=" block font-bold ">{ex.companyName}</span>
                  <span className="block font-medium text-torea-bay-400">
                    {ex.position}
                  </span>
                  <span className="block text-torea-bay-400">{`${ex.startDate.month} ${ex.startDate.year} - ${ex.endDate.month} ${ex.endDate.year}`}</span>
                </p>
                <hr className="border-gray-400 my-2 border" />
              </div>
            );
          })}
        </div>
      </section>
    </motion.div>
  );
};

export default WorkExperience;
