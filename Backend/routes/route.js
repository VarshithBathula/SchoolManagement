const router = require('express').Router();

const { adminRegister, adminLogIn, getAdminDetail} = require('../controller/adminController.js');

const { sclassCreate, sclassList, deleteSclass, deleteSclasses, getSclassDetail, getSclassStudents } = require('../controller/classController.js');
const { complainCreate, complainList } = require('../controller/complainController.js');
const { noticeCreate, noticeList, deleteNotices, deleteNotice, updateNotice } = require('../controller/noticeController.js');
const { parentLogIn, parentRegister, getParentDetail, deleteParent } = require('../controller/parentController.js');
const {
    studentRegister,
    studentLogIn,
    getStudents,
    getStudentDetail,
    deleteStudents,
    deleteStudent,
    updateStudent,
    studentAttendance,
    deleteStudentsByClass,
    updateExamResult,
    clearAllStudentsAttendanceBySubject,
    clearAllStudentsAttendance,
    removeStudentAttendanceBySubject,
    removeStudentAttendance } = require('../controller/studentController.js');
const { subjectCreate, classSubjects, deleteSubjectsByClass, getSubjectDetail, deleteSubject, freeSubjectList, allSubjects, deleteSubjects } = require('../controller/subjectController.js');
const { teacherRegister, teacherLogIn, getTeachers, getTeacherDetail, deleteTeachers, deleteTeachersByClass, deleteTeacher, updateTeacherSubject, teacherAttendance } = require('../controller/teacherController.js');

// Admin
router.post('/admin/AdminReg', adminRegister);
router.post('/admin/AdminLogin', adminLogIn);

router.get("/admin/Admin/:id", getAdminDetail);

// Student

router.post('/student/StudentReg', studentRegister);
router.post('/student/StudentLogin', studentLogIn)

router.get("/student/Students/:id", getStudents)
router.get("/student/Student/:id", getStudentDetail)

router.delete("/student/Students/:id", deleteStudents)
router.delete("/student/StudentsClass/:id", deleteStudentsByClass)
router.delete("/student/Student/:id", deleteStudent)

router.put("/student/Student/:id", updateStudent)

router.put('/student/UpdateExamResult/:id', updateExamResult)

router.put('/student/StudentAttendance/:id', studentAttendance)

router.put('/student/RemoveAllStudentsSubAtten/:id', clearAllStudentsAttendanceBySubject);
router.put('/student/RemoveAllStudentsAtten/:id', clearAllStudentsAttendance);

router.put('/student/RemoveStudentSubAtten/:id', removeStudentAttendanceBySubject);
router.put('/student/RemoveStudentAtten/:id', removeStudentAttendance)

//Parent

router.post('/parent/ParentReg', parentRegister);
router.post('/parent/ParentLogin', parentLogIn)

router.get("/parent/Parent/:id", getParentDetail)

router.delete("/parent/Parent/:id", deleteParent)

// Teacher

router.post('/teacher/TeacherReg', teacherRegister);
router.post('/teacher/TeacherLogin', teacherLogIn)

router.get("/teacher/Teachers/:id", getTeachers)
router.get("/teacher/Teacher/:id", getTeacherDetail)

router.delete("/teacher/Teachers/:id", deleteTeachers)
router.delete("/teacher/TeachersClass/:id", deleteTeachersByClass)
router.delete("/teacher/Teacher/:id", deleteTeacher)

router.put("/teacher/TeacherSubject", updateTeacherSubject)

router.post('/teacher/TeacherAttendance/:id', teacherAttendance)

// Notice

router.post('/notice/NoticeCreate', noticeCreate);

router.get('/notice/NoticeList/:id', noticeList);

router.delete("/notice/Notices/:id", deleteNotices)
router.delete("/notice/Notice/:id", deleteNotice)

router.put("/notice/Notice/:id", updateNotice)

// Complain

router.post('/complain/ComplainCreate', complainCreate);

router.get('/complain/ComplainList/:id', complainList);

// Sclass

router.post('/class/SclassCreate', sclassCreate);

router.get('/class/SclassList/:id', sclassList);
router.get("/class/Sclass/:id", getSclassDetail)

router.get("/class/SclassStudents/:id", getSclassStudents)

router.delete("/class/Sclasses/:id", deleteSclasses)
router.delete("/class/Sclass/:id", deleteSclass)

// Subject

router.post('/subject/SubjectCreate', subjectCreate);

router.get('/subject/AllSubjects/:id', allSubjects);
router.get('/subject/ClassSubjects/:id', classSubjects);
router.get('/subject/FreeSubjectList/:id', freeSubjectList);
router.get("/subject/Subject/:id", getSubjectDetail)

router.delete("/subject/Subject/:id", deleteSubject)
router.delete("/subject/Subjects/:id", deleteSubjects)
router.delete("/subject/SubjectsClass/:id", deleteSubjectsByClass)

module.exports = router;