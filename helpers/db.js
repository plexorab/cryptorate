const mongoose = require('mongoose');
mongoose.Promise = require('q').Promise;

const Asset = require('../models/Asset');

const saveAssets = async (assets) => {
   Asset.insertMany(assets)
      .then((res) => {
         console.log('Data inserted');
         return 'OK';
      })
      .catch((err) => {
         console.log(err);
         return err;
      });
};

module.exports = {
  saveAssets,
};
