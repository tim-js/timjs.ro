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
  url: React.PropTypes.string,
  text: React.PropTypes.string
};

Link.defaultProps = {
  url: '',
  text: ''
};
