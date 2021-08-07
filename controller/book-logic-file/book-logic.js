const { model } = require("mongoose"); //this line come by defuilt
// schema file require here
const authbook = require("../../models/book-schema");
// get book by using _Id and Query
const fetch_book_logic = (req, res) => {
  const fetch = req.query._id;
  if (fetch) {
    const dudebook = authbook
      .findById({ _id: fetch })
      .then((data) => {
        if (data) {
          res.status(200).send(data);
          console.log("data access from DbAtlas successfully");
        } else {
          console.log("this id haven't  data in DB");
          res.status(500).send("this id have't data in DB");
        }
      })
      .catch((error) => {
        res.send("incorrect id");
      });
  } else {
    res.send("plz add Id in End point.......");
  }
};
// get book by using _id and params
const fetch_book_logic_param = (req, res) => {
  const fetch = req.params._id;
  if (req.params._id) {
    const dudebook = authbook
      .findById({ _id: fetch })
      .then((data) => {
        if (!data) {
          // console.log("this id haven't  data in DB");
          res.status(500).send("this id have't data in DB");
        } else {
          res.status(200).send(data);
          console.log("data access from DbAtlas successfully");
        }
      }) 
      .catch((error) => {
        res.send("incorrect id");
      });
  } else {
    res.send("plz add Id in url (end points)......");
  }
};
// get all document book by get method
const fetch_allbook_logic = (req ,res) => {
  // res.send("this is ");
  authbook
    .find()
    .then((data) => {
      console.log("get all documetn  ", data);
      res.status(200).send(data);
    })
    .catch((error) => {
      console.log("unable to get document all data", error);
      res.status(404).send(error);
    });
};
// store books data in data base by using post request
const add_book_logic = (req, res) => {
  // old way to do it
  const data = req.body;
  //   const bookdata = new authbook({
  //     bookname: data.bookname,
  //     price: data.price,
  //     author: data.author,
  //     language: data.language,
  //     aboutAuthor: data.aboutAuthor,
  //   });
  // new way to do it
  const bookdata = new authbook(req.body);
  if (Object.keys(bookdata).length == 6) {
    authbook
      .exists({ bookname: req.body.bookname }) // here is a first (bookneme) is schema bookname and second (bookname) is reqbody book name
      .then((data) => {
        if (data) {
          console.log("you can not insert same book");
          res.send("you can not insert same book");
        } else {
          bookdata
            .save()
            .then((data) => {
              console.log(data);
              res.send(data);
            })
            .catch((error) => {
              console.log("error");
            });
        }
      })
      .catch((error) => {
        console.log("something went wrong", error);
      });
  } else {
    res.status(500).send("plz fill all field in body");
    console.log("plz fill all field in body");
  }
};
// delete single book from Db by using  (query) id
const delete_book_logic = (req, res) => {
  const fetchId = req.query._id;
  if (fetchId) {
    authbook
      .findByIdAndDelete({ _id: fetchId })
      .then((data) => {
        if (data) {
          res.status(200).send("deleted book  by using id successfully");
          console.log("deleted book successfully");
        } else {
          res.send("This id don't have any book");
        }
      })
      .catch((error) => {
        res.status(500).send("not delete book something is wrong");
      });
  } else {
    res.status(404).send("id is missing in End poin");
  }
};
// update book from DB by using id
const update_book_logic = (req, res) => {
  const fetchId = req.query._id;
  const getbody = req.body;
  // console.log(getbody)
  if (fetchId) {
    if (Object.keys(getbody).length > 0) {
      authbook
        .findByIdAndUpdate(
          { _id: fetchId },
          {
            $set: {
              bookname: getbody.bookname,
              price: getbody.price,
              author: getbody.author,
              language: getbody.language,
              aboutAuthor: getbody.aboutAuthor,
            },
          },
          { new: true }
        )
        .then((data) => {
          res.status(200).send("update book successfully");
          console.log("update book successfully");
        })
        .catch((error) => {
          res.status(500).send(error);
          console.log(" not update book something is wrong");
        });
    } else {
      res.send("Body missing plz provide body");
      console.log("Body missing plz provide body");
    }
  } else {
    console.log("There is no id");
    res.send("There is no id");
  }
};
module.exports = {
  fetch_book_logic,
  fetch_book_logic_param,
  fetch_allbook_logic,
  add_book_logic,
  delete_book_logic,
  update_book_logic,
};
