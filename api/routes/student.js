const Product=require('../../models/product')

module.exports = function(router){
    router.get('/student',function(req,res){
        
        Product.find({},(err,student)=>{
            if(err){
                res.json({success:false,message:err});
            }else{
            
                if(!product){
                    res.json({success:false,message:'No student found.'});
                }else{
                    res.json({success:true,student:student});
                }
            }

        })
    })

   
    router.post('/student',function(req,res){
        let note=new Student(req.body)
        note.save(function(err,note){
            if(err){
                return res.status(400).json(err)
            }res.status(200).json(note)
        })
    })


    router.put('/updateStudent',(req,res)=>{
        if(!req.body._id){
            res.json({success:false,message:'No student id is provided'});
        }
        else{
            Student.findOne({_id:req.body._id},(err,student)=>{
                if(err){
                    res.json({success:false,message:'Not a valid student id'});
                }else{
                    student.StudentName=req.body.StudentName;
                    student.Studentid=req.body.Studentid;
                    student.Studentcourse=req.body.Studentcourse;
                    
                    
                    student.save((err)=>{
                        if(err){
                            res.json({success:false,message:err});
                        }else{
                            res.json({success:true,student:student});
                        }
                    });

                }
    
            });
        }
    });

    
    router.delete('/deleteStudent/:id',(req,res)=>{
        
        if(!req.params.id){
            res.json({success:false,message:'No id provided'});
        }else{
            
            Student.findOne({_id:req.params.id},(err,student)=>{
               
                if(err){
                    res.json({success:false,message:'Invalid id'});
                }else{
                    
                    product.remove((err)=>{
                        if(err){
                          res.json({success:false,message:err});
                        }else{
                            res.json({success:true,student:student});
                        }
                    });
                }
            });
        }
    });

    
}