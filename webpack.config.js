const HtmlPlugin = require('html-webpack-plugin')

module.exports = {
  plugins: [
    new HtmlPlugin ({
      template: 'src/page.ejs',
      title: 'Title',
      templateParameters: {
        'myVar': 'Succeed!!!',
      },
    })
  ],
};