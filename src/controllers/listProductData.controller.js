import listProductDataService from "../services/products/listProductData.service";
const listProductDataController = async (req, res) => {
  const { id } = req.params;
  try {
    const productData = await listProductDataService(id);
    return res.json(productData);
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
};

export default listProductDataController;
