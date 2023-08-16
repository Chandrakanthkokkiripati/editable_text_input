import {Component} from 'react'

import './index.css'

class Home extends Component {
  state = {
    editTextShow: false,
    text: '',
  }

  onChangeText = e => {
    this.setState({text: e.target.value})
  }

  onSaveText = () => {
    this.setState({editTextShow: true})
  }

  onEditText = () => {
    this.setState({editTextShow: false})
  }

  renderSaveTextField = () => {
    const {text} = this.state

    return (
      <div className="input-container">
        <input type="text" value={text} onChange={this.onChangeText} />
        <button className="but" onClick={this.onSaveText} type="button">
          Save
        </button>
      </div>
    )
  }

  renderEditText = () => {
    const {text} = this.state

    return (
      <div className="edit-container">
        <p>{text}</p>
        <button className="but" onClick={this.onEditText} type="button">
          Edit
        </button>
      </div>
    )
  }

  render() {
    const {editTextShow} = this.state

    return (
      <div className="app-container">
        <div className="text-container">
          <h1>Editable Text Input</h1>
          {!editTextShow && this.renderSaveTextField()}
          {editTextShow && this.renderEditText()}
        </div>
      </div>
    )
  }
}

export default Home
