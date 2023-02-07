import React from 'react';
import { motion } from 'framer-motion';
import './WorkExperience.scss';
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
    <motion.div>
      <section id="Work-Experience" className="work-experience-container">
        <h2 className="work-experience-header">WORK EXPERIENCE</h2>
        <div className="work-experience-list-wrapper">
          {experienceList.map((ex) => {
            return (
              <div key={ex.id} className="single-experience">
                <p className="experience-info">
                  <span>{ex.companyName}</span>
                  <span className="text-soft">{ex.position}</span>
                  <span className="text-soft">{`${ex.startDate.month} ${ex.startDate.year} - ${ex.endDate.month} ${ex.endDate.year}`}</span>
                </p>
                <hr className="experience-divider" />
              </div>
            );
          })}
        </div>
      </section>
    </motion.div>
  );
};

export default WorkExperience;
