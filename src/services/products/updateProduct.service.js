import database from "../../database";

const updateProductService = async (nome, price, category_id, id) => {
  try {
    const updatedProduct = await database.query(
      "UPDATE products SET name = $1, price= $2, category_id = $3 WHERE id = $4 RETURNING *",
      [nome, price, category_id, id]
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
