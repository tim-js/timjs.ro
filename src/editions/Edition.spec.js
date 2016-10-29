import React from 'react';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-addons-test-utils';
import * as ShallowTestUtils from 'react-shallow-testutils';

import { shallow, mount, render } from 'enzyme';

import Link from './Link';
import Talk from './Talk';

import Edition from './Edition';

let data =   {
  name: "tim.js meetup 33: AngularConnect Special Event",
  date: "October 19, 2016",
  location: "Ambasada",
  url: "http://www.meetup.com/tim-js/events/234650066/",
  talks: [
    { title: "AngularConnect Overview", speaker: "Lucian Pacurar", urlPresentation: "", urlVideo: "", urlSpeaker: "" },
    { title: "Router 2.0", speaker: "Marius Cristea", urlPresentation: "", urlVideo: "", urlSpeaker: "" }
  ]
};

describe('Edition', () => {
  beforeEach(function() {
    this.shallowRenderer = ReactTestUtils.createRenderer();
  });

  it('should initially render the talks visible', function() {
		const sut  = this.shallowRenderer.render( <Edition data={data} /> );
		const tree = this.shallowRenderer.getRenderOutput();

		expect(ShallowTestUtils.findAllWithType(tree, Talk).length).toBe(2);
	});

  it('should hide the talks when unchecking, with DOM rendering', function() {
    const sut = ReactTestUtils.renderIntoDocument( <Edition data={data} /> );
    const sutNode = ReactDOM.findDOMNode(sut);
    const checkbox = sutNode.querySelector('input[type="checkbox"]');

    ReactTestUtils.Simulate.change(checkbox, {'target': {'checked': false}});

    // DOM parsing assert
    expect(sutNode.querySelectorAll('.talks-list').length).toEqual(0);
    // state assert
    expect(sut.state.displayTalks).toEqual(false);
	});

  it('should hide the talks when unchecking, with state setting', function() {
    const sut = ReactTestUtils.renderIntoDocument( <Edition data={data} /> );

    sut.setState({ displayTalks: false });

    // anti-pattern, because you can set an impossible state, in complex components
    // good only for iterating in TDD cycles
    expect(ReactTestUtils.scryRenderedDOMComponentsWithClass(sut, 'talks-list').length).toEqual(0);
	});

  it('should hide the talks when unchecking, with shallow rendering', function() {
		const sut  = this.shallowRenderer.render( <Edition data={data} /> );
		let tree = this.shallowRenderer.getRenderOutput();

    const checkbox = ShallowTestUtils.findAllWithType(tree, 'input')[0];
    checkbox.props.onChange({'target': {'checked': false}});
    tree = this.shallowRenderer.getRenderOutput();

		expect(ShallowTestUtils.findAllWithType(tree, Talk).length).toBe(0);
	});

});

describe('Edition, with Enzyme', () => {
  it('should initially render the talks visible, with static render', function() {
    const wrapper = render(<Edition data={data} />);
    expect(wrapper.find('.talks-list').length).toEqual(1);
	});

  it('should initially render the talks visible, with full DOM render', function() {
    const wrapper = mount(<Edition data={data} />);
    expect(wrapper.find(Talk).length).toEqual(2);
	});

  it('should hide the talks when unchecking, with shallow rendering', function() {
    const wrapper = shallow(<Edition data={data} />);
    wrapper.instance().toggleTalks(false);
    expect(wrapper.state().displayTalks).toEqual(false);
	});

  it('should hide the talks when unchecking, with full DOM rendering', function() {
    const wrapper = mount(<Edition data={data} />);
    wrapper.find('input[type="checkbox"]').simulate('change', {'target': {'checked': false}});
    expect(wrapper.containsMatchingElement(<Talk/>)).toEqual(false);
	});
});
