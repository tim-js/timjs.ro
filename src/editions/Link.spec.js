import React from 'react';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-addons-test-utils';

import Link from './Link';

describe('Link', () => {
	it('should render a link, when a url is given', () => {
		const sut = ReactTestUtils.renderIntoDocument(
			<Link url="some url" text="some text" />
		);

		const sutNode = ReactDOM.findDOMNode(sut);

		expect(sutNode.textContent).toEqual('some text');
		expect(sutNode.tagName).toEqual('A');
	});

	it('should render a span, when no url is given', () => {
		const sut = ReactTestUtils.renderIntoDocument(
			<Link text="some text" />
		);

		const sutNode = ReactDOM.findDOMNode(sut);

		expect(sutNode.textContent).toEqual('some text');
		expect(sutNode.tagName).toEqual('SPAN');
	});
});
