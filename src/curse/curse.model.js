import mongoose,{Schema} from "mongoose";

const  cursesSchema  = mongoose.Schema({
    name: {
        type: String,
        require: true
    }, 
    desciption:{
        type: String,
        require: true
    },
    user: {
        typeo: Schema.ObjectId,
        require: true,
        ref: 'user'
    }
},{
    verionKey: false
})

export default mongoose.model('curse', cursesSchema)