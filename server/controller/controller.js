var userdb = require('../model/model')

//create and save new user
exports.create=(req,res)=>{
  //validate request
  if(!req.body){
    res.status(404).send({message :"content can't be empty"})
    return;
  }

  //new user
  const user=new userdb({
    name:req.body.name,
    email:req.body.email,
    gender:req.body.gender,
    status:req.body.status
  })
 
   console.log(user)
  //save user in the database
  user 
     .save(user)
     .then(data =>{
        //res.send(data)
        res.redirect('/')
     })
     .catch(err=>{
        res.status(500).send({
            message : err.message || 'Some error occured while create'
        })
     })

}

//update a new identified user by user id
exports.update=(req,res)=>{
    if(!req.body){
        return res.status(500).send({
            message:"Data cannot be empty"
        })
    }

    const id = req.params.id;
    userdb.findByIdAndUpdate(id,req.body)
    .then(data =>{
        if(!data){
        res.status(404).send({
            message : `Cannot update user with ${id} \n May be user not found`
        })
        }else{
            res.send(data)
        }
    })
    .catch(err =>{
        res.status(500).send({
            message :"Error update user information"
        })
    })
}

//retrieve and return all users/retrieve and return a single user
exports.find=(req,res)=>{
    
    if(req.query.id){
        const id = req.query.id;

    userdb.findById(id)
    .then(data =>{
        if(!data){
            res.status(404).send({
                message:`Not found user with id ${id}`
            })
        }else{
            res.send(data)
        }
    })
    .catch(err=>{
        res.status(500).send({
            message : `Error retrieving user with id ${id}`
        })
    })
    
    
    }else{
    userdb.find()
    .then(user=>{
        res.send(user)
    })
    .catch(err => {
        res.status(500).send({message : err.message || "Error retrieving the record"})
    })
    }
}

//delete a user with spercified user id in the request
exports.delete=(req,res)=>{
    const id =req.params.id;

    userdb.findByIdAndDelete(id)
    .then(data =>{
        if(!data){
        res.status(404).send({
            message : `Cannot delete user with ${id} \n May be id is wrong`
        })
        }else{
            res.send({
                message:`User was deleted successfully...!`
            })
        }
    })
    .catch(err =>{
        res.status(500).send({
            message :"Could not delete user with id : "+id
        })
    })
}