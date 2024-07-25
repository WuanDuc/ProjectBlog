const express = require("express");
const FirebaseAuthController = require("../controllers/Auth");
const {
  getProductById,
  deleteProduct,
  updateProduct,
  addProduct,
  getAllProducts,
} = require("../controllers/Product");
const {
  getSaleProductById,
  deleteSaleProduct,
  updateSaleProduct,
  addSaleProduct,
  getAllSaleProducts,
} = require("../controllers/SaleProduct");
const {
  getStaffById,
  deleteStaff,
  updateStaff,
  addStaff,
  getAllStaffs,
} = require("../controllers/Staff");
const {
  getAllCustomer,
  addCustomer,
  updateCustomer,
  deleteCustomer,
  getCustomerById,
} = require("../controllers/Customer");
const {
  getAllDiscount,
  addDiscount,
  updateDiscount,
  deleteDiscount,
  getDiscountById,
} = require("../controllers/Discount");
const {
  getAllRepairOrder,
  addRepairOrder,
  updateRepairOrder,
  deleteRepairOrder,
  getRepairOrderById,
} = require("../controllers/RepairOrder");
const {
  getAllWarrantyCertificates,
  addWarrantyCertificate,
  updateWarrantyCertificate,
  deleteWarrantyCertificate,
  getWarrantyCertificateById,
} = require("../controllers/WarrantyCertificate");
const {
  getAllGoodsReceipt,
  addGoodsReceipt,
  updateGoodsReceipt,
  deleteGoodsReceipt,
  getGoodsReceiptById,
} = require("../controllers/GoodsReceipt");
const router = express.Router();
//RepairOrder
router.get("/RepairOrder/getRepairOrder", getAllRepairOrder);
router.post("/RepairOrder/add", addRepairOrder);
router.put("/RepairOrder/update/:RepairOrderId", updateRepairOrder);
router.delete("/RepairOrder/delete/:RepairOrderId", deleteProduct);
router.get("/RepairOrder/RepairOrderById/:Id", getRepairOrderById);
//Warranty
router.get(
  "/WarrantyCertificate/getWarrantyCertificates",
  getAllWarrantyCertificates
);
router.post("/WarrantyCertificate/add", addWarrantyCertificate);
router.put(
  "/WarrantyCertificate/update/:WarrantyCertificateId",
  updateWarrantyCertificate
);
router.delete(
  "/WarrantyCertificate/delete/:WarrantyCertificateId",
  deleteWarrantyCertificate
);
router.get(
  "/WarrantyCertificate/WarrantyCertificateById/:Id",
  getWarrantyCertificateById
);


router.post("/signup", FirebaseAuthController.registerUser);
router.get("/login", FirebaseAuthController.loginUser);

module.exports = router;
