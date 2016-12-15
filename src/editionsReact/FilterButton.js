import React, {Component} from 'react';
import './edition.css';

export default class FilterButton extends Component {
  handleClick() {
    this.props.clickHandler( this.props.filter );
  }

  render() {
    let className = 'btn';
    if (this.props.filter === this.props.currentFilter) {
      className += ' btn-active';
    }

    return (
      <button
        className={className}
        onClick={this.handleClick.bind(this)}
      >
        {this.props.text}
      </button>
    );
  }
}

FilterButton.propTypes = {
  filter: React.PropTypes.oneOf(['', 'meetup', 'workshop']).isRequired,
  currentFilter: React.PropTypes.string.isRequired,
  text: React.PropTypes.string.isRequired
};
