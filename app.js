const express = require("express");
const app = express();
const sequelize = require("./config/database");

app.use(express.json());

app.use("/api/users", require("./routes/user.routes"));
app.use("/api/categories", require("./routes/category.routes"));
app.use("/api/products", require("./routes/product.routes"));
app.use("/api/orders", require("./routes/order.routes"));
app.use("/api/order-items", require("./routes/orderItem.routes"));

const PORT = process.env.PORT || 3000;
sequelize.sync().then(() => {
  console.log("Base de datos conectada");
  app.listen(PORT, () => {
    console.log(`Servidor corriendo en puerto ${PORT}`);
  });
});
