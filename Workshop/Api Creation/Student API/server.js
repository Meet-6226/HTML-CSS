const express=require('express')
const cors=require('cors');
const app=express()
app.use(cors());
app.use(express.json())

const PORT=8000

const students=[
    {
        id:1,
        name:"Meet",
        branch:"AIML"
    },
    {
        id:2,
        name:"Gaurav",
        branch:"IT"
    },
    {
        id:3,
        name:"Manas",
        branch:"Aerospace"
    },
    {
        id:4,
        name:"Tejas",
        branch:"Civil"
    },
    {
        id:5,
        name:"Soumitra",
        branch:"DS"
    }
]

app.get('/',(request,response)=>{
    response.send("Welcome to Student API");
})

app.get('/students',(request,response)=>{
    response.json(students);
})

app.get('/students/:id',(request,response)=>{
    const student=students.find(c=>c.id===parseInt(request.params.id));
    if(!student){
        return response.status(404).send("Student Not Found")
    }
    response.json(student);
})

app.post('/students', (request, response) => {
    const newStudent = {
        id: students.length + 1,
        name: request.body.name,
        branch: request.body.branch 
    };
    students.push(newStudent);
    response.status(200).json({ message: "Student Data Added Successfully", data: newStudent });
});

app.put('/students/:id', (request, response) => {
    const student = students.find(c => c.id === parseInt(request.params.id));
    if (!student) {
        return response.status(404).send("Student Data Not Found");
    }

    student.name = request.body.name;
    student.branch = request.body.branch;

    response.status(200).json({ message: "Student updated successfully", data: student });
});

app.delete('/students/:id',(request,response)=>{
    const studentIndex=students.findIndex(
        c=>c.id === parseInt(request.params.id)
    );
    if(studentIndex === -1){
        return response.status(400).json({message:"Student Not Found"})
    }

    students.splice(studentIndex,1);

    response.status(200).json({message:"Student Data Deleted Successfully"});
})    

app.listen(PORT,()=>{
    console.log(`server started on port no ${PORT}`);
    
})
