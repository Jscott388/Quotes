var mongoose = require('mongoose')

var QuoteSchema = new mongoose.Schema({
 name: String,
 quote: String
})
mongoose.model('Quote', QuoteSchema);
