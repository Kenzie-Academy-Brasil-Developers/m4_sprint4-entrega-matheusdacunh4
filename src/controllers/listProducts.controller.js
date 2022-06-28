import listProductsService from "../services/products/listProducts.service";

const listProductsController = async (req, res) => {
  try {
    const allProducts = await listProductsService();
    return res.json(allProducts);
  } catch (err) {
    return res.json(err.message);
  }
};

export default listProductsController;
