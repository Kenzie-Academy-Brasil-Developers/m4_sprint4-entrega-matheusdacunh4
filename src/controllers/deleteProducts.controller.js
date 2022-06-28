import deleteProductsService from "../services/products/deleteProducts.service";

const deletedProductController = (req, res) => {
  const { id } = req.params;

  try {
    const deletedProduct = deleteProductsService(id);
    return res
      .status(204)
      .json({ message: "deleted", product: deletedProduct });
  } catch (err){
    return res.status(400).json({ message: err.message });
  }
};

export default deletedProductController;
