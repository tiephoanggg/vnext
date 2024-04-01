import express from 'express';
import bodyParser from 'body-parser';
import routeTeacher from './routes/teachers';
import routeClassroom from './routes/classrooms';
import routeClass from './routes/classes'
import routeStudent from './routes/students'
import routeSubject from './routes/subjects'


const app = express();
const port = 3000;


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

;
app.use('/teachers', routeTeacher);
app.use('/classrooms', routeClassroom);
app.use('/classes', routeClass);
app.use('/students', routeStudent);
app.use('/subjects', routeSubject)
app.listen(port, () => {
    console.log(`app listening on port:http://localhost:3000`);
})