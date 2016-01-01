/**
* User.js
*
* @description :: user records for the app
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {

    firstName: {
      type: 'string',
      required: true
    },

    lastName: {
      type: 'string',
      required: true
    },

    email: {
      type: 'string',
      email: true,
      required: true,
      unique: true
    },

    username: {
    	type: 'string',
    	required: true,
    	unique: true
    }


  }
};

