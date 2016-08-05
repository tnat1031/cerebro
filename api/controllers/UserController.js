/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	// what to do when we hit /user/new
	"new": function (req, res) {
		res.view();
	}
};

