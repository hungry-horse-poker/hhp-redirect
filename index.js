const express = require('express');
const app = express();

app.get('*', (req, res) => {
  if (req.hostname === 'hungryhorsepoker.com') {
    res.redirect(301, 'https://www.hungryhorsepoker.com' + req.originalUrl);
  } else {
    res.status(404).send('Not found');
  }
});

const port = process.env.PORT || 8080rm -rf node_modules package-lock.json;
app.listen(port, () => console.log(`Listening on port ${port}`));