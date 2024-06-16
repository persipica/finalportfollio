import React from 'react'

const Teamprojects = () => {
  return (
    <section id="teamprojects">
      <div className="teamprojects__inner">
        <div className="teamprojects__title">
          TeamProjects<em>팀 프로젝트</em>
        </div>
        <div className="teamprojects__wrap">
          <article className="teamprojects__item p1">
            <span className="num">01.</span>
            <a
              href="https://github.com/persipica/teamP"
              target="_blank"
              className="img"
              rel="noopener noreferrer"
            >
              <img src="img/teamproject1.png" alt="팀 프로젝트"></img>
            </a>
            <h3 className="title">중간고사 프로젝트</h3>
            <p className="desc">
              웹 프로그래밍 중간 실습 팀프로젝트 과제입니다. 팀원들과 함께
              웹사이트 구축에 필요한 기술에 대해 설명하는 페이지를 만들고자
              하였습니다.
            </p>
            <a
              href="https://team-p-two.vercel.app/html.html"
              target="_blank"
              className="site"
              rel="noopener noreferrer"
            >
              사이트 보기
            </a>
          </article>

          <article className="teamprojects__item p2">
            <span className="num">02.</span>
            <a
              href="https://github.com/persipica/HCJDEMO"
              target="_blank"
              className="img"
              rel="noopener noreferrer"
            >
              <img src="img/HCJDEMO.png" alt="HCJDEMO"></img>
            </a>
            <h3 className="title">기말고사 프로젝트</h3>
            <p className="desc">
              중간 고사때 발표하였던 팀프로젝트를 더욱 개선하여 완성한 기말
              프로젝트입니다.
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
        </div>
      </div>
    </section>
  )
}

export default Teamprojects
