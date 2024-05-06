const router = require("express").Router();
const blogController = require("../controllers/blogController");


router.get("/getblog" , blogController.getAllBlog);
router.post("/addblog" , blogController.addBlog);

module.exports = router;