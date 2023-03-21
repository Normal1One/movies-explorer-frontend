import { Link } from 'react-router-dom'
import './Portfolio.css'

function Portfolio() {
  return (
    <section className='portfolio'>
      <p className='portfolio__title'>Портфолио</p>
      <ul className='portfolio__projects'>
        <li className='portfolio__link'>
          <Link
            target='_blank'
            to='https://github.com/Normal1One/mesto'
            className='portfolio__project'
            rel='noreferrer'
          >
            <p className='portfolio__heading'>Статичный сайт</p>
            <div className='portfolio__link-image'></div>
          </Link>
          <div className='portfolio__projects-line'></div>
        </li>
        <li className='portfolio__link'>
          <Link
            target='_blank'
            to='https://github.com/Normal1One/russian-travel'
            className='portfolio__project'
            rel='noreferrer'
          >
            <p className='portfolio__heading'>Адаптивный сайт</p>
            <div className='portfolio__link-image'></div>
          </Link>
          <div className='portfolio__projects-line'></div>
        </li>
        <li className='portfolio__link'>
          <Link
            target='_blank'
            to='https://github.com/Normal1One/react-mesto-api-full'
            className='portfolio__project'
            rel='noreferrer'
          >
            <p className='portfolio__heading'>Одностраничное приложение</p>
            <div className='portfolio__link-image'></div>
          </Link>
          <div className='portfolio__projects-line'></div>
        </li>
      </ul>
    </section>
  )
}

export default Portfolio
