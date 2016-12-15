import React, {Component} from 'react';
import Link from './Link';

export default class Talk extends Component {
  render() {
    const talkUrl   = this.props.data.urlVideo || this.props.data.urlPresentation || '';
    const talkTitle = this.props.data.title;

    const speakerUrl  = this.props.data.urlSpeaker || '';
    const speakerName = this.props.data.speaker;

    return (
      <div>
        <strong>
          <Link url={talkUrl} text={talkTitle}/>
        </strong>
        <br/>
        <i>
          <Link url={speakerUrl} text={speakerName}/>
        </i>
      </div>
    );
  }
}

Talk.propTypes = {
  title: React.PropTypes.string.isRequired,
  speaker: React.PropTypes.string.isRequired,

  urlVideo: React.PropTypes.string,
  urlPresentation: React.PropTypes.string,
  urlSpeaker: React.PropTypes.string
};

Talk.defaultProps = {
  title: '',
  speaker: ''
};
