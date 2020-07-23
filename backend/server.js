const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path')
const app = express();
require('./database');

app.use(bodyParser.json());
app.use(cors());

// API
const topicsRouter = require('./routes/topics');
const answersRouter = require('./routes/answers');

app.use('/api/topics', topicsRouter);
app.use('/api/answers', answersRouter);

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));

    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, 'client', 'build', 'index.html')); // relative path
    });
}

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});
