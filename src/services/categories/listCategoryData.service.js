import database from "../../database";

const listCategoryDataService = async (id) => {
  try {
    const categoryData = await database.query(
      "SELECT * FROM categories WHERE id = $1",
      [id]
    );
    console.log(categoryData.rowCount);
    if (categoryData.rowCount > 0) {
      return categoryData.rows[0];
    } else {
      throw "Not found";
    }
  } catch (err) {
    throw new Error(err);
  }
};

export default listCategoryDataService;
