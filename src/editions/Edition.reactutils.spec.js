import React from 'react';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-addons-test-utils';
import * as ShallowTestUtils from 'react-shallow-testutils';

import {editionData} from 'editionStubData.js'
import Talk from './Talk';

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
