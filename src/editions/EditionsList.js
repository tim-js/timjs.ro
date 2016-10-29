import React, {Component} from 'react';
import Edition from './Edition';

export default class EditionsList extends Component {
  render() {
    return (
      <ul>
        {this.props.list.map(edition => (
          <Edition key={edition.name} data={edition}/>
        ))}
      </ul>
    );
  }
}
