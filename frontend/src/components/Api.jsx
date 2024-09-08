import { useContext } from 'react';
import { UserInput } from '../store/Input_data';

export const fetchDataFromAPI = async (aiInput, userInput, setfetchdata) => {
 
  try {
    //console.log("second")
    //console.log(aiInput);
    //console.log(userInput);
    const response = await fetch('http://localhost:8080/generate-response', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json', // Ensure the correct header
      },
      body: JSON.stringify({  // Ensure the body is stringified
        systemPrompt:aiInput,
        userPrompt:userInput,
      }),
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();
    //console.log("response",data.response);
    setfetchdata(data.response);
    //console.log(aiInput);
  } catch (error) {
    console.error('Error fetching data:', error.message);
  }
};
