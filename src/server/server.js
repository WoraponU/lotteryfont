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
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <title>App</title>
    </head>
    <body>
      <div id="root"></div>
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
