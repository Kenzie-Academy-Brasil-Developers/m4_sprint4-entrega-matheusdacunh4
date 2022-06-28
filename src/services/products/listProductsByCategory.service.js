import database from "../../database";

const listProductsByCategoryService = async (category_id) => {
  try {
    const products = await database.query(
      "SELECT p.name, p.price, c.name category FROM products p JOIN categories c ON p.category_id = c.id WHERE c.id = $1",
      [category_id]
    );
    if (products.rowCount > 0) {
      return products.rows;
    } else {
      throw "Not found";
    }
  } catch (err) {
    throw new Error(err);
  }
};

export default listProductsByCategoryService;
