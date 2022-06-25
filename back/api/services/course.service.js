const addNewCourse = (Course) => async (course) =>{
    const _course = new Course(course);
    try {
        const result = await _course.save();
        if(result){
            return({
                status:'success',
                message:'course saved successfully',
                payload:result
            })
        }
    } catch (error) {
        return({
            status:'fail',
            message:'course fail to be saved',
            payload: error
        });
    }
};

const courseId = (Course)=>async (id)=>{
    //console.log(id);
    try {
        const result = await Course.findById(id);
        if(result){
            return({
                status:'success',
                message:'content of a course by its identifier',
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

const getFeaturedCourse = (Course)=>async ()=>{
    try {
        const result = await Course.find({'featured':true});
        if(result){
            return({
                status:'success',
                message:'All Featured Courses',
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



module.exports = (Course)=>{
    return({
        addNewCourse:addNewCourse(Course),
        courseId:courseId(Course),
        getFeaturedCourse:getFeaturedCourse(Course),
        //getCourseById : getCourseById(Course),
        //updateCourse: updateCourse(Course),
    });
};