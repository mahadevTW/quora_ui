import React from 'react'
import './feeds.css'
import Answer from './Answer'

import Panel from 'react-bootstrap/lib/Panel'
import QAnswer from "./QAnswer";


export default class Feeds extends React.Component {
  render() {
    const feeds = this.props.feeds;
    const questions = feeds.questions;

    return (
      <div className="feeds">
        {
          questions.map((question, index) => {
            return <div key={index} className="feed">
              <Panel>
                <Panel.Heading>
                  <Panel.Title componentClass="h3">{question.questionString}</Panel.Title>
                </Panel.Heading>
                <Panel.Body>{this.getAnswersForQuestion(question)}</Panel.Body>
                <Panel.Footer><QAnswer questionId={question.questionId}/></Panel.Footer>
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
      console.log()
      return <Answer key={index} answer={answer}/>
    })
  }
}

