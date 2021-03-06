import React from 'react';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-addons-test-utils';
import * as ShallowTestUtils from 'react-shallow-testutils';
const shallowRenderer = ReactTestUtils.createRenderer();

import Link from './Link';
import Talk from './Talk';

import {talkData} from 'editionStubData.js';

describe('Talk', () => {
	it('should render 2 Link subcomponents, shallow method with shallow utils', () => {
		const sut  = shallowRenderer.render( <Talk data={talkData} /> );
		const tree = shallowRenderer.getRenderOutput();

		expect(ShallowTestUtils.findAllWithType(tree, Link).length).toBe(2);
	});

	it('should render 2 Link subcomponents, shallow method with rendered tree parsing', () => {
		const sut  = shallowRenderer.render( <Talk data={talkData} /> );
		const tree = shallowRenderer.getRenderOutput();

		const child1 = tree.props.children[0];
		const child2 = tree.props.children[2];

		expect(child1.props.children).toEqual( <Link url="url-video" text="Talk Title" /> );
		expect(child2.props.children).toEqual( <Link url="url-speaker" text="Speaker Name" /> );
	});

	it('should render 2 Link subcomponents, render in DOM method with react utils', () => {
		const sut = ReactTestUtils.renderIntoDocument( <Talk data={talkData} /> );

		expect(ReactTestUtils.scryRenderedComponentsWithType(sut, Link).length).toEqual(2);
	});

	it('should render 2 a tags, render in DOM method with DOM parsing', () => {
		const sut = ReactTestUtils.renderIntoDocument( <Talk data={talkData} /> );
		const sutNode = ReactDOM.findDOMNode(sut);

		expect(sutNode.querySelectorAll('a').length).toEqual(2);
	});
});
