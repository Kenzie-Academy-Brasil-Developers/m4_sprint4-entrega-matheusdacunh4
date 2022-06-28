import database from "../../database";

const listProductDataService = async (id) => {
  try {
    const productData = await database.query(
      "SELECT * FROM products WHERE id = $1",
      [id]
    );
    if (productData.rowCount > 0) {
      return productData.rows[0];
    } else {
      throw "Not found";
    }
  } catch (err) {
    throw new Error(err);
  }
};

export default listProductDataService;
