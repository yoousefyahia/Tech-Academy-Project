import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addCourse } from "../store/courseSlice";
import "../styles/AddCourse.scss"
const AddCourse = () => {
  const dispatch = useDispatch();
  const [course, setCourse] = useState({ title: "", description: "", instructor: "", duration: "" });   // intial state for all

  const handleChange = (e) => {
    setCourse({ ...course, [e.target.name]: e.target.value });
  };
  
// update value
  const handleSubmit = (e) => {
    e.preventDefault();
    if (course.title && course.description && course.instructor && course.duration) {
      dispatch(addCourse(course));
      setCourse({ title: "", description: "", instructor: "", duration: "" });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="course-form">
    <div className="holder">
      <input type="text" name="title" placeholder="Course Title" value={course.title} onChange={handleChange} required />
      <input type="text" name="description" placeholder="Course Description" value={course.description} onChange={handleChange} required />
      <input type="text" name="instructor" placeholder="Instructor Name" value={course.instructor} onChange={handleChange} required />
      <input type="text" name="duration" placeholder="Course Duration" value={course.duration} onChange={handleChange} required />
      <button type="submit">Add Course</button>
    </div>
  </form>
  
  );
  
};

export default AddCourse;
