
const mongoose=require('mongoose')
const Post=mongoose.model('posts')
var EventEmitter=require('events')

    function heyo(){
    var emitter=new EventEmitter();
    console.log("heyo")
    Post.find({ }).
    then(reslt=>{
        console.log(reslt)
       // res.send("found")
      return emitter.emit("hii",reslt)
       // console.log("hiui")
    })
    return emitter;
    //return em.emit('hii')
    }

exports.heyo=heyo

module.exports.heyo=heyo;