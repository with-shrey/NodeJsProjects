const ConversationModel  = require('../model/conversation.model')

module.exports = {
    newMessage: function (req,res,next) {
        var conversation = new ConversationModel()
        conversation.to = req.body.to
        conversation.from = req.body.token
        conversation.message = req.body.message
        conversation.save()
        //Emit to socket
        req.app.io.in(req.body.to+"_"+req.body.token).emit(req.body.message)
        req.app.io.in(req.body.token+"_"+req.body.to).emit(req.body.message)
        res.json({
            error: false,
            message:"Sent Successfully"
        })
    },
    getAllMessages : function (req,res,next) {
        ConversationModel.find({
            $or:[
                {to: req.body.to},
                {to: req.body.token},
                {from: req.body.to},
                {from: req.body.token}
            ]
        },function (err,messages) {
            if (err)
                next(err)
            res.json({
                error: false,
                messages
            })
        })
    }
};