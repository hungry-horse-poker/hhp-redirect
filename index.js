const express = require('express');
const app = express();

app.get('/:path*', (req, res) => {
  if (req.hostname === 'hungryhorsepoker.com') {
    res.redirect(301, 'https://www.hungryhorsepoker.com' + req.originalUrl);
  } else {
    res.status(404).send('Not found');
  }
});

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Listening on port ${port}`));