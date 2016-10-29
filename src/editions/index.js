import React from 'react';
import {render} from 'react-dom';
import EditionsList from './EditionsList';

const editionsList = [
  {
    name: "tim.js meetup 33: AngularConnect Special Event",
    date: "October 19, 2016",
    location: "Ambasada",
    url: "http://www.meetup.com/tim-js/events/234650066/",
    talks: [
      { title: "AngularConnect Overview", speaker: "Lucian Pacurar", urlPresentation: "", urlVideo: "", urlSpeaker: "" },
      { title: "Router 2.0", speaker: "Marius Cristea", urlPresentation: "", urlVideo: "", urlSpeaker: "" }
    ]
  },
  {
    name: "tim.js meetup 32: ngParty Special Event",
    date: "September 10, 2016",
    location: "[e-spres-oh]",
    url: "http://www.meetup.com/tim-js/events/233391521/",
    talks: [
      { title: "Docker Driven Development: UI development using docker containers", speaker: "Mario Vejlupek", urlPresentation: "", urlVideo: "", urlSpeaker: "" },
      { title: "RxJS everywhere: browser, node and beyond", speaker: "Viliam Elischer", urlPresentation: "", urlVideo: "", urlSpeaker: "" },
      { title: "Leaving Angular (from Ng advocate perspective)", speaker: "Martin Hochel", urlPresentation: "https://docs.google.com/presentation/d/16LKpqIUhx_KCpccv3fxSor_dqr_YCKGS4pw233fYYiA/pub?start=false&loop=false&delayms=3000&slide=id.p", urlVideo: "", urlSpeaker: "" }
    ]
  },
  {
    name: "tim.js meetup 30",
    date: "July 20, 2016",
    location: "[e-spres-oh]",
    url: "http://www.meetup.com/tim-js/events/232196409/",
    talks: [
      { title: "JavaScript in Wonderland", speaker: "Petru Isfan", urlPresentation: "", urlVideo: "https://www.youtube.com/watch?v=6ZOuM9KEZHs", urlSpeaker: "" },
      { title: "WAT iz dat code?", speaker: "Andrei Pfeiffer", urlPresentation: "", urlVideo: "https://www.youtube.com/watch?v=qprejeMlxmM", urlSpeaker: "https://twitter.com/pfeiffer_andrei" }
    ]
  }
];

render( <EditionsList list={editionsList}/>, document.getElementById('past-editions') );
