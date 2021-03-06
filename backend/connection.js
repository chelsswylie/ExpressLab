const { Pool } = require("pg");
const credentials = new Pool({
  user: "postgres",
  password: "Miller123!",
  host: "localhost",
  port: 5432,
  database: "ExpressShopDB",
  ssl: false,
});
module.exports = credentials;

// const { Pool } = require("pg");
// const pool = new Pool();
// // the pool will emit an error on behalf of any idle clients
// // it contains if a backend error or network partition happens
// pool.on("error", (err, client) => {
//   console.error("Unexpected error on idle client", err);
//   process.exit(-1);
// });
// // callback - checkout a client
// pool.connect((err, client, done) => {
//   if (err) throw err;
//   client.query("SELECT * FROM shopping_cart WHERE id = $1", [1], (err, res) => {
//     done();
//     if (err) {
//       console.log(err.stack);
//     } else {
//       console.log(res.columns[0]);
//     }
//   });
// });
// // promise - checkout a client
// pool.connect().then((client) => {
//   return client
//     .query("SELECT * FROM shopping_cart WHERE id = $1", [1])
//     .then((res) => {
//       client.release();
//       console.log(res.columns[0]);
//     })
//     .catch((err) => {
//       client.release();
//       console.log(err.stack);
//     });
// });
// // async/await - check out a client
// (async () => {
//   const client = await pool.connect();
//   try {
//     const res = await client.query(
//       "SELECT * FROM shopping_cart WHERE id = $1",
//       [1]
//     );
//     console.log(res.columns[0]);
//   } finally {
//     // Make sure to release the client before any error handling,
//     // just in case the error handling itself throws an error.
//     client.release();
//   }
// })().catch((err) => console.log(err.stack));
