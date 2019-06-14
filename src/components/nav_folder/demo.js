import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import ModalVideo from 'react-modal-video';
import './tutorial_video.scss';



class DemoRun extends Component {

  constructor () {
    super()
    this.state = {
      isOpen: false
    }
    this.openModal = this.openModal.bind(this)
  }

  openModal () {
    this.setState({isOpen: true})
  }

  render () {
    return (
      <div>
        <span className="spanPosition oi questionMark" data-glyph="question-mark" onClick={this.openModal}></span>
        <ModalVideo channel='youtube' isOpen={this.state.isOpen} videoId='dUAV1j9yvRE' onClose={() => this.setState({isOpen: false})} />
      </div>
    )
  }
}

export default DemoRun;
