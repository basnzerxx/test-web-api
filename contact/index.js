var express = require('express')
var router = express.Router()
var listName =  [{id:1,Fname :'Nut',Lname:'Su',age:'22',email:'5616@gmail.com'},
{id:2,Fname :'Wi',Lname:'Jam',age:'22',email:'wijam@gmail.com'},
{id:3,Fname :'Ati',Lname:'kom',age:'21',email:'smoo@gmail.com'},
{id:4,Fname :'panu',Lname:'panpan',age:'23',email:'nuna@gmail.com'},
{id:5,Fname :'thana',Lname:'kam',age:'21',email:'aonza@gmail.com'},
{id:6,Fname :'pat',Lname:'tane',age:'20',email:'sword@gmail.com'}]

//get all listName
// router.get('/', (req, res) => {
//         res.json(listName)
//     });

    //Nuttanon post id
    router.post('/',(req,res)=>{
        var add = req.body;
        add.id=listName.push(add)
        res.json({Message:'complete add'})
    })  

    //get get id
    router.get('/:id', (req, res) => {       
    res.json(listName[--req.params.id])
    });
        
module.exports = router