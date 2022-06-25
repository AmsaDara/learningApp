const mongoose=require('mongoose');

const Schema= mongoose.Schema;

const CourseSchema = new Schema ({
    title: {
        type: String,
        trim: true,
        required: [true, 'title is required'],
    },
    description: {
        type: String,
        trim: true,
        required: [true, 'description is required'],
    },
    cover: {
        type: String,
        required: [true, 'cover is required']
    },
     teacher: {
        type: String,
    },
    featured: {
        type: Boolean,
        default: false
    }
}, {
    timestamps: true
});


module.exports=mongoose.model('Course',CourseSchema);
