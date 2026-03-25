export default (req, res) => {
  res.status(200).json({ 
    message: 'Welcome to APEX Scanner API',
    status: 'online'
  });
};
