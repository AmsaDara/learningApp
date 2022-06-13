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

const getNonFeatureCourse = (Course)=>async ()=>{
    try {
        const result = await Course.find({'featured':false});
        if(result){
            return({
                status:'success',
                message:'All non Featured Courses',
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
        getNonFeatureCourse:getNonFeatureCourse(Course),
        getFeaturedCourse:getFeaturedCourse(Course),
        //getCourseById : getCourseById(Course),
        //updateCourse: updateCourse(Course),
    });
};