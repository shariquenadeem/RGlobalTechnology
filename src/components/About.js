import React from 'react'

function About() {
  return (
   <section id="about">
      <div className="container" data-aos="fade-up">
        <div className="row">
          <div className="col-lg-6 about-img">
            <img src="assets/img/about-img.jpg" alt=""/>
          </div>

          <div className="col-lg-6 content">
            <h2>Lorem ipsum dolor sit amet, consectetur adipiscing</h2>
            <h3>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</h3>

            <ul>
              <li><i className="bi bi-check-circle"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
              <li><i className="bi bi-check-circle"></i> Duis aute irure dolor in reprehenderit in voluptate velit.</li>
              <li><i className="bi bi-check-circle"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.</li>
            </ul>

          </div>
        </div>
      </div>
    </section>
  )
}

export default About
