const express = require('express');
const exphbs = require('express-handlebars');
const app = express();
const usersRoutes = require('./routes/users');

// Handlebars Middleware
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

// Body Parser Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Homepage Route
app.get('/', (req, res) =>
  res.render('index', {
    applicationTitle: 'Member App',
  })
);

app.use('/api/users', usersRoutes);

app.listen(process.env.PORT || 5000);
