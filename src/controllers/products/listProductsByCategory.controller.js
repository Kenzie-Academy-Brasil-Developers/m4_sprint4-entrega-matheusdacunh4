import listProductsByCategoryService from "../../services/products/listProductsByCategory.service";

const listProductsByCategoryController = async (req, res) => {
  const { category_id } = req.params;

  try {
    const products = await listProductsByCategoryService(category_id);
    return res.json(products);
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
};

export default listProductsByCategoryController;
