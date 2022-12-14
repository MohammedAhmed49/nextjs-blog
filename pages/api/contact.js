import { MongoClient } from "mongodb";

async function handler(req, res) {
  if (req.method === "POST") {
    const { name, email, message } = JSON.parse(req.body);
    if (
      !email ||
      !email.includes("@") ||
      !name ||
      name.trim() === "" ||
      !message ||
      message.trim() === ""
    ) {
      res.status(422).json({ message: "Invalid input" });
      return;
    }

    const newMessage = {
      email,
      name,
      message,
    };

    const url = `mongodb+srv://${process.env.mongodb_username}:${process.env.mongodb_password}@${process.env.mongodb_clusetername}.z7mqdcq.mongodb.net/?retryWrites=true&w=majority`;

    let client;

    try {
      client = await MongoClient.connect(url);
    } catch (error) {
      res.status(500).json({ message: "Couldn't connect!" });
    }

    const db = client.db(process.env.mongodb_database);
    try {
      const result = await db.collection("messages").insertOne(newMessage);
      newMessage.id = result.insertedId;
    } catch (error) {
      client.close();
      res.status(500).json({ message: "Couldn't store data!" });
    }

    client.close();

    res.status(201).json({ message: "Successfully stored!", newMessage });
  }
}

export default handler;
