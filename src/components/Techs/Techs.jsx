import './Techs.css'

function Techs() {
  return (
    <section className='techs'>
      <p className='techs__title' id='techs'>
        Технологии
      </p>
      <div className='techs__line'></div>
      <p className='techs__heading'>7 технологий</p>
      <p className='techs__text'>
        На курсе веб-разработки мы освоили технологии, которые применили в
        дипломном проекте.
      </p>
      <div className='techs__cards'>
        <p className='techs__card'>HTML</p>
        <p className='techs__card'>CSS</p>
        <p className='techs__card'>JS</p>
        <p className='techs__card'>React</p>
        <p className='techs__card'>Git</p>
        <p className='techs__card'>Express.js</p>
        <p className='techs__card'>mongoDB</p>
      </div>
    </section>
  )
}

export default Techs
