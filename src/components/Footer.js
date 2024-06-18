import React from 'react'
import Twittler from './Twittler'

const footerText = [
  {
    title: 'tistory',
    desc: '운영중인 티스토리 블로그입니다.',
    link: 'https://vivat0107.tistory.com/',
  },
  {
    title: 'github',
    desc: '저의 깃허브 주소입니다.',
    link: 'https://github.com/persipica',
  },
  {
    title: 'blog',
    desc: '운영중인 네이버 블로그입니다.',
    link: 'https://blog.naver.com/likekhs0107',
  },
]

const Footer = () => {
  return (
    <footer id="footer" role="contentinfo">
      <div className="footer__inner">
        <div className="footer__img">
          <img src="/img/footerimg.jpg" alt="하단 배너 이미지" />
        </div>
        <div className="footer__text">
          <span>webprogramming</span>
          <span>vivat</span>
        </div>
        <div className="footer__info">
          <div className="left">
            <div className="title">
              <a href="/">sign up</a>
            </div>
            <Twittler />
          </div>
          <div className="right">
            <h3>social</h3>
            <ul>
              {footerText.map((footer, key) => (
                <li key={key}>
                  <a href={footer.link}>{footer.title}</a>
                  <em>{footer.desc}</em>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="footer__right">© 2024 KHSPortFollio</div>
      </div>
    </footer>
  )
}

export default Footer
