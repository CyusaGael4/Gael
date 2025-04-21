const Blog = require('../models/Blog');

exports.getAll = async (req, res) => {
  const blogs = await Blog.find().populate('author', 'username').populate('category', 'name');
  res.json(blogs);
};

exports.getOne = async (req, res) => {
  const blog = await Blog.findById(req.params.id).populate('author category');
  if (!blog) return res.status(404).json({ message: 'Blog not found' });
  res.json(blog);
};

exports.getByCategory = async (req, res) => {
  const blogs = await Blog.find({ category: req.params.id }).populate('author category');
  res.json(blogs);
};

exports.create = async (req, res) => {
  const blog = await Blog.create({ ...req.body, author: req.user._id });
  res.status(201).json(blog);
};

exports.update = async (req, res) => {
  const blog = await Blog.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(blog);
};

exports.delete = async (req, res) => {
  await Blog.findByIdAndDelete(req.params.id);
  res.json({ message: 'Blog deleted' });
};
