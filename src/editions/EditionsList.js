import React, {Component} from 'react';
import Edition from './Edition';

export default class EditionsList extends Component {
  render() {
    const editionsList = this._getEditionsList(this.props.list, this.props.filterType);

    return (
      <ul>
        {editionsList.map(edition => (
          <Edition key={edition.name} data={edition}/>
        ))}
      </ul>
    );
  }

  _getEditionsList(list, filter) {
    if (!filter) {
      return list;
    }
    return list.filter(edition => edition.type === filter);
  }
}
