import { useState } from "react";
import axios from "axios";
import styles from "../styles/MailForm.module.css";

export default function MailForm() {
 const [inputValue, setInputValue] = useState("");

 const handleSubmit = async (e) => {
  e.preventDefault();
  try {
   const response = await axios.post("/api/save-mail", { data: inputValue });
   console.log(response.data);
  } catch (error) {
   console.error(error);
  }
 };

 const handleChange = (e) => {
  setInputValue(e.target.value);
 };

 return (
  <div className={styles.mailform__container}>
   <h5 className={styles.mailform__title}>Subscribe to our newsletter</h5>
   <form onSubmit={handleSubmit} className={styles.mailform__form}>
    <label className={styles.mailform__text}>
     Your mail:
     <input type="text" value={inputValue} onChange={handleChange} />
    </label>
    <button type="submit">Save Data</button>
   </form>
  </div>
 );
}
