import React from 'react';
import ReactTestRenderer from 'react-test-renderer';

import Link from './Link';
import Talk from './Talk';

let data = { title: "Talk Title", speaker: "Speaker Name", urlPresentation: "url-presentation", urlVideo: "url-video", urlSpeaker: "url-speaker" };

describe('Talk', () => {
	it('should test snapshot', () => {
		const tree = ReactTestRenderer.create( <Talk data={data} /> ).toJSON();
	  expect(tree).toMatchSnapshot();
	});
});
