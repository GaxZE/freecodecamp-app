import React from "react";
import "./App.css";
import Jobs from "./Jobs";

const mockJobs = [
  { title: "Junior developer", company: "Google" },
  { title: "Senior developer", company: "Apple" },
  { title: "Developer", company: "Facebook" },
];

function App() {
  return (
    <div className="App">
      <Jobs jobs={mockJobs} />
    </div>
  );
}

export default App;
