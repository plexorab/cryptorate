const mongoose = require('mongoose');

const { Schema } = mongoose;

// const blogSchema = new Schema({
//     title:  String, // String is shorthand for {type: String}
//     author: String,
//     body:   String,
//     comments: [{ body: String, date: Date }],
//     date: { type: Date, default: Date.now },
//     hidden: Boolean,
//     meta: {
//       votes: Number,
//       favs:  Number
//     }
//   });

const AssetSchema = new Schema({
  asset_id: String,
  name: String,
  type_is_crypto: Number,
  data_start: String,
  data_end: String,
  data_quote_start: Date,
  data_quote_end: Date,
  data_orderbook_start: Date,
  data_orderbook_end: Date,
  data_trade_start: Date,
  data_trade_end: Date,
  data_symbols_count: Number,
  volume_1hrs_usd: Number,
  volume_1day_usd: Number,
  volume_1mth_usd: Number,
  price_usd: Number,
  id_icon: String,
});

module.exports = mongoose.model('Asset', AssetSchema);
