const axios = require('axios');
var myRooms = [];
async function fetcher(name) {
  try {
    const response = await fetch('https://payup-043m.onrender.com/fetchRooms', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json', // Set the content type to JSON
      },
      body: JSON.stringify({ username: name }), // Convert the body to JSON format using JSON.stringify
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json(); // Parse the response body as JSO
    return data;
  } catch (error) {
    // Handle any errors that occur during the fetch
    console.error('Error fetching data:', error);
  }

}
// fetcher("drakeswd").then((temp)=>{
//     console.log(temp);
// });

module.exports = fetcher;


