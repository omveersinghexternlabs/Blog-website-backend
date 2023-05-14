import BlogsModel from "../models/Blog.js";
import CommentsModel from "../models/Comment.js";
import Model from "../models/Blog.js";


class blogsController {
    // for getting all person whether User or Admin...
        static allBlogsDetail = async (req, res) => {
            const blogs = await BlogsModel.find({isDeleted : false, isActive : true});
            res.send(blogs);
        }

        static addBlog = async (req, res) => { 
            const blogToSave = BlogsModel(req.body);
            try {
                if(blogToSave){
                    blogToSave.created_by = req.user._id;
                    
                    console.log("\n\n++++ blog to save +++++\n\n", blogToSave);
                    const savedBlog = await blogToSave.save();
                    const savedComment = await CommentsModel({
                        blogid : savedBlog._id
                    }).save();
                    res.send({"message" : "Successfully saved data...", savedBlog})
                } else{
                    res.send({"message" : "no any data received from the client side"});
                }
            } catch (error) {
                res.send({"message" : "Some error happened in add blogs", error});
            }
        }
}

export default blogsController;