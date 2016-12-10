import React, {Component} from 'react';
import EditionsList from './EditionsList';
import FilterButton from './FilterButton';

export default class EditionsContainer extends Component {

  constructor() {
    super();
    this.state = {
      filter: '',
      editions: []
    };
  }

  handleFilter(value) {
    this.setState({ filter: value });
  }

  componentDidMount() {
    fetch('./src/editions/editions.json')
      .then(res => res.json())
      .then(resData => {
        this.setState({ editions: resData });
      })
      .catch(err => {
        console.warn('Error fetching editions data, from JSON file', err);
      });
  }

  render() {
    return (
      <div>
        <FilterButton filter="" text="All" currentFilter={this.state.filter} clickHandler={this.handleFilter.bind(this)}/>
        <FilterButton filter="meetup" text="Meetups" currentFilter={this.state.filter} clickHandler={this.handleFilter.bind(this)}/>
        <FilterButton filter="workshop" text="Workshops" currentFilter={this.state.filter} clickHandler={this.handleFilter.bind(this)}/>

        <EditionsList list={this.state.editions} filterType={this.state.filter}/>
      </div>
    );
  }
}
