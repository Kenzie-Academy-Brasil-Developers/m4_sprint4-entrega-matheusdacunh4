import listCategoryDataService from "../../services/categories/listCategoryData.service";

const listCategoryDataController = async (req, res) => {
  const { id } = req.params;
  try {
    const categoryData = await listCategoryDataService(id);
    return res.json(categoryData);
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
};

export default listCategoryDataController;
