const UserModel = require("../models/User");

const userController = {
    create: async(req, res) => {
        try {
            
          const user = {
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
          };
          
          const response = await UserModel.create(user);

          res.status(201).json({response, msg: "Usuário criado com Sucesso!"});
        } catch (error) {
            console.log(error);
        }
    }
};

module.exports = userController;