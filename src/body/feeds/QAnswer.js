import React from 'react'
import Form from 'react-bootstrap/lib/Form'
import FormGroup from 'react-bootstrap/lib/FormGroup'
import FormControl from 'react-bootstrap/lib/FormControl'
import Button from 'react-bootstrap/lib/Button'

export default class QAnswer extends React.Component {
  constructor() {
    super();
    this.handleSubmitClick = this.handleSubmitClick.bind(this);
  }

  handleSubmitClick() {
    const qId = this.props.questionId;
    alert(this.answerText.value + " QID : " + qId)
  }

  render() {
    return (
      <Form inline>
        <FormGroup>
          <FormControl inputRef={ref => this.answerText = ref} type="text" placeholder="Type your answer"/>
        </FormGroup>&nbsp;
        <Button type="submit" onClick={this.handleSubmitClick}>Submit</Button>
      </Form>
    )
  }
}