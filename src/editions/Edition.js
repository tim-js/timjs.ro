import React, {Component} from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import Talk from './Talk';
import Link from './Link';

import './edition.css';

export default class Edition extends Component {
  constructor() {
    super(...arguments);
    this.state = {
      displayTalks: true
    };
  }

  toggleTalksEvent(event) {
    this.toggleTalks( event.target.checked );
  }

  toggleTalks(value) {
    this.setState({
      displayTalks: value
    });
  }

  render() {
    let talksContent, talksWrapper;

    if (this.state.displayTalks && this.props.data.talks) {
      talksContent = this._getTalksContent();
    }

    if (this.props.data.talks) {
      talksWrapper = this._getTalksWrapper(talksContent);
    }

    return (
      <li className="edition">
        <h2><Link url={this.props.data.url} text={this.props.data.name} /></h2>

        <small>{this.props.data.date} at {this.props.data.location}</small>
        <br/><br/>

        {talksWrapper}
      </li>
    );
  }

  _getTalksContent() {
    return (
      <div className="talks-list">
          {this.props.data.talks.map(talk => (
            <Talk key={talk.title} data={talk}/>
          ))}
      </div>
    );
  }

  _getTalksWrapper(talksContent) {
    return (
      <div>
        <input
          type="checkbox"
          defaultChecked={this.state.displayTalks}
          onChange={this.toggleTalksEvent.bind(this)}
        />

        <ReactCSSTransitionGroup
          transitionName="slide"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={500}
          transitionAppear={true}
          transitionAppearTimeout={500}>
          {talksContent}
        </ReactCSSTransitionGroup>
      </div>
    );
  }
}
