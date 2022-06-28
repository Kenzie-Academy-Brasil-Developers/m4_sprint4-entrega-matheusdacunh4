import database from "../../database";

const deleteProductsService = async (id) => {
  try {
    const deletedProduct = await database.query(
      "DELETE FROM products WHERE id = $1",
      [id]
    );
    if (deletedProduct.rowCount > 0) {
      return deletedProduct.rows[0];
    } else {
      throw "Product not found";
    }
  } catch (err) {
    throw new Error(err);
  }
};

export default deleteProductsService;
