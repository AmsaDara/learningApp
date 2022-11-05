const mongoose=require('mongoose');

const Schema= mongoose.Schema;

// const chapitreSchema = new ({
//     name: {
//         type: String,
//         trim: true,
//         require: [true, 'name is required']
//     },
//     contenue: {
//         type: String,
//         trim:true,
//     }
// })

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
    },
    
    // chapitre: [{
    //     name: {
    //         type: String,
    //         trim: true,
    //         require: [true, 'name is required']
    //     },
    //     contenue: {
    //         type: String,
    //         trim:true,
    //     }
    // }],
},
     {
    timestamps: true
});


module.exports=mongoose.model('Course',CourseSchema);
