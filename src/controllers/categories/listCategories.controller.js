import listCategoriesService from "../../services/categories/listCategories.service";

const listCategoriesController = async (req, res) => {
  try {
    const allCategories = await listCategoriesService();
    return res.json(allCategories);
  } catch (err) {
    return res.json(err.message);
  }
};

export default listCategoriesController;
