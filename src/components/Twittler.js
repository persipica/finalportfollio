import React from 'react'
import SingleTweet from './SingleTweet'
import './style.css'

class Twittler extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      tweets: [
        {
          uuid: 1,
          writer: 'kang',
          date: '2024-06-10',
          content: 'hi',
        },
        {
          uuid: 2,
          writer: 'kim',
          date: '2024-06-18',
          content: 'hello',
        },
      ],
    }
    this.addTweet = this.addTweet.bind(this)
  }
  addTweet() {
    let value = document.querySelector('#new-tweet-content').value
    this.setState({
      tweets: [
        ...this.state.tweets,
        {
          uuid: this.state.tweets.length + 1,
          writer: 'kang',
          date: new Date().toISOString().slice(0, 10),
          content: value,
        },
      ],
    })
  }
  render() {
    return (
      <div id="root">
        <div>
          <div>작성자 : kang</div>
          <div id="writitng-area">
            <textarea id="new-tweet-content"></textarea>
            <button id="submit-new-tweet" onClick={this.addTweet}>
              댓글 작성
            </button>
          </div>
          <ul id="tweets">
            {this.state.tweets.map((tweet) => {
              return <SingleTweet key={tweet.uuid} tweet={tweet} />
            })}
          </ul>
        </div>
      </div>
    )
  }
}

export default Twittler
