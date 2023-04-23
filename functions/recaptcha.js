const axios = require('axios');
const safe = require('./utils/safe');

exports.handler = async (event) => {
  try {
    const response = await axios.post('https://www.google.com/recaptcha/api2/siteverify', {
      secret: safe.link,
      response: event.body.response
    });
    return {
      statusCode: 200,
      body: JSON.stringify(response.data)
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message })
    };
  }
};
// У цьому коді ми створили функцію-обробник з іменем handler, яка отримує запит від веб-додатку, здійснює запит на Recaptcha API та повертає відповідь.

// Збережіть файл recaptcha.js і перейдіть на сайт Netlify. Увійдіть в свій аккаунт та відкрийте свій проект.

// Виберіть "Functions" з бічного меню та натисніть "Add function".

// Введіть назву функції, наприклад "recaptcha" та виберіть "JavaScript" як мову.

// Натисніть кнопку "Create Function" та скопіюйте код з файлу recaptcha.js в редактор функції.

// Збережіть функцію та скопіюйте URL-адресу функції, який буде використовувати веб-додаток.

// Ваш веб-додаток може здійснювати запит до функції з використанням Axios. Ось приклад коду:

// axios.post('https://your-netlify-function-url.com/.netlify/functions/recaptcha', {
//   response: 'USER_RESPONSE_TOKEN'
// })
// .then(response => {
//   console.log(response.data);
// })
// .catch(error => {
//   console.error(error);
// });







