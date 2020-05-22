const router = require("express").Router();
const pool = require("./connection");

// TEST 3: Below GET /cart-items responds with a json
// array of all cart items from database
// TEST 4: Responds with status code 200
router.get("/cart-items", (req, res) => {
  pool
    .query((data = "SELECT * FROM shopping_cart WHERE product=$1::text"), [
      "shirt",
    ])
    .then((data) => {
      res.status(200);
      res.json(data.columns);
    });
});
// SHORTHAND NOTE: If not using a query in the methods below, can use a function called
// getTable(req, res) {
// pool.query("").then(result => {
// res.json(result.rows);
// })}
//

// 5. GET /cart-items/:id - responds with a JSON object of the item with the given ID
// 6. GET /cart-items/:id - responds with status code 200
// 7. GET /cart-items/:id - responds with status code 404 when not found <<<<NEED TO IMPLEMENT<<<<<<<<

router.get("/cart-items/:id", (req, res) => {
  const {
    body: { product },
    params: { id },
  } = req;
  pool
    .query("update shopping_cart set product=$1::text where id=$2::int", [
      product,
      id,
    ])
    .then(() => {
      res.status(200);
      res.json({
        message: `Updated Product: ${product}, successful`,
      });
    });
});

// TEST 8, POST/cart-items - add a cart item to the database
// using the JSON body of the request. Database generates a unique ID for that item.
// 9. POST /cart-items - responds with the added cart item object as JSON and status
// code 201.

router.post("/cart-items", (req, res) => {
  pool
    .query("insert into shopping_cart (product) values($1::text)", [
      req.body.name,
    ])
    .then((data) => {
      res.status(201);
      res.json({
        message: "Information Added",
        data: data.columns,
      });
    })
    .catch((err) => {
      res.json({
        message: err,
      });
    });
});

// 10. PUT /cart-items/:id - Updates the cart item in the database that has the given id.
// 11. PUT /cart-items/:id - Responds with the updated cart item as JSON and status code
// 200
router.put("/cart-items/:id", (req, res) => {
  const {
    body: { product },
    params: { id },
  } = req;
  pool
    .query("update shopping_cart set product=$1::text where id=$2::int", [
      product,
      id,
    ])
    .then(() => {
      res.status(200);
      res.json({
        message: `Updated Product: ${product}, successful`,
      });
    });
});

// 12. DELETE /cart-items/:id - Removes the item from the database that has the given ID.
// 13. DELETE /cart-items/:id - Responds with no content and status code 204.
router.delete("/cart-items/:id", (req, res) => {
  const {
    params: { id },
  } = req;
  pool.query("delete from shopping_cart where id=$1::int", [id]).then(() => {
    res.status(204);
  });
});

// router.get("/cart-items", (req, res) => {
//   const { maxPrice, prefix, pageSize } = req.query;
//   let items;
//   let cached = {};
//   if (maxPrice) {
//     items = cartItems.filter((x) => x.price =< Number(maxPrice));
//     cached["maxPrice"] = items.sort((a, b) => a-b);
//   }

//   if (pageSize) {
//     items = cached["maxPrice"]
//     ? cached ["maxPrice"].slice(0, Number(pageSize))
//   }
// })

module.exports = router;
