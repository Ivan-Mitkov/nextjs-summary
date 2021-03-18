import MeetupDetail from "../../../components/meetups/MeetupDetail";
const MeetupDetails = (props) => {
  return <MeetupDetail {...props.meetup} />;
};

//https://nextjs.org/docs/basic-features/data-fetching#getstaticpaths-static-generation
export async function getStaticPaths() {
  return {
    fallback: false,
    paths: [
      {
        params: {
          meetupId: "m1",
        },
      },
      {
        params: {
          meetupId: "m2",
        },
      },
      {
        params: {
          meetupId: "m3",
        },
      },
      {
        params: {
          meetupId: "m4",
        },
      },
      {
        params: {
          meetupId: "m5",
        },
      },
      {
        params: {
          meetupId: "m6",
        },
      },
    ],
  };
}

export async function getStaticProps(context) {
  //get params in getStaticProps, can't use react hooks in this function
  const meetupId = context.params.meetupId;
  return {
    props: {
      meetup: {
        id: meetupId,
        img: "https://source.unsplash.com/weekly?street",
        title: "Dummy Title",
        address: "Dummy address",
        description: "Dummy description",
      },
    },
  };
}
export default MeetupDetails;
