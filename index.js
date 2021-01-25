const express = require('express');
const cors = require('cors');



const app = express();
app.use(express.json());
app.use(cors());


app.use('/api', require('./routes/indexRoutes'))
app.use('/api', require('./routes/gamesRoutes'))


app.listen(4000, () => {
    console.log('Server Running At 4000')
})