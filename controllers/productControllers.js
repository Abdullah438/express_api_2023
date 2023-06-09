const getAllProducts = async (req, res) => {
  res.status(200).json({ msg: "get all products" });
};

const getProductById = async (req, res) => {
  const id = req.params.id;
  res.status(200).json({ msg: `Get product by ID: ${id}` });
};
export { getAllProducts, getProductById };
