//ONLY RUN ON THE SERVER
//url is api/new-meetup
import { MongoClient } from "mongodb";

async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;
    // console.log('URL',process.env.MONGO_URL);
    try {
      const client = await MongoClient.connect(process.env.MONGO_URL, {
        useUnifiedTopology: true,
      });
      const db=client.db();

      const meetupsCollection = db.collection("meetupscollection");
      const result = await meetupsCollection.insertOne(data);
      // console.log(result);

      client.close();

      res.status(201).json({ message: "Meetup inserted" });
    } catch (error) {
      console.log(error);
      res.status(500);
    }
  }
}
export default handler;
