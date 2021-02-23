const db = require('./models');

const posts = [
  {
    "title": "SF-random blog",
    "body": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe assumenda iste aut aperiam totam, praesentium natus, quis quod nobis aspernatur consectetur molestias distinctio. Dicta ratione porro at similique asperiores debitis odit temporibus nesciunt eum fugiat quisquam inventore illum expedita possimus atque ullam iure architecto blanditiis quaerat, ab iste magni delectus?",
    
  },
  {
    "title": "LA-random blog",
    "body": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe assumenda iste aut aperiam totam, praesentium natus, quis quod nobis aspernatur consectetur molestias distinctio. Dicta ratione porro at similique asperiores debitis odit temporibus nesciunt eum fugiat quisquam inventore illum expedita possimus atque ullam iure architecto blanditiis quaerat, ab iste magni delectus?",
    
  },
  {
    "title": "London-random blog",
    "body": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe assumenda iste aut aperiam totam, praesentium natus, quis quod nobis aspernatur consectetur molestias distinctio. Dicta ratione porro at similique asperiores debitis odit temporibus nesciunt eum fugiat quisquam inventore illum expedita possimus atque ullam iure architecto blanditiis quaerat, ab iste magni delectus?",
    
  },
];

db.Post.create(posts, (err, allPosts) => {
  if (err) {
    console.log(err);
    process.exit();
  }
  console.log(`Created posts ${posts}.`);
  process.exit();
});
