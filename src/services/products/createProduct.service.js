import database from "../../database";
import { v4 as uuidv4 } from 'uuid';

const createProductsService = async (name, price, category_id) => {
  try {
    const createdProduct = await database.query(
      "INSERT INTO products(id, name, price, category_id) VALUES($1, $2, $3, $4) RETURNING *",
      [uuidv4(), name, price, category_id]
    );
    return createdProduct.rows[0];
  } catch (err) {
    throw new Error(err);
  }
};

export default createProductsService;
