import mongoose from 'mongoose';

const cartProductSchema = new mongoose.Schema({
    productId : {
        type : mongoose.Schema.ObjectId,
        ref : 'product'
    },
    quantity : {
        type : Number,
        default : 1
    },
    userID : {
        type : mongoose.Schema.ObjectId,
        ref : 'User'
    },

},{
    timestamps : true
})

const CartProductModule = mongoose.model('cartProduct',cartProductSchema)

export default CartProductModule
