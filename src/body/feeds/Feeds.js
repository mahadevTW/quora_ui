import React from 'react'
import './feeds.css'
import Badge from 'react-bootstrap/lib/Badge'
// import Jumbotron from 'react-bootstrap/lib/Jumbotron'
import Panel from 'react-bootstrap/lib/Panel'


export default class Feeds extends React.Component {
  render() {
    const feeds = this.props.feeds;
    const questions = feeds.questions;
    return (
      <div className="feeds">
        {
          questions.map((question, index) => {
            return <div key={index}className="feed">
              {/*<center>*/}
                {/*<h3>{question.questionString}</h3>*/}
                {/*{this.getAnswersForQuestion(question)}*/}
              {/*</center>*/}
              <Panel>
                <Panel.Heading>
                  <Panel.Title componentClass="h3">{question.questionString}</Panel.Title>
                </Panel.Heading>
                <Panel.Body>{this.getAnswersForQuestion(question)}</Panel.Body>
              </Panel>
            </div>
          })
        }
      </div>
    );
  }

  getAnswersForQuestion(question) {
    var answers = question.answers;
    return answers.map((answer, index) => {
      return <div key={index}>
        <p> {index + 1} -> {answer.answerString}<br/>
          &nbsp;&nbsp;Upvotes<Badge>{answer.upvoteCount}</Badge><br/>
          &nbsp;&nbsp;Downvotes<Badge>{answer.downvoteCount}</Badge>
        </p>
      </div>
    })
  }
}

