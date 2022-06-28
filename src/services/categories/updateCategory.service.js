import database from "../../database";

const updateCategoryService = async (nome, id) => {
  try {
    const updatedCategory = await database.query(
      "UPDATE categories SET name = $1  WHERE id = $2 RETURNING *",
      [nome, id]
    );
    if (updatedCategory.rowCount > 0) {
      return updatedCategory.rows[0];
    } else {
      throw "Category not found";
    }
  } catch (err) {
    throw new Error(err);
  }
};

export default updateCategoryService;
