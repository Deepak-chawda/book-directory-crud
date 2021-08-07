const express = require("express");
const router = express.Router();
const book_all_logic = require("../../controller/book-logic-file/book-logic");
// get book by using _Id and Query (/get/books ? _id=....................)
router.get("/get/books", book_all_logic.fetch_book_logic);
// get book by using _id and params
router.get("/get/books/data/:dk", book_all_logic.fetch_book_logic_param);
// get all document book by get method
router.get("/get/books/allData", book_all_logic.fetch_allbook_logic);
// store data in book base by using post request
router.post("/post/storebooks", book_all_logic.add_book_logic);
// delete single book from Db by using  (query) id
router.delete("/delete/book", book_all_logic.delete_book_logic);
// update book from DB by using id
router.put("/update/book", book_all_logic.update_book_logic);

module.exports = router;

// second way to do put data in db i think  this is easy way to put data in db
// router.put("/update/book", (req, res) => {
//     const fetchId = req.query._id;
//     const getbody = req.body;
//     authbook.where({ _id: fetchId }).update(getbody) // this way  its very easy way to update
//         .then((data) => {
//             res.status(200).send("update successfully");
//             console.log("update successfully")
//         }).catch((error) => {
//             res.status(500).send(error)
//             console.log(" not update something is wrong")
//         })
// })
