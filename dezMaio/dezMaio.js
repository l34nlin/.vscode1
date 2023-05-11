const express =require("express");
const server = express();

server.use(express.json());

let students = [
    {
        id:1,
        name: "samuel",
        description: "da a bund",
        isDone:true
    },
    {
        id:2,
        name: "lucas",
        description: "faz porr nehuma",
        isDone:true
    }
]
server.get("/students",(req,res)=>{
    res.json({
            students
       
    })
})
server.post("/students",(req,res)=>{
    const newStudent ={
        id: students.length +1,
        name: req.body.name,
        description: req.body.description,
        isDone: req.body.isDone
    }
    students.push(newStudent)
    res.json({
        student: newStudent
    })
})
server.put("/students/:id",(req,res)=>{
    const id = Number( req.params.id);

    const student = students.find((student)=>{
        return student.id == id
    
})
if(!student){
    return res.status(404).json({message: "product not found"});
}
    student.name = req.body.name,
    student.description = req.body.description,
    student.isDone = req.body.isDone

    res.json({
        student
})
})
server.delete("/students/:id",(req,res)=>{
    const id = Number(req.params.id);
    students = students.filter((student)=>{
        return student.id !== id;
    })
    res.status(204).send();
})
const port = 8080;
server.listen(port,()=>{
    console.log(`server is runing in port ${port}`);
})


