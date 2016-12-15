const editionData = {
  name: "Event name",
  date: "event date",
  location: "Event location",
  url: "event-url",
  talks: [
    { title: "Talk Title", speaker: "Speaker Name", urlPresentation: "url-presentation", urlVideo: "url-video", urlSpeaker: "url-speaker" },
    { title: "Another Talk Title", speaker: "Another Speaker Name", urlPresentation: "url-presentation-2", urlVideo: "url-video-2", urlSpeaker: "url-speaker-2" }
  ]
};

const talkData = editionData.talks[0];

export {editionData, talkData};
