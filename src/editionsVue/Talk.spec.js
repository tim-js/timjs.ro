import Vue from 'vue/dist/vue';
import Talk from './Talk.vue';
import Url from './Url.vue';
import $ from 'jquery';

import {talkData} from './editionStubData.js';

function renderElement(inputData) {
  const vm =  new Vue({
    data: {
      input: inputData
    },
    template: '<div><Talk :data="input"></Talk></div>',
    components: { Talk }
  }).$mount();

  return $(vm.$el);
};

describe('Talk', function () {

  it('should render the Talk Title', () => {
    const el = renderElement(talkData);
    expect(el.text()).toContain(talkData.title);
	});

	it('should render the Speaker Name', () => {
    const el = renderElement(talkData);
    expect(el.text()).toContain(talkData.speaker);
	});

	it('should render the Video Url, when provided', () => {
    const el = renderElement(talkData);
    expect(el.html()).toContain(talkData.urlVideo);
	});

  it('should render the Presentation Url, when provided but no Video Url is provided', () => {
		const talkDataWithNoPresentationUrl = $.extend({}, talkData, {urlVideo: ''});
		const el = renderElement(talkDataWithNoPresentationUrl);
		expect(el.html()).toContain(talkData.urlPresentation);
	});

	it('should render no url for Talk, when no link is provided', () => {
		const talkDataWithNoTalkUrl = $.extend({}, talkData, {urlVideo: '', urlPresentation: ''});
		const el = renderElement(talkDataWithNoTalkUrl);
		expect(el.html()).toContain(`<span>${talkData.title}</span>`);
	});

	it('should render the Speaker Url, when provided', () => {
		const el = renderElement(talkData);
		expect(el.html()).toContain(talkData.urlSpeaker);
	});

	it('should render no url for Speaker, when no link is provided', () => {
		const talkDataWithNoSpeakerUrl = $.extend({}, talkData, {urlSpeaker: ''});
		const el = renderElement(talkDataWithNoSpeakerUrl);
		expect(el.html()).toContain(`<span>${talkData.speaker}</span>`);
	});
});
