import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteCourse } from "../store/courseSlice";
import "../styles/CourseList.scss"; 

interface Course {
  id: number;
  title: string;
  description: string;
  instructor: string;
  duration: string;
}

interface Arr {
  courses: {
    courses: Course[];
  };
}

interface type {
  SearchArea: string;
}

const CourseList = ({ SearchArea }: type) => {
  const courses = useSelector((state: Arr) => state.courses.courses);
  const dispatch = useDispatch();

  const filteredCourses = courses.filter(course =>
    course.title.toLowerCase().includes(SearchArea.toLowerCase())
  );

  return (
    <div className="course-list">
      {filteredCourses.length > 0 ? (
        filteredCourses.map((course) => (
          <div key={course.id} className="course-item">
            <h3>{course.title}</h3>
            <p><strong>Description:</strong> {course.description}</p>
            <p><strong>Instructor:</strong> {course.instructor}</p>
            <p><strong>Duration:</strong> {course.duration}</p>
            <button onClick={() => dispatch(deleteCourse(course.id))}>Delete</button>
          </div>
        ))
      ) : (
        <p className="no-courses">No courses available.</p>
              )}
    </div>
  );
};

export default CourseList;
