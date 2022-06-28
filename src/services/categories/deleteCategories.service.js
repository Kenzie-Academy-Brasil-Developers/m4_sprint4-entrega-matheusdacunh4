import database from "../../database";

const deleteCategoriesService = async (id) => {
  try {
    const deletedCategory = await database.query(
      "DELETE FROM categories WHERE id = $1",
      [id]
    );
    if (deletedCategory.rowCount > 0) {
      return deletedCategory.rows[0];
    } else {
      throw "Product not found";
    }
  } catch (err) {
    throw new Error(err);
  }
};

export default deleteCategoriesService;
