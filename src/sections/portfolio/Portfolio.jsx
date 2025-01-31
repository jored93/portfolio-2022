import React from 'react'
import './portfolio.css'
import portfolio from '../../constants/portfolio.json'
import { PROJECTS_DATA } from './data'

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>-</h5>
      <h2>Portfolio</h2>

      <div className='container portfolio__container'>
        {
          PROJECTS_DATA.map(({ id, tech, imageAlt, tittle, description, github, demo }) => {
            return (
              <article className='portfolio__item' key={`${tittle}-${id}`}>
                <div className='portfolio__item-image'>
                  {
                    tech.map(({ name, icon }) => {
                      const IconComponent = icon
                      return (
                        <IconComponent className='portfolio__item-tech' />
                      )
                    })
                  }
                </div>
                <h3>{tittle}</h3>
                {/* <h6>{description}</h6> */}
                <div className='portfolio__item-cta'>
                  <a href={github} className='btn' target='_blank' rel='noreferrer'><i className="bi bi-github"></i></a>
                  {/* <a href={demo} className='btn btn-primary' target='_blank' rel='noreferrer'><i className="bi bi-globe"></i></a> */}
                </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio