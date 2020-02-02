const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const activityRoutes = require('./routes/activity');

const app = express();
const port = process.env.PORT || 3000;

/**View engine */
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => res.render('home'));
app.use('/activity', activityRoutes());

app.listen(port, (err) => {
    if (err) {
        console.log('Could not run the server: ', err);
    } else {
        console.log('Server is running on port: ', port);
    }
});