import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  courses: [    // داتا افتراضيه
    { id: 1, title: "React Basics", description: "Learn React from scratch", instructor: "eng/Ahmed", duration: "4 weeks" },
    { id: 2, title: "JavaScript Advanced", description: "Master JavaScript", instructor: "eng/islam Takalah", duration: "6 weeks" }
  ]
};

const courseSlice = createSlice({
  name: "courses",
  initialState,
  reducers: {
    //اضافه كورس
    addCourse: (state, action) => {
      state.courses.push({ id: Date.now(), ...action.payload });
    },
    //حذف كورس
    deleteCourse: (state, action) => {
      state.courses = state.courses.filter(course => course.id !== action.payload);
    }
  }
});

export const { addCourse, deleteCourse } = courseSlice.actions;
export default courseSlice.reducer;
