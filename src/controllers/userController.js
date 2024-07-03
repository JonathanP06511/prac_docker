exports.getUsers = (req, res) => {
    res.json([{ id: 1, name: 'John Doe' }, { id: 2, name: 'Jane Doe' }]);
  };
  
  exports.getUserById = (req, res) => {
    const userId = req.params.id;
    res.json({ id: userId, name: `User ${userId}` });
  };
  