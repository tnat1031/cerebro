/**
* Comic.js
*
* @description :: model for a single comic issue
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {

    title: {
        type: 'string'
    },

    issue_num: {
        type: 'integer'
    },

    publisher: {
        type: 'string'
    }

  }
};

