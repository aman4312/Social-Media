const mongoose = require('mongoose');
exports.connectDatabase = () => {
  mongoose
    .connect(process.env.MONGO_URI)
    .then((c) => {
      console.log('Database connected');
    })
    .catch((e) => {
      console.log(e);
    });
};
