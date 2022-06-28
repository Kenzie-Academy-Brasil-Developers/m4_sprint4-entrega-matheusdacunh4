import express from "express";
import { startDatabase } from "./database";
import "dotenv/config";
import categoriesRoutes from "./routers/categories.routes";
import productsRoutes from "./routers/products.routes";

const port = 3001;

const app = express();

app.use(express.json());

app.use("/categories", categoriesRoutes);
app.use("/products", productsRoutes);

export default app.listen(process.env.PORT || port, () => {
  startDatabase();
  console.log("Server running");
});
