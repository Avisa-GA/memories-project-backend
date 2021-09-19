import PostMessage from "../models/postMessages";

export const rootRoute = (req, res) => {
  res.send("Welcome to Memories App 👩🏻‍💻");
};

export const getPosts = async (req, res) => {
  try {
    const postMessages = await PostMessage.find();
    res.status(200).json(postMessages);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
export const createPost = (req, res) => {
  const post = req.boby;
  const newPost = new PostMessage(post);
  try {
    newPost.save();
    res.status(201).json(newPost);
  } catch (error) {
    res.status(408).json({ message: error.message });
  }
};
