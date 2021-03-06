import React from 'react'
import send from '../images/inf.png'
import { addNewMessage } from '../action/conversation'

export default class Chat extends React.Component {
  constructor() {
    super()
    this.state = {
      newMessage : '',
    }
  }

  onChangeText(e) {
    this.setState({newMessage: e.target.value})
    this.props.getNewMessage(e.target.value)
  }

  sendNewMessage() {
    this.props.dispatch(addNewMessage(this.state.newMessage))
    this.setState({newMessage: ''})
  }
  render () {
    console.log('props', this.props)
    return (
        <div className='footer'>
          <input className="my-input1"
            placeholder='write a message...'
            value = {this.state.newMessage}
            onChange = {(e) => this.onChangeText(e)} />
          <img
            src={send}
            onClick={() => this.sendNewMessage()}
            style={{width: '40px', cursor: 'pointer',marginRight:'100px'}} />
        </div>
    )
  }
}