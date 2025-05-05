const User = require("../models/User");

exports.createUser = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({ error: "Nombre, correo electrónico y contraseña son obligatorios." });
    }

    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) {
      return res.status(409).json({ error: "Ya existe un usuario con ese correo electrónico." });
    }

    const user = await User.create({ name, email, password, role }); // incluye password
    res.status(201).json(user);
  } catch (err) {
    console.error("Error al crear usuario:", err);
    res.status(500).json({ error: "Error del servidor." });
  }
};

exports.getUsers = async (_req, res) => {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: "Error al obtener usuarios." });
  }
};
