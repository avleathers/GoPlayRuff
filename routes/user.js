import User from '../models/userInfo';

module.exports = api => {
	api.route('/users').get(User.list);
	api.route('/users/:userId').get(User.get);
	api.route('/users/:userId').put(User.put);
	api.route('/users/').post(User.post);
	api.route('/users/:userId').delete(User.delete);
};

app.get("/users", function(req, res) {
	db.userInfo.find({})
	.then(function(dbUser) {
	  res.json(dbUser);
	})
	.catch(function(err) {
	  res.json(err);
	});
   });
   