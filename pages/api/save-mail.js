export default async function handler(req, res) {
 try {
  // Save your data here...
  res.status(200).json({ message: "Success!" });
 } catch (error) {
  res.status(500).json({ message: "Error!" });
 }
}
