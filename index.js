const app = require('./app')();

const port = process.env.PORT || 3000;

app.listen(port, (err) => {
    if (err) {
        console.log('Could not run the server: ', err);
    } else {
        console.log('Server is running on port: ', port);
    }
});