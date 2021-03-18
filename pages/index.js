import MeetupList from "../components/meetups/MeetupList";
import Head from "next/head";
//will not be included in client side code
import { MongoClient } from "mongodb";

const Home = (props) => {
  return (
    <>
      <Head>
        <title>Meetups</title>
        <meta name="description" content='Meetups in every city'></meta>
      </Head>
      <MeetupList meetups={props.meetups}></MeetupList>
    </>
  );
};

////generate on buil end regenerate every 100 secunds
//https://nextjs.org/docs/basic-features/data-fetching.
export async function getStaticProps(context) {
  // console.log(process.env.MONGO_URL);
  const client = await MongoClient.connect(process.env.MONGO_URL, {
    useUnifiedTopology: true,
  });
  const db = client.db();

  const meetupsCollection = db.collection("meetupscollection");
  const meetups = await meetupsCollection.find().toArray();
  client.close();
  return {
    props: {
      meetups: meetups.map((meetup) => ({
        title: meetup.title,
        image: meetup.image,
        description: meetup.description || "",
        address: meetup.address,
        id: meetup._id.toString(),
      })),
    },
    //An optional amount in seconds after which a page re-generation can occur.
    //regenarate every 100 s on the server https://nextjs.org/docs/basic-features/data-fetching#incremental-static-regeneration
    revalidate: 100,
  };
}
//Generate page on server on every request
// export async function getServerSideProps(context) {
//   const req=context.req;
//   const res=context.res;
//   // console.log(req);
//   // console.log(res)
//   return {
//     props: {
//       meetups: DUMMY_MEETUPS,
//     },
//   };
// }
export default Home;
