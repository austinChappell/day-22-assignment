const express = require('express');
const mustacheExpress = require('mustache-express');
const data = require('./data');

const app = express();

// let Object = {
//   id,
//   username,
//   name,
//   avatar,
//   email,
//   university,
//   job,
//   company,
//   skills,
//   phone,
//   address:
//   {
//     street_num,
//     street_name,
//     city,
//     state_or_province,
//     postal_code,
//     country
//   }
// };
//
app.engine('mustache', mustacheExpress());

app.set('view engine', 'mustache');
app.set('views', __dirname + '/views');

app.use(express.static('public'));

app.get('/', function(req, res) {
  res.render('users', data);
});

app.get('/:id', function(req, res) {
  let id = req.params.id;
  let user = data.users.find(function(item) {
    return item.id == id;
  });
  res.render('user', user);
});

app.listen(3000, function() {
  console.log(`Your server has started on PORT 3000`);
});
