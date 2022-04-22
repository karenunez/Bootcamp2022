import React from "react";
import "../styles/blog.css";

const CreatePost = () => {
    return(
        <div className="container">
            <form id="create-post-form">
                <div className="">
                    <label>Title</label>
                    <input
                    type="text"
                    name="title"
                    placeholder="Add a title"
                    />
                </div>
                <div className="">
                    <input>Body</input>
                    <textarea
                    type="text"
                    name="body"
                    placeholder="Add a body to the post"
                    />
                </div>
                <div className="">
                    <label>Image</label>
                    <input
                    type="file"
                    name="image"
                    />
                </div>
                <div className="">
                    <button
                    type="button"
                    >Cancel</button
                    type="button"
                    >Save</button>
                </div>
                </div>
            </form>
        </div>
    );
}

export default CreatePost;