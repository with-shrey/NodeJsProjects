const UserModel  = require('../model/user.model')

module.exports = {
  registerUser: async function (req,res,next) {
         UserModel.findOne({username: req.body.username},function (err,user) {
             if (err){
                 next(err)
             }
             if (user){
                 res.json({
                     error:false,
                     message: 'Successfully LoggedIn- Already Registered',
                     token:user._id
                 })
             } else{
                 user = new UserModel()
                 user.username = req.body.username
                 user.save()
                 res.json({
                     error:false,
                     message: 'Successfully LoggedIn - New User',
                     token:user._id
                 })
             }
         })


  },

  getUser: function(req,res,next) {
    UserModel.find({},(err,users) => {
        if(err){
            next(err)
        }else{
            res.json({
                error:false,
                users
            })
        }
    })
  },

  deleteUser: (req,res,next) => {

  }
};