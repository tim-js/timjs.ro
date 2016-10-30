import React from 'react';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-addons-test-utils';
import * as ShallowTestUtils from 'react-shallow-testutils';

import { shallow, mount, render } from 'enzyme';

import Link from './Link';
import Talk from './Talk';

// @todo use a simpler notation, moduleDirectories, alias, etc
import {editionData} from '../../__testDoubles__/editionStubData.js'

import Edition from './Edition';

describe('Edition', () => {
  beforeEach(function() {
    this.shallowRenderer = ReactTestUtils.createRenderer();
  });

  it('should initially render the talks visible', function() {
		const sut  = this.shallowRenderer.render( <Edition data={editionData} /> );
		const tree = this.shallowRenderer.getRenderOutput();

		expect(ShallowTestUtils.findAllWithType(tree, Talk).length).toBe(2);
	});

  it('should hide the talks when unchecking, with DOM rendering', function() {
    const sut = ReactTestUtils.renderIntoDocument( <Edition data={editionData} /> );
    const sutNode = ReactDOM.findDOMNode(sut);
    const checkbox = sutNode.querySelector('input[type="checkbox"]');

    ReactTestUtils.Simulate.change(checkbox, {'target': {'checked': false}});

    // DOM parsing assert
    expect(sutNode.querySelectorAll('.talks-list').length).toEqual(0);
    // state assert
    expect(sut.state.displayTalks).toEqual(false);
	});

  it('should hide the talks when unchecking, with state setting', function() {
    const sut = ReactTestUtils.renderIntoDocument( <Edition data={editionData} /> );

    sut.setState({ displayTalks: false });

    // anti-pattern, because you can set an impossible state, in complex components
    // good only for iterating in TDD cycles
    expect(ReactTestUtils.scryRenderedDOMComponentsWithClass(sut, 'talks-list').length).toEqual(0);
	});

  it('should hide the talks when unchecking, with shallow rendering', function() {
		const sut  = this.shallowRenderer.render( <Edition data={editionData} /> );
		let tree = this.shallowRenderer.getRenderOutput();

    const checkbox = ShallowTestUtils.findAllWithType(tree, 'input')[0];
    checkbox.props.onChange({'target': {'checked': false}});
    tree = this.shallowRenderer.getRenderOutput();

		expect(ShallowTestUtils.findAllWithType(tree, Talk).length).toBe(0);
	});

});

describe('Edition, with Enzyme', () => {
  it('should initially render the talks visible, with static render', () => {
    const wrapper = render(<Edition data={editionData} />);
    expect(wrapper.find('.talks-list').length).toEqual(1);
	});

  it('should initially render the talks visible, with full DOM render', () => {
    const wrapper = mount(<Edition data={editionData} />);
    expect(wrapper.find(Talk).length).toEqual(2);
	});

  it('should hide the talks when unchecking, with shallow rendering', () => {
    const wrapper = shallow(<Edition data={editionData} />);
    wrapper.instance().toggleTalks(false);
    expect(wrapper.state().displayTalks).toEqual(false);
	});

  it('should hide the talks when unchecking, with full DOM rendering', () => {
    const wrapper = mount(<Edition data={editionData} />);
    wrapper.find('input[type="checkbox"]').simulate('change', {'target': {'checked': false}});
    expect(wrapper.containsMatchingElement(<Talk/>)).toEqual(false);
	});
});
