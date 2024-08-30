const express= require('express');
const app= express();
const statusMonitor = require('express-status-monitor')();
app.use(statusMonitor);
app.get('/status', statusMonitor.pageRoute)

const port=3000;
app.use(express.static('public'));
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});