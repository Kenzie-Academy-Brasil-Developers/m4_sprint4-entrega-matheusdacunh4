import updateCategoryService from "../../services/categories/updateCategory.service";

const updateCategoryController = async (req, res) => {
  const { name } = req.body;
  const { id } = req.params;

  try {
    const updatedCategory = await updateCategoryService(name, id);
    return res.json({ message: "Updated", category: updatedCategory });
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
};

export default updateCategoryController;
