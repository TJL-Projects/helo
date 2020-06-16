const bcrypt = require('bcryptjs')

module.exports = {
    register: async (req, res) => {
        const { username, password } = req.body;
        const db = req.app.get("db");
    
        let user = await db.auth.check_user(username);
        if (user[0]) {
          return res.status(400).send("Username taken");
        }
    
        let salt = bcrypt.genSaltSync(10);
        let hash = bcrypt.hashSync(password, salt);
    
        let [newUser] = await db.auth.register_user({
          username,
          password: hash,
          profile_pic: `https://robohash.org/${username}`
        });
        req.session.user = newUser[0];
        res.status(201).send(req.session.user);
      },

      login: async (req, res) => {
          const {username, password} = req.body
          const db = req.app.get('db')

          let user = await db.auth.check_user(username)
          if(!user[0]){
              return res.status(400).send('No user found')
          }

          const authenticated = bcrypt.compareSync(password, user[0].password)
          if(!authenticated) {
              return res.status(401).send('Username or password incorrect')
          }

          delete user[0].password

          req.session.user = user[0]
          res.status(202).send(req.session.user)
      },

      userInfo: async (req, res) => {
          const db = req.app.get('db')
          const {user_id} = req.session
          
          let user = await db.auth.get_user(user_id)

          console.log(req.session)
        //   delete user[0].password

          res.status(200).send(user)
      },

      getPosts: async (req, res) => {
          const db = req.app.get('db')

          const {userPosts, searchInput} = req.query
          const {user_id} = req.session

          if (userPosts === 'true' && searchInput !== '') {
            let posts =  await db.post.get_posts(+user_id);
            let filterPost = posts.filter(e => e.title.includes(searchInput));
            return res.status(200).send(filterPost)
         } 
         if (userPosts === 'false' && searchInput === '') {
            let allPosts = await db.post.get_all_posts();
            let filtered = allPosts.filter(e => (e.author_id !== +user_id)? e : null)
            return res.status(200).send(filtered)
         } 
         if (userPosts === 'false' && searchInput !== '') {
            let postAll = await db.post.get_all_posts();
            // console.log(postAll)
            let userPost = postAll.filter(e => (e.author_id !== +user_id)? e : null);
            // console.log(userPost)
            let postsFiltered = userPost.filter(e => e.title.includes(searchInput));
            return res.status(200).send(postsFiltered); 
         }
         if (userPosts === 'true' && searchInput === '') {
            let getAllPosts = await db.post.get_all_posts();
            // console.log('hello')
            return res.status(200).send(getAllPosts);
         }
      }
}