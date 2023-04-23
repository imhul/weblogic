import axios from 'axios';

const netlifyURL = 'https://weblogic.netlify.app/.netlify/functions/recaptcha';

export const getRecaptcha = async (data) => {
    await axios.post(netlifyURL, data)
        .then(response => {
            console.log(response.data);
        })
        .catch(error => {
            console.error(error);
        });
} 
