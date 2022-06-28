import database from "../../database";

const updateProductService = async (nome, price, category_id, id) => {
  try {
    const updatedProduct = await database.query(
      "UPDATE products SET name = $1 WHERE id = $2 RETURNING *",
      [nome, id]
    );
    if (updatedProduct.rowCount > 0) {
      return updatedProduct.rows[0];
    } else {
      throw "Product not found";
    }
  } catch (err) {
    throw new Error(err);
  }
};

export default updateProductService;
