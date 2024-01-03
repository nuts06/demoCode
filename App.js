
//connect or create the database
const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/many").then(()=>console.log("Db connected")).catch((err)=>console.log(err));


// design the schema
const newSchema = new mongoose.Schema({
    name:String,
    ctype:String,
    videos:Number,
    author:String,
    active:Boolean
})

// create collections
const Course = new mongoose.model("Course",newSchema)

// create documents
const createDocument = async()=>{
    try{
        const reactCourse = new Course({
            name:"ReactJS",
            ctype:"Front End",
            videos:40,
            author:"Natasha",
            active:true
        })

        const mongoCourse = new Course({
            name:"MongoDB",
            ctype:"Database",
            videos:50,
            author:"Natasha",
            active:true
        })

        const jsCourse = new Course({
            name:"JavaScript",
            ctype:"Front End",
            videos:60,
            author:"Natasha",
            active:true
        })

        const nodeCourse = new Course({
            name:"NodeJS",
            ctype:"Back End",
            videos:80,
            author:"Natasha",
            active:true
        })

        const result = await Course.insertMany([reactCourse,mongoCourse,jsCourse,nodeCourse]);
        console.log(result)
    }catch(err){
        console.log(err)
    }
}

// createDocument();

// read the documents
const getDocument = async()=>{
    try{
        // const result = await Course.find({videos:{$gt:60}})
        // const result = await Course.find({videos:{$lt:60}})
        // const result = await Course.find({videos:{$lte:60}})
        // const result = await Course.find({videos:{$eq:60}})
        // const result = await Course.find({videos:{$ne:70}})
        // const result = await Course.find({ctype:{$in:["Back End","Database"]}})
        // const result = await Course.find({ctype:{$nin:["Back End", "Database"]}})
        // const result = await Course.find({$or:[{ctype:"Back End"},{author:"Natasha"}]})
        const result = await Course.find({$and:[{ctype:"Back End"}, {author:"Natasha"}]})
        .select({name:1})
        // .limit(1)
        // .skip(1);
        console.log(result)
    }catch(err){
        console.log(err)
    }
}

getDocument();