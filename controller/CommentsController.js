import CommentModel from "../models/Comment.js";
import BlogsModel from "../models/Blog.js";


class CommentsController {
    static postComment = async (req, res) => {
        const { id } = req.params;
        console.log("id : ", id);
        console.log("req.user : ", req.user);

        
        const blog = await BlogsModel.findOne({_id : id});
        if(blog){
            const commentData = await CommentModel.findOne({blogid : id});
            console.log("first : ", commentData);

            if(commentData){
                const savedComment = await CommentModel.findByIdAndUpdate({_id : commentData._id},
                    {
                        $push: {
                            comments: {
                                userID : req.user._id, 
                                commentData : req.body.commentData
                            }
                        }
                    });
                    console.log(savedComment);
                res.send({ "message": "Comment is posted Successfully...", savedComment });
            }
            else{
                res.send({"message ": "CommentData is not returning any value... "});
            }
        }
        else{
            res.send({ "message": "No Blog exist on this Blog Id..." });
        }

    }
}

export default CommentsController;