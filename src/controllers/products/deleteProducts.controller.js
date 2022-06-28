import deleteProductsService from "../../services/products/deleteProducts.service";

const deletedProductController = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedProduct = await deleteProductsService(id);
    return res
      .status(204)
      .json({ message: "deleted", product: deletedProduct });
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
};

export default deletedProductController;
