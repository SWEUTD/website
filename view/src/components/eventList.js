// eventList.js

// event list to be updated with event descriptions and flyters

const upcomingEvents = [
  {
    name: "Seniors Panel - If I were a Freshman",
    date: '4/13/2021 - 6:00 PM to 7:00 PM CT',
    description: "Join us for an exciting panel with upcoming graduates to talk about their advice for collegiates and reflecting on what they would have done differently.",
    link: 'https://nam02.safelinks.protection.outlook.com/?url=https%3A%2F%2Ffacebook.us19.list-manage.com%2Ftrack%2Fclick%3Fu%3Dada9150cb4cf2450b2870f9b7%26id%3D240f707f0b%26e%3D09a746bd56&data=04%7C01%7CAarushi.Pandey%40UTDallas.edu%7C2c4651082f0a457cc80208d8fdd956c1%7C8d281d1d9c4d4bf7b16e032d15de9f6c%7C0%7C0%7C637538457203400591%7CUnknown%7CTWFpbGZsb3d8eyJWIjoiMC4wLjAwMDAiLCJQIjoiV2luMzIiLCJBTiI6Ik1haWwiLCJXVCI6Mn0%3D%7C1000&sdata=86fKMltlYMG9hB8AnVX60CKZmtkO%2Bi%2Fs%2B1lNz6QcCKs%3D&reserved=0'
  },
  {
    name: "WWC X JP Morgan - Imposter Syndrome and Preparing for a Virtual Internship",
    date: '4/15/2021 - 6:00 PM to 7:00 PM CT',
    description: "Join us for an exciting panel in collaboration with WWC featuring JP Morgan Chase for a discussion on imposter syndrome and preparing for a virtual internship! **We're looking for volunteers to represent SWE at this event. Please let us know if you'd like to volunteer! You can reach us on our GroupMe chat or Discord.**",
    link: 'https://nam02.safelinks.protection.outlook.com/?url=https%3A%2F%2Ffacebook.us19.list-manage.com%2Ftrack%2Fclick%3Fu%3Dada9150cb4cf2450b2870f9b7%26id%3D73286f2cc3%26e%3D09a746bd56&data=04%7C01%7CAarushi.Pandey%40UTDallas.edu%7C2c4651082f0a457cc80208d8fdd956c1%7C8d281d1d9c4d4bf7b16e032d15de9f6c%7C0%7C0%7C637538457203400591%7CUnknown%7CTWFpbGZsb3d8eyJWIjoiMC4wLjAwMDAiLCJQIjoiV2luMzIiLCJBTiI6Ik1haWwiLCJXVCI6Mn0%3D%7C1000&sdata=psupXlCb94e5%2F0XDGUUHwAVLFFomt8%2FqMzqsZCg4QFI%3D&reserved=0'
  },
  {
    name: "WEHack - Springboard",
    date: '4/17/2021 - 4/18/2021',
    description: "Springboard is a mini-hackathon designed to give new hackers the skills they need to be successful at future hackathons via workshops, panels, and lightning talks. Join us this weekend to prepare for WEHack 2021! Register today at https://forms.gle/b3SzrzZYz2WMYSsV7",
    link: ''
  },
  {
    name: "Bridgeland High School Panel",
    date: '4/20/2021',
    description: "High school panel where current SWE members talk about what it's like to be a member of SWE in college, several broad engineering fields/topics, and any personal experiences in these fields. Look out for announcements regarding future volunteering opportunities on our Discord!",
    link: ''
  },
  {
    name: "Optimize your Summer with Lennox",
    date: '4/21/2021 - 7:00 PM to 8:00 PM CT',
    description: "Join us for an exciting event with Lennox on goal planning and preparing for next recruiting season, standing out at your internship, and summer to do’s to grow your skills!",
    link: 'https://nam02.safelinks.protection.outlook.com/?url=https%3A%2F%2Ffacebook.us19.list-manage.com%2Ftrack%2Fclick%3Fu%3Dada9150cb4cf2450b2870f9b7%26id%3D8238ad71a3%26e%3D09a746bd56&data=04%7C01%7CAarushi.Pandey%40UTDallas.edu%7C2c4651082f0a457cc80208d8fdd956c1%7C8d281d1d9c4d4bf7b16e032d15de9f6c%7C0%7C0%7C637538457203430575%7CUnknown%7CTWFpbGZsb3d8eyJWIjoiMC4wLjAwMDAiLCJQIjoiV2luMzIiLCJBTiI6Ik1haWwiLCJXVCI6Mn0%3D%7C1000&sdata=mcwEJwsSXKI3piwVp4V08x8jTkfEM1x3maAc0f98Fy4%3D&reserved=0'
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
