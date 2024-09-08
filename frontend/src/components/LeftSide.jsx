import React, { useContext } from 'react';
import styles from './LeftSide.module.css';
import { UserInput } from '../store/Input_data';
import { fetchDataFromAPI } from './Api';

const LeftSide = () => {
  const { aiInput, setAiInput, userInput, setUserInput, fetchdata, setfetchdata } = useContext(UserInput);

  const handleInput1Change = (e) => setAiInput(e.target.value);
  const handleInput2Change = (e) => setUserInput(e.target.value);
  
  // Handle Fetch Data button click
  const handleFetchData = async () => {
    //console.log(aiInput);
    //console.log(userInput);
    try {
      //console.log("first")
      await fetchDataFromAPI(aiInput, userInput, setfetchdata);  // Call the API function
    } catch (error) {
      console.error("Error fetching data:", error.message);
    }
  };

  return (
    <div className={styles.LeftSide}>
      <label className={styles.Label}>System Prompt:</label>
      <input
        type="text"
        value={aiInput}
        onChange={handleInput1Change}
        placeholder="Act like a travel advisor"
      />
      <label className={styles.Label}>User Prompt:</label>
      <input
        type="text"
        value={userInput}
        onChange={handleInput2Change}
        placeholder="Enter your prompt"
      />
      <button onClick={handleFetchData}>Fetch Data</button>
    </div>
  );
};

export default LeftSide;
