/* eslint-disable react/jsx-key */
import React from 'react';
import { skills, Certifications } from '../constants';

const About = () => {
  return (
    <section className='max-container'>
      <h1 className='head-text'>
        Hello, I'm <span className='blue-gradient_text font-semibold drop-shadow'>Dominic</span> 🦦
      </h1>

      <div>
        <p className='mt-5 flex flex-col gap-3 text-slate-500'>
          I am a student currently studying Computer Science with a focus on Machine Learning and Artificial Intelligence.
          I am passionate about how machines can learn from data and make intelligent decisions, and I've explored various aspects of AI through my coursework and projects.
        </p>
      </div>

      <div className='py-10 flex flex-col'>
        <h3 className='subhead-text'>My Skills</h3>
        <div className='mt-16 flex flex-wrap gap-12'>
          {skills.map((skill, ) => (
            <div className='block-container w-20 h-20' >
              <div  className='btn-back rounded-xl'/>
              <div className='btn-front rounded-xl flex justify-center items-center'>
              <img
                src={skill.imageUrl}
                alt={skill.name}
                className='w-1/2 h-1/2 object-contain'
              />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className='py-10 flex flex-col'>
  <h3 className='subhead-text'>My Certifications</h3>
  <div className='mt-16 grid grid-cols-1 md:grid-cols-2 gap-12'>
    {Certifications.map((certification) => (
      <div key={certification.name} className='flex items-center'>
        <img
          src={certification.imageUrl}
          alt={certification.name}
          className='w-20 h-20 rounded-xl mr-4 object-contain'
        />
        <div className='text-left ml-4'>
          <h4>{certification.name}</h4>
          <p>{certification.description}</p>
        </div>
      </div>
    ))}
  </div>
</div>




      
    </section>
  );
};

export default About;
