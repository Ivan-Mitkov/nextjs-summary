import { MongoClient, ObjectId } from "mongodb";
import Head from "next/head";
import MeetupDetail from "../../../components/meetups/MeetupDetail";

const MeetupDetails = (props) => {
  return (
    <>
      <Head>
        <title>Meetup Detail: {props.meetup.title}</title>
        <meta name="description" content={`${props.meetup.address}`}></meta>
      </Head>{" "}
      <MeetupDetail {...props.meetup} />
    </>
  );
};

//https://nextjs.org/docs/basic-features/data-fetching#getstaticpaths-static-generation
export async function getStaticPaths() {
  // console.log(process.env.MONGO_URL);
  const client = await MongoClient.connect(process.env.MONGO_URL, {
    useUnifiedTopology: true,
  });
  const db = client.db();

  const meetupsCollection = db.collection("meetupscollection");
  const meetupsIds = await meetupsCollection.find({}, { _id: 1 }).toArray();
  client.close();
  return {
    fallback: false,
    paths: meetupsIds.map((x) => ({ params: { meetupId: x._id.toString() } })),
  };
}

export async function getStaticProps(context) {
  //get params in getStaticProps, can't use react hooks in this function
  const meetupId = context.params.meetupId;
  console.log("MeetupId", meetupId);
  const client = await MongoClient.connect(process.env.MONGO_URL, {
    useUnifiedTopology: true,
  });
  const db = client.db();

  const meetupsCollection = db.collection("meetupscollection");
  const selectedMeetup = await meetupsCollection.findOne({
    //convert from string to ObjectId
    _id: ObjectId(meetupId),
  });
  console.log(selectedMeetup);
  client.close();
  //_id as ObjectId can't be used
  const selectedMeetupProp = {
    ...selectedMeetup,
    //rename it to id
    id: selectedMeetup._id.toString(),
  };
  // delete key _id
  delete selectedMeetupProp._id;
  return {
    props: {
      meetup: selectedMeetupProp,
    },
  };
}
export default MeetupDetails;
