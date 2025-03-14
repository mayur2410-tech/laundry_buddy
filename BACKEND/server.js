const express = require('express');
const connectDB =require('./config/db');
const orderRoutes = require('./routes/userRoutes/orderRoutes')
const userRoutes = require('./routes/userRoutes/userRoute')
const complaintRoutes = require('./routes/userRoutes/complaintRoutes/complaintRoutes')
const WorkerAccountControlle =require('./routes/Admin/WorkerControlle/workeraccount')
const getUserProfileRoute = require('./routes/userRoutes/Profile/userDetails')
const getWorkerOrders = require("./routes/Worker/Get-All-Orders/allOrders")
const cors = require('cors'); // Importing cors

const app = express();
const port = 3000;
app.use(express.json());

// Middleware
app.use(cors()); // Enabling CORS for all routes

// connect to database
connectDB();

app.use('/user',orderRoutes,userRoutes,complaintRoutes,getUserProfileRoute)
app.use('/admin',WorkerAccountControlle )
app.use('/worker',WorkerAccountControlle,getWorkerOrders )


app.listen(port, () => {
  console.log(`Server start on http://localhost:${port}`);
});
