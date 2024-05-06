const router = require("express").Router();
const blogController = require("../controllers/anotherBlogController");


router.get("/getblog" , blogController.getAllBlog);
router.post("/addblog" , blogController.addBlog);

module.exports = router;