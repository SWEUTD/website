// eventList.js

// event list to be updated with event descriptions and flyters

const upcomingEvents = [
  {
    name: "Building Your Personal Brand with Capital One",
    date: '4/6/2021 - 6:00 PM CST',
    description: "Come learn about how you can create your own personal brand with Capital One! Get advice about discovering strengths and weaknesses, mastering LinkedIn, finding potential employers, networking, and more! There will also be a raffle for a chance to win a GrubHub gift card.",
    link: 'https://nam02.safelinks.protection.outlook.com/?url=https%3A%2F%2Ffacebook.us19.list-manage.com%2Ftrack%2Fclick%3Fu%3Dada9150cb4cf2450b2870f9b7%26id%3D7d74d7c98c%26e%3D09a746bd56&data=04%7C01%7CAarushi.Pandey%40UTDallas.edu%7C8243a7b080f641eb39f208d8f2d841e2%7C8d281d1d9c4d4bf7b16e032d15de9f6c%7C0%7C0%7C637526357933158741%7CUnknown%7CTWFpbGZsb3d8eyJWIjoiMC4wLjAwMDAiLCJQIjoiV2luMzIiLCJBTiI6Ik1haWwiLCJXVCI6Mn0%3D%7C1000&sdata=Uer6pWWHWS5cenmp4rBWn%2FGRYe0lky1rtM7cEX%2Fw84c%3D&reserved=0'
  },
  {
    name: "WITB x WWC Women's Day Panel",
    date: 'TBD - 6:00 PM CST',
    description: "Join us for an exciting panel with notable researchers, industry professionals, & businesswomen in STEM. More details coming soon!",
    link: ''
  },
  {
    name: "Approaching LeetCode",
    date: 'TBA',
    description: "Join us for a technical workshop led by our VP of Internal Affairs, Cady Baltz, to learn about the steps on how to approach leetcode and making a plan to prep for technical interviews. We're very proud of her for landing two internship opportunities at Facebook and Apple. You definitely don't want to miss this!",
    link: ''
  },
  {
    name: "Seniors Panel - If I were a Freshman",
    date: 'TBA',
    description: "Join us for an exciting panel with upcoming graduates to talk about their advice for collegiates and reflecting on what they would have done differently. More details coming soon!",
    link: ''
  },
  {
    name: "Bridgeland High School Panel",
    date: 'TBA',
    description: "High school panel where current SWE members talk about what it's like to be a member of SWE in college, several broad engineering fields/topics, and any personal experiences in these fields. If you're interested in volunteering as a panelist for our high-school panel events, please watch for future announcements on our Discord!",
    link: ''
  },
];

const flyers = [
  {
    image: '',
    link: ''
  },
  {
    image: '',
    link: ''
  },
  {
    image: '',
    link: ''
  },
  {
    image: '',
    link: ''
  },
  {
    image: '',
    link: ''
  },
];

const styles = (theme) => ({
  gridItem: {
    display: "flex",
  },
  card: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "column",
    width: "100%",
  },
  table: {
    minWidth: "50%",
    maxWidth: "70%",
  },
  imgResponsive: {
    width: "200 px",
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
});

function createData(event, flyer) {
  return { event, flyer };
}

export const rows = [
  createData(upcomingEvents[0], flyers[0].image),
  createData(upcomingEvents[1], flyers[1].image),
  createData(upcomingEvents[2], flyers[2].image),
  createData(upcomingEvents[3], flyers[3].image),
  createData(upcomingEvents[4], flyers[4].image),
];

export default {
  rows,
}
