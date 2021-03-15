import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "A first meetup",
    image: "https://source.unsplash.com/weekly?city",

    address: "Some address",
  },
  {
    id: "m2",
    title: "A second meetup",
    image: "https://source.unsplash.com/weekly?building",

    address: "Some address",
  },
  {
    id: "m3",
    title: "A third meetup",
    image: "https://source.unsplash.com/weekly?village",

    address: "Some address",
  },
  {
    id: "m4",
    title: "A fourth meetup",
    image: "https://source.unsplash.com/weekly?street",

    address: "Some address",
  },
];
const Home = () => {
  return <MeetupList meetups={DUMMY_MEETUPS}></MeetupList>;
};

export default Home;
