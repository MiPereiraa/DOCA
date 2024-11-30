// const User = require('../models/User');

// exports.createUser = async (req, res) => {
//   try {
//     const { name, sobrenome, telefone, email, password } = req.body;

//     // Validação básica
//     if (!name || !sobrenome || !telefone || !email || !password) {
//       return res.status(400).json({ message: 'Todos os campos são obrigatórios!' });
//     }

//     const newUser = new User({ name, telefone, sobrenome, email, password });
//     await newUser.save();

//     res.status(201).json({ message: 'Usuário cadastrado com sucesso!' });
//   } catch (error) {
//     console.error('Erro ao cadastrar usuário:', error);
//     res.status(500).json({ message: 'Erro ao cadastrar usuário' });
//   }
// };
