const bcrypt= require('bcrypt');
const jwt= require('jsonwebtoken');
const secretKey= process.env.SECRET_KEY;


function generateMeAToken(student) {
    return jwt.sign({
        id: student._id,
        email: student.email,
        role: student.role,
        isGranted: student.isGranted,
    }, secretKey, {
        expiresIn: '365d'
    });
}

function comparePassword(givenPassword, studentPassword) {
    return bcrypt.compareSync(givenPassword, studentPassword)
    
}

module.exports={
    generateMeAToken:generateMeAToken,
    comparePassword:comparePassword
}