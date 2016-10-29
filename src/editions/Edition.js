import React, {Component} from 'react';
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
    let talksContent;

    if (this.state.displayTalks) {
      talksContent = (
        <div className="talks-list">
          {this.props.data.talks.map(talk => (
            <Talk key={talk.title} data={talk}/>
          ))}
        </div>
      );
    }

    return (
      <li className="edition">
        <h2><Link url={this.props.data.url} text={this.props.data.name} /></h2>

        <small>{this.props.data.date} at {this.props.data.location}</small>
        <br/><br/>

        <input
          type="checkbox"
          defaultChecked={this.state.displayTalks}
          onChange={this.toggleTalksEvent.bind(this)}
        />

        {talksContent}
      </li>
    );
  }
}
