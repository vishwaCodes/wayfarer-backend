const db = require('../models');

const index = (req, res) => {
  db.Post.find({}, (err, allPosts) => {
    if (err) return console.log(err);
    res.json(allPosts);
  });
};

const show = (req, res) => {
  db.Post.findById(req.params.id, (err, foundPost) => {
    if (err) return console.log(err);
    res.json(foundPost);
  });
};

const create = (req, res) => {
  db.Post.create(req.body, (err, newPost) => {
    if (err) return console.log(err);
    res.json(newPost);
  });
};

const update = (req, res) => {
  db.Post.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true },
    (err, updatedPost) => {
      if (err) return console.log(err);

      res.json(updatedPost);
    }
  );
};

const destroy = (req, res) => {
  db.Post.findByIdAndDelete(req.params.id, (err, deletedPost) => {
    if (err) return console.log(err);

    res.json(deletedPost);
  });
};

module.exports = {
  index,
  show,
  create,
  update,
  destroy,
};
