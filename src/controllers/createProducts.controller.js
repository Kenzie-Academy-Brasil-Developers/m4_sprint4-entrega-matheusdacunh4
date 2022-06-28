import createProductsService from "../services/products/createProduct.service";

const createProductsController = async (req, res) => {
  const { name, price, category_id } = req.body;
  try {
    const newProduct = await createProductsService(name, price, category_id);
    console.log(newProduct);
    return res
      .status(201)
      .json({ message: "Product created", product: newProduct });
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
};
export default createProductsController;
