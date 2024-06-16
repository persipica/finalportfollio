import React from 'react'

const Projects = () => {
  return (
    <section id="projects">
      <div className="projects__inner">
        <div className="projects__title">
          Projects<em>나의 프로젝트</em>
        </div>
        <div className="projects__wrap">
          <article className="projects__item p1">
            <span className="num">01.</span>
            <a
              href="https://github.com/persipica/portfolio"
              target="_blank"
              className="img"
              rel="noopener noreferrer"
            >
              <img src="img/KHSportfolio.png" alt="중간 프로젝트"></img>
            </a>
            <h3 className="title">중간고사 프로젝트</h3>
            <p className="desc">
              중간고사때 발표하였던 프로젝트 입니다. html, css, bootstrap,
              tailwindcss를 사용하여 제작하였습니다..
            </p>
            <a
              href="https://portfolio-ten-delta-88.vercel.app/project.html"
              target="_blank"
              className="site"
              rel="noopener noreferrer"
            >
              사이트 보기
            </a>
          </article>

          <article className="projects__item p2">
            <span className="num">02.</span>
            <a
              href="https://github.com/persipica/HCJDEMO"
              target="_blank"
              className="img"
              rel="noopener noreferrer"
            >
              <img src="img/HCJDEMO.png" alt="HCJDEMO"></img>
            </a>
            <h3 className="title">HCJDEMO</h3>
            <p className="desc">
              수업시간에 진행했던 HCJDEMO프로젝트를 CSS를 활용하여 완성한
              것입니다.
            </p>
            <a
              href="https://hcjdemo-phi.vercel.app/"
              target="_blank"
              className="site"
              rel="noopener noreferrer"
            >
              사이트 보기
            </a>
          </article>

          <article className="projects__item p3">
            <span className="num">03.</span>
            <a
              href="https://github.com/persipica/webprogram-main"
              target="_blank"
              className="img"
              rel="noopener noreferrer"
            >
              <img src="img/webblog.png" alt="WebBlog"></img>
            </a>
            <h3 className="title">WebBlog</h3>
            <p className="desc">수업시간에 진행했던 블로그실습 예제입니다.</p>
            <a
              href="https://webprogram-main.vercel.app/"
              target="_blank"
              className="site"
              rel="noopener noreferrer"
            >
              사이트 보기
            </a>
          </article>

          <article className="projects__item p4">
            <span className="num">04.</span>
            <a
              href="https://github.com/persipica/webprogram-main"
              target="_blank"
              className="img"
              rel="noopener noreferrer"
            >
              <img src="img/finalexam.png" alt="finalexam"></img>
            </a>
            <h3 className="title">finalexam</h3>
            <p className="desc">
              중간과제였던 KHSportfollio를 react를 활용하여 다시만든 것 입니다.
            </p>
            <a
              href="https://webprogram-main.vercel.app/"
              target="_blank"
              className="site"
              rel="noopener noreferrer"
            >
              사이트 보기
            </a>
          </article>
        </div>
      </div>
    </section>
  )
}

export default Projects
