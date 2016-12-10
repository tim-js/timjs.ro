import React, {Component} from 'react';

export default class Link extends Component {
  render() {
    const url  = this.props.url;
    const text = this.props.text;

    if (!url.length) {
      return (<span>{text}</span>);
    }

    return (<a href={url}>{text}</a>);
  }
}

Link.propTypes = {
  text: React.PropTypes.string.isRequired,
  url: React.PropTypes.string
};

Link.defaultProps = {
  text: '',
  url: ''
};
