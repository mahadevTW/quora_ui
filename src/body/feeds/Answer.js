import React from 'react'
import Button from 'react-bootstrap/lib/Button'
import Badge from 'react-bootstrap/lib/Badge'

export default class Answer extends React.Component {
  constructor(props) {
    super(props);
    this.handleUpVoteClick = this.handleUpVoteClick.bind(this);
    this.handleDownVoteClick = this.handleDownVoteClick.bind(this);
  }

  handleUpVoteClick() {
  }

  handleDownVoteClick() {

  }

  render() {
    let answer = this.props.answer;
    return <div>
      <p>{answer.answerString}<br/>
        &nbsp;&nbsp;<Button
          onClick={() => {this.handleUpVoteClick()}}>Upvotes<Badge>{answer.upvoteCount}</Badge></Button>
        &nbsp;&nbsp;<Button onClick={this.handleDownVoteClick()}>Downvotes<Badge>{answer.downvoteCount}</Badge></Button>
      </p>
    </div>
  }
}