import { arrow } from '../assets/icons'
import { projects } from '../Constants'
import React from 'react'
import { Link } from 'react-router-dom'
import CTA from '../Components/CTA'

const Projects = () => {
  return (
    <section className='max-container'>
    <h1 className='head-text'>
      My <span className='blue-gradient_text font-semibold drop-shadow'>Projects</span>
    </h1>
    <div className='mt-5 flex flex-col gap-3 text-slate-500 '>
      <p>
        i have embarked on a journey to learn and grow as a developer. here are some of the projects i have worked on. 
      </p>
    </div>
    <div className='flex flex-wrap my-20 gap-16'>
      {projects.map((project) => (
        <div className='lg:w-[400px] w-full' key={project.name}>
          <div className='block-container w-12 h-12'>
            <div className={`btn-back rounded-xl ${project.theme}`}/>
            <div className='btn-front rounded-xl flex justify-center items-center'>
              <img 
              src={project.iconUrl} 
              alt="project-icon" 
              className='w-1/2 h-1/2 object-contain'/>
            </div>
          </div>
          <div className='mt-5 flex flex-col'>
            <h4 className='text-2xl font-poppins font-semibold'>
              {project.name}
            </h4>
            <p className='text-slate-500 mt-2'>
              {project.description}
            </p>
            <div className='mt-5 flex items-center gap-2 font-poppins'>
              <Link
                to={project.link}
                target='_blank'
                rel = 'noopener noreferrer'
                className='font-semibold text-blue-500 hover:text-blue-600'>
              Live Link
              </Link>
              <img 
                src={arrow} 
                alt="arrow"
                className='font-semibold text-blue-600'
              />
            </div>
          </div>
        </div>
      ))}
    </div>
    <hr className='border-slate-200'/>
    <CTA/>
  </section>
  )
}

export default Projects
