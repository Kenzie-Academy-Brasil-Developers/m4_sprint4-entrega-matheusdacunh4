import database from "../../database";

const listCategoriesService = async () => {
  try {
    const allCategories = await database.query("SELECT * FROM categories");
    return allCategories.rows;
  } catch (err) {
    throw new Error(err);
  }
};

export default listCategoriesService;
