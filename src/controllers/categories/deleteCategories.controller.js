import deleteCategoriesService from "../../services/categories/deleteCategories.service";

const deleteCategoriesController = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedCategory = await deleteCategoriesService(id);
    return res
      .status(204)
      .json({ message: "deleted", category: deletedCategory });
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
};

export default deleteCategoriesController;
