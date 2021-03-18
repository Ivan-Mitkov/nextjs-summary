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
const Home = (props) => {
  return <MeetupList meetups={props.meetups}></MeetupList>;
};

////generate on buil end regenerate every 100 secunds
//https://nextjs.org/docs/basic-features/data-fetching.
export async function getStaticProps(context) {
  return {
    props: {
      meetups: DUMMY_MEETUPS,
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
