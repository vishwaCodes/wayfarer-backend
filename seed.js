const db = require('./models');

const cities = [
  {
    city: 'San Francisco, US',
    posts: [],
  },
  {
    city: 'London, UK',
    posts: [],
  },
  {
    city: 'Los Angeles, US',
    posts: [],
  },
  {
    city: 'Seattle, US',
    posts: [],
  },
  {
    city: 'New York, US0',
    posts: [],
  },
];
//Delete All Cities
db.City.deleteMany({}, (err, deletedCities) => {
  if (err) {
    console.log(err);
    process.exit();
  }

  console.log('Citys deleted successfully');

  //Create New Cities
  db.City.create(cities, (err, allCities) => {
    if (err) {
      console.log(err);
      process.exit();
    }
    console.log(`Created ${allCities.length} Citys successfully`);
    process.exit();
  });
});
