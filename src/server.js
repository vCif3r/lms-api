const app = require('./app');
const connectDB = require('./config/db.config');
// Conectar a la base de datos
connectDB();

app.listen(3000, () => {
  console.log(`Server is running on port 3000`);
});
