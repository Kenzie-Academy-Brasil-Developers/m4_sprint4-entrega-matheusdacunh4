import updateProductService from "../services/products/updateProduct.service";

const updateProductController = async (req, res) => {
  const { name, price, category_id } = req.body;
  const { id } = req.params;

  try {
    const updatedProduct = await updateProductService(
      name,
      price,
      category_id,
      id
    );
    return res.json({ message: "Updated", product: updatedProduct });
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
};

export default updateProductController;
