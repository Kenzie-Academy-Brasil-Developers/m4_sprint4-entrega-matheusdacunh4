import createCategoriesService from "../../services/categories/createCategories.service";
const createCategoriesController = async (req, res) => {
  const { name } = req.body;
  try {
    const newCategory = await createCategoriesService(name);
    return res
      .status(201)
      .json({ message: "Category created", category: newCategory });
  } catch (err) {
    return res.status(400).json({ message: "existing category name!" });
  }
};
export default createCategoriesController;
