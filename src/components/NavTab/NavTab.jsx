import { HashLink } from 'react-router-hash-link'
import './NavTab.css'

function NavTab() {
  return (
    <section className='navTab'>
      <HashLink smooth to='#about-project' className='navTab__link'>
        О проекте
      </HashLink>
      <HashLink smooth to='#techs' className='navTab__link'>
        Технологии
      </HashLink>
      <HashLink smooth to='#about-me' className='navTab__link'>
        Студент
      </HashLink>
    </section>
  )
}

export default NavTab
