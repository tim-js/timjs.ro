import React from 'react';
import { shallow, mount, render } from 'enzyme';

import Link from './Link';
import Talk from './Talk';

import {talkData} from 'editionStubData.js';

describe('Talk', () => {
	it('should render the Talk Title', () => {
		const wrapper = render(<Talk data={talkData} />);
		expect(wrapper.text()).toContain(talkData.title);
	});

	it('should render the Speaker Name', () => {
		const wrapper = render(<Talk data={talkData} />);
		expect(wrapper.text()).toContain(talkData.speaker);
	});

	it('should render the Video Url, when provided', () => {
		const wrapper = render(<Talk data={talkData} />);
		expect(wrapper.html()).toContain(talkData.urlVideo);
	});

	it('should render the Presentation Url, when provided but no Video Url is provided', () => {
		const talkDataWithNoPresentationUrl = Object.assign({}, talkData, {urlVideo: ''});
		const wrapper = render(<Talk data={talkDataWithNoPresentationUrl} />);
		expect(wrapper.html()).toContain(talkData.urlPresentation);
	});

	it('should render no url for Talk, when no link is provided', () => {
		const talkDataWithNoTalkUrl = Object.assign({}, talkData, {urlVideo: '', urlPresentation: ''});
		const wrapper = render(<Talk data={talkDataWithNoTalkUrl} />);
		expect(wrapper.html()).toContain(`<span>${talkData.title}</span>`);
	});

	it('should render the Speaker Url, when provided', () => {
		const wrapper = render(<Talk data={talkData} />);
		expect(wrapper.html()).toContain(talkData.urlSpeaker);
	});

	it('should render no url for Speaker, when no link is provided', () => {
		const talkDataWithNoSpeakerUrl = Object.assign({}, talkData, {urlSpeaker: ''});
		const wrapper = render(<Talk data={talkDataWithNoSpeakerUrl} />);
		expect(wrapper.html()).toContain(`<span>${talkData.speaker}</span>`);
	});
});
