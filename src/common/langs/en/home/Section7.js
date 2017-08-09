const error = require('../message/Error');
const { postMailContactUs: postMailContactUsAlert } = require('../message/Alert');

module.exports = {
  "section7": {
    "header": "ASK US ANYTHING",
    "content": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.Lorem ipsum dolor sit amet",
    "placeholder": {
      "yourName": "* Your name",
      "email": "* Email",
      "phoneNumber": "* Phone number",
      "company": "Company",
      "yourMind": "* What is on your mind?"
    },
    "sendMessage": "Send Us A Message",
    // "alertMessage": {
    //   "title": "Thank you for your interest.",
    //   "content": "One of our friendly staff will get back to you within 24 hours."
    // },
    ...error,
    ...postMailContactUsAlert
  }
}
