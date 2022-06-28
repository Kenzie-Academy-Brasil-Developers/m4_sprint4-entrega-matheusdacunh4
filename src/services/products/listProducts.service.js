import database from "../../database";

const listProductsService = async () => {
  try {
    const allProducts = await database.query("SELECT * FROM products");
    return allProducts.rows;
  } catch (err) {
    throw new Error(err);
  }
};

export default listProductsService;
