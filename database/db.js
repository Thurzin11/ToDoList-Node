const mongoose = require("mongoose");

const connectToDb = () => {
  mongoose
    .connect(
      "mongodb+srv://root:admin@todolist-node.8hufu.mongodb.net/?retryWrites=true&w=majority&appName=ToDoList-Node",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    )
    .then(() => console.log("MongoDB Atlas CONECTADO"))
    .catch((err) => console.log(err));
};

module.exports = connectToDb;
