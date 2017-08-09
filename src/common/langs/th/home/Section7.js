const error = require('../message/Error');
const { postMailContactUs: postMailContactUsAlert } = require('../message/Alert');

module.exports = {
  "section7": {
    "header": "คุยกับเราได้ทุกเรื่องเลยนะ",
    "content": "หากมีคำถามไม่ว่าจะเป็นเรื่องดีไซน์ เรื่องเว็บไซต์ เรื่องงาน เรื่องไลฟ์สไตล์ เรื่องเกมส์ หรืออยากพูดคุยเรื่องไหนก็ได้ ได้ทุกเรื่อง ส่งข้อความมาหาเราได้ตลอด เหล่าฮ็อบบิซพร้อมตอบคำถามของคุณตลอด 24 ชั่วโมง และทุกวัน หรืออยากให้ทันใจโทรหาเราได้ทันที",
    "placeholder": {
      "yourName": "* ชื่อของคุณ",
      "email": "* อีเมลล์",
      "phoneNumber": "* เบอร์โทรศัพท์",
      "company": "บริษัท",
      "yourMind": "* เขียนสิ่งที่อยากพูดคุยกับเราได้เลย"
    },
    "sendMessage": "ส่งข้อความ",
    ...error,
    ...postMailContactUsAlert
  }
}
