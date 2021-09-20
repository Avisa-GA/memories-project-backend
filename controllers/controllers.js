import PostMessage from "../models/postMessages.js";

export const getPosts = async (req, res) => {
  try {
    const postMessages = await PostMessage.find();
    res.status(200).json(postMessages);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createPost = async (req, res) => {
  let newPost = new PostMessage(req.body);
  try {
    await newPost.save();
    res.status(201).json(newPost);
  } catch (error) {
    console.log(error.message);
  }
};
