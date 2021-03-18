import { useRouter } from "next/router";
import NewMeetupForm from "../../components/meetups/NewMeetupForm";

const NewMeetupPage = () => {
  const router = useRouter();
  const onAddMeetupHandler = async (newMeetup) => {
    const response = await fetch("/api/new-meetup", {
      method: "POST",
      body: JSON.stringify(newMeetup),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();
    console.log(data);
    //can go back with the back button
    router.replace("/");
  };
  return <NewMeetupForm onAddMeetup={onAddMeetupHandler} />;
};

export default NewMeetupPage;
