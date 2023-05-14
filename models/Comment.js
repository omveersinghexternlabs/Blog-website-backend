import mongoose from "mongoose";


// defining Schema
const commentSchema = mongoose.Schema({
    blogid : {type: String, required : true, trim: true},
    comments : [{
        userID : {
            type : String,
            trim : true
        },
        commentData : {
            type : String,
            trim : true
        },
        date : {
            type: Date,
            default : Date.now()
        }
    }]
})


// defineing model
const commentModel = mongoose.model("Comment", commentSchema);

export default commentModel;