const axios = require('axios');

const url = 'https://ultiscore.com/tournaments/malaysia-men-nationals-2024';
const headers = {
    'x-cuz-flag': '202405071524' 
};

axios.get(url, { headers })
    .then(response => {
        console.log(response.data);
    })
    .catch(error => {
        console.error('Error:', error);
    });
