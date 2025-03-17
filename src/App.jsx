import React, { useState } from "react";
import SearchBar from "./components/SearchBar";
import CourseList from "./components/CourseList";
import AddCourse from "./components/AddCourse";
import "./index.css"; 

const App = () => {
  const [SearchArea, setSearchArea] = useState("");

  return (
    <div className="app-container">
      <h1 className="header-course"> Learn With Tech Academy</h1>
      <SearchBar SearchArea={SearchArea} setSearchArea={setSearchArea} />{/* البحث حسب المطلوب*/}
      <AddCourse />
      <CourseList SearchArea={SearchArea} />  {/* تصفيه الكورسات */}
    </div>
  );
};

export default App;
