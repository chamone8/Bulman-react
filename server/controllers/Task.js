const Task = require('../models/Task');

module.exports = {
    add: function(req, res){
        let task = new Task(req.body);

        task.save()
        .then(task => res.status(200).json(task))
        .catch( err =>{
            res.status(400).send("erro ao salvar",err);
        });

    },

    getAll: function(req, res){
        Task.find(function(err,Tasks){
            if(err){
                res.status(400).send("Erro ao buscar", err);
            }
            else{
                res.status(200).json(Tasks);
            }
        });
    },

    getById: function(req,res){
        Task.findById(req.params.id, function(err,task){
            if(err){
                res.status(400).send('Erro ao Buscar',err);
            }else{
                res.status(200).json(Task);
            }
        });
    },
    
    delete: function(req,res){
        Task.findByIdAndRemove(req.params.id,function(err,task){
            if(err){
                res.status(400).send("Erro na busca",err);
            }else{
                res.status(200).json(req.params.id);
            }
        });
    },

    Update: function(req,res){
        Task.findByIdAndUpdate(req.params.id, req.bady, {new: true}, function(err,task){
            if(err){
                res.status(400).send("Erro na busca",err);
            }else{
                res.status(200).json(task);
            }
        });
    }


}


