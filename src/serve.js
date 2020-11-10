
const Vue = require('vue');
const createApp = require('./app')
const server = require('express')();

const template = require('fs').readFileSync('./index.template.html', 'utf-8');

const renderer = require('vue-server-renderer').createRenderer({
  template,
});


server.get('*', (req, res) => {
    const context = { url: req.url }
    const app = createApp(context)

  renderer
  .renderToString(app, context, (err, html) => {
    if (err) {
      res.status(500).end('Internal Server Error')
      return;
    }
    res.end(html);
  });
})

server.listen(8089);