const bcrypt = require('bcryptjs')

module.exports = {
    register: async (req, res) => {
        const { username, password } = req.body;
        const db = req.app.get("db");
    
        let user = await db.auth.check_user(username);
        if (user[0]) {
          return res.status(400).send("Username already in use");
        }
    
        let salt = bcrypt.genSaltSync(10);
        let hash = bcrypt.hashSync(password, salt);
    
        let newUser = await db.auth.register_user({
          username,
          password: hash,
          profile_pic: `https://robohash.org/${username}`
        });
        req.session.user = newUser[0];
        res.status(201).send(req.session.user);
      }
}