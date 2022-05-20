const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/movies',
    {useNewUrlParser: false}
)

.then((data) => {
    console.log(`DB-Connected at:  ${data.connection.host}`)
}) .catch((error) => {
    console.error(`Error: ${error.message}`);
    process.exit();
});
