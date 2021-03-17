import MeetupDetail from "../../../components/meetups/MeetupDetail";
const MeetupDetails = () => {
  const meetup = {
    img: "https://source.unsplash.com/weekly?street",
    title: "Dummy Title",
    address: "Dummy address",
    description: "Dummy description",
  };
  return <MeetupDetail {...meetup} />;
};

export default MeetupDetails;
