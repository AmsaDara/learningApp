const {generateMeAToken,comparePassword} = require('../helpers/auth.helpers');
const ROLES = require('../helpers/student.validations').roles;

const register = (Student) => async (student) =>{
    const _student = new Student(student);
    try {
        const result = await _student.save();
        if(result){
            return({
                status:'success',
                message:'student saved successfully',
                payload:result
            })
        }
    } catch (error) {
        return({
            status:'fail',
            message:'student fail to register',
            payload: error
        });
    }
};



const authenticate = Student => async (email,password)=>{
    try {
        const student = await Student.findOne({
            email: email
        });
        if (comparePassword(password, student.password)) {
            const token = generateMeAToken(student);
            return ({
                status: "success",
                message: "user authenticated succssfully!!!",
                payload: {
                    student: student.toJSON(),
                    // ROLES: roles.toJSON(),
                    token: token
                }
            });
        } else {
            return ({
                status: "error",
                message: "Invalid email or password!!!",
                payload: null
            })
        }
    } catch (error) {
        return ({
            status: "error",
            message: "student can't authenticate",
            payload: null
        });
    }
}

const getAllStudent = (Student) => async()=>{
    try {
        const result = await Student.find();
        if(result){
            return({
                status:'success',
                message:'All Student',
                payload:result
            })
        }
    } catch (error) {
        return({
            status:'fail',
            message:'Sorry',
            payload: error
        });
    }
}

const getStudentById = Student => async(id)=>{
    
}

const updateStudent = Student =>(id,newStudent)=>{
    
}

module.exports = (Student)=>{
    return({
        register:register(Student),
        authenticate: authenticate(Student),
        getAllStudent:getAllStudent(Student),
        getStudentById : getStudentById(Student),
        updateStudent: updateStudent(Student),
    });
};