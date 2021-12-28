const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/tharundynamicport", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log("Connection Was SuccesFull...")).catch((err) => console.log(err));