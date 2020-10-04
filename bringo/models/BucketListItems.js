const {Schema, model} = require('mongoose');

const BucketListItemsSchema = new Schema({
        description: {
            type:String,
            required:true,
        },
        date: {
            type: Date,
            default: Date.now,
        }
})

const BucketListItem = model('bucketListItem', BucketListItemsSchema)

module.exports = BucketListItem