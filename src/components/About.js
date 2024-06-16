import React from 'react'

const About = () => {
  return (
    <section id="about">
      <div className="about__inner">
        <div className="about__title">
          About<em>ME</em>
        </div>

        <wrap className="about__wrap">
          <div>
            <img className="about__img" src="img/man.png" alt="man"></img>
          </div>
          <contextwrap className="about__text">
            <ul style={{ padding: '0px' }}>
              <li>
                <span>이름 : </span>
                <span>강희수</span>
              </li>
              <li>
                <span>이메일 : </span>
                <span>likekhs0107@naver.com</span>
              </li>
              <li>
                <span>Skill : </span>
                <span>HTML, CSS, React</span>
              </li>
              <li>
                <span>중부대학교 </span>
                <span>정보보호학과</span>
              </li>
            </ul>
          </contextwrap>
        </wrap>
        <script src="script.js"></script>
      </div>
    </section>
  )
}

export default About
