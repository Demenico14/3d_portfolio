/* eslint-disable react/jsx-key */
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import CTA from '../components/CTA'
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

      <div className='py-16'>
        <h3 className='subhead-text'>Certfications</h3>
        <div className='mt-5 flex flex-col gap-3 text-slate-500'>
          <p>
            I've Done Many Certifications , leveling up my skills and
            teaming up with smart people. Here's the rundown:
          </p>
        </div>

        <div className='mt-12 flex'>
          <VerticalTimeline>
            {Certifications.map((Certification) => (
              <VerticalTimelineElement
              key={Certification.name}
              date={Certification.date}
              icon={
                <div className='flex-justify-center items-center w-full h-full  '>
                  <img
                    src={Certification.icon}
                    alt= {Certification.name}
                    className='w-[110%] h-[101%] object-contain'
                  />
                </div>
              } 
              iconStyle={{ background: Certification.iconBg}}
              contentStyle={{
                borderBottom: "8px",
                borderStyle: "solid",
                borderBottomColor: Certification.iconBg,
                boxShadow: "none",
              }}
              >


                <div>
                  <h3 className='text-black text-xl font-poppins font-semibold'>
                    {Certification.name}
                  </h3>
                  <p className='text-black-500/50 font-medium font-base ' style={{margin:0}}>
                    {Certification.description}
                  </p>
                </div>
                
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
        </div>

        <hr className='border-slate-200' />

        <CTA />


      
    </section>
  );
};

export default About;
