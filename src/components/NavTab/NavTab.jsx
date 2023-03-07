import './NavTab.css'

function NavTab() {
  return (
    <section className='navTab'>
      <a href='#about-project' className='navTab__link'>
        О проекте
      </a>
      <a href='#techs' className='navTab__link'>
        Технологии
      </a>
      <a href='#about-me' className='navTab__link'>
        Студент
      </a>
    </section>
  )
}

export default NavTab
