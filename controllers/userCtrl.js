// const db = require('../models');

// const index = (req, res) => {
//   db.User.find({}, (err, allUsers) => {
//     if (err) return console.log(err);
//     res.json(allUsers);
//   });
// };

// const show = (req, res) => {
//   db.User.findById(req.params.id, (err, foundUser) => {
//     if (err) return console.log(err);
//     res.json(foundUser);
//   });
// };

// const create = (req, res) => {
//   // console.log(req.body)
//   db.User.create(req.body, (err, newUser) => {
//     if (err) return console.log(err);

//     res.json(newUser);
//   });
// };

// const update = (req, res) => {
//   // console.log('User to update ID =', req.params.id)

//   db.User.findByIdAndUpdate(
//     req.params.id,
//     req.body,
//     { new: true },
//     (err, updatedUser) => {
//       res.json(updatedUser);
//     }
//   );
// };

// const destroy = (req, res) => {
//   // console.log(req.params.id)

//   db.User.findByIdAndDelete(req.params.id, (err, deleteUser) => {
//     if (err) return console.log(err);
//     res.json(deleteUser);
//   });
// };

// module.exports = {
//   index,
//   show,
//   create,
//   update,
//   destroy,
// };
