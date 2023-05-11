import { readFile, writeFile } from "fs/promises";

export default async function handler(req, res) {
 switch (req.method) {
  case "POST":
   return saveMail(req, res);
  case "GET":
   return readMail(req, res);
 }
}

const saveMail = async (req, res) => {
 try {
  const content = await readFile("mailList.json", "utf-8");
  const data = JSON.parse(content);
  data.push(req.body.data);
  await writeFile("mailList.json", JSON.stringify(data));
  res.status(200).json({ message: "Success!" });
 } catch (error) {
  res.status(500).json({ message: "Error!" });
 }
};

const readMail = async (res) => {
 try {
  const content = await readFile("mailList.json", "utf-8");
  const data = JSON.parse(content);
  res.status(200).json({ data });
  console.log("MailList: ", data);
 } catch (error) {
  res.status(500).json({ message: "Failed to get data" });
 }
};
