import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteCourse } from "../store/courseSlice";
import "../styles/CourseList.css"; 

const CourseList = ({ SearchArea }) => {
  const courses = useSelector((state) => state.courses.courses);
   const dispatch = useDispatch(); //to use actions

  const filteredCourses = courses.filter(course =>
    course.title.toLowerCase().includes(SearchArea.toLowerCase())//تحويل الكل لحروف صغيره
  );

  return (
    <div className="course-list">
      {filteredCourses.length > 0 ? 
      (
        filteredCourses.map((course) => (
          <div key={course.id} className="course-item">
            <h3>{course.title}</h3>
            <p><strong>Description:</strong> {course.description}</p>
            <p><strong>Instructor:</strong> {course.instructor}</p>
            <p><strong>Duration:</strong> {course.duration}</p>
            <button onClick={() => dispatch(deleteCourse(course.id))}>Delete</button>
          </div>
        ))
      ) 
      : 
      (
        <p>No courses available.</p> // ف حاله مفيش تطابق
      )}
    </div>
  );
};

export default CourseList;
