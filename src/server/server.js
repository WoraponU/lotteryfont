const express = require('express');
const path = require('path');
const compression = require('compression');

const app = express();
const bundlePath = path.join(__dirname, '../..', '/dist');
const publicPath = path.join(__dirname, '../..', '/public/assets');

app.use(compression());
app.use('/dist', express.static(bundlePath));
app.use('/assets', express.static(publicPath));

const renderHTML = () => (`
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta name="robots" content="noindex">            

      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <meta name="keywords" content="รับ ทำ เว็บ ไซต์, เว็บไซต์, สร้าง เว็บ, เว็บ ขาย ของ, วิธี สร้าง เว็บ, เว็บไซต์ สําเร็จรูป, ราคาเว็บไซต์, จ้าง ทํา เว็บไซต์ ราคา เท่าไหร่, สอบ ทำ เว็บไซต์, ทำ เว็บ อย่างไร, พัฒนา เว็บไซต์, วิธี ทำ เว็บ, ประเทศไทย, กรุงเทพ, ลาดพร้าว, ฮ็อบบิซ, Hobbiz, Website, Design, Design agency, Design consultant, Web designer, Web developer, packaging design, Ecommerce, Online Media, Application, Awards, Bangkok, Thailand, web design bangkok, ออกแบบ web design, ออกแบบ เว็บไซต์ สวย ๆ, จ้าง ทํา เว็บไซต์ ที่ ไหน ดี, การ สร้าง เว็บไซต์ ขาย สินค้า, เว็บ ออนไลน์, การ สร้าง แบรนด์,">
      <meta name="description" content="Hobbiz Creative Website Developer || ฮ็อบบิซ สร้างสิ่งมีค่าที่เป็นมากกว่าเว็บไซต์">

      <meta property="og:title" content="Hobbiz || ฮ็อบบิซ"/>    
      <meta property="og:description" content="Hobbiz Creative Website Developer || ฮ็อบบิซ สร้างสิ่งมีค่าที่เป็นมากกว่าเว็บไซต์"/>
      <meta property="og:site_name" content="hobbiz.co.th" />
      <meta property="og:url" content="http://www.hobbiz.co.th" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="http://www.hobbiz.co.th/assets/images/common/ogFacebook.png" />
      <meta property="og:image:type" content="image/jpg" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="676" />

      <title>Hobbiz Creative Website Developer || ฮ็อบบิซ สร้างสิ่งมีค่าที่เป็นมากกว่าเว็บไซต์</title>      
      <link rel="shortcut icon" href="/assets/images/common/hobbiz_favicon.png">  
    </head>
    <body>
      <div id="root"></div>
      <script src="/dist/vendors.js"></script>
      <script src="/dist/app.js"></script>
      <script>
        (function(h,o,t,j,a,r){
            h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
            h._hjSettings={hjid:570687,hjsv:5};
            a=o.getElementsByTagName('head')[0];
            r=o.createElement('script');r.async=1;
            r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
            a.appendChild(r);
        })(window, document, '//static.hotjar.com/c/hotjar-','.js?sv=');
      </script>
      <script src="//code.tidio.co/dpixurtiqpm8azc5iaznmqkvpcq53it3.js"></script>      
    </body>
  </html>
`);

app.get('*', (req, res) => {
  res.status(200).send(renderHTML());
  res.end()
});

module.exports = app;
