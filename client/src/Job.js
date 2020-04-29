import React from "react";

export default function Job({ job }) {
  return (
    <div className={"job"}>
      <span>{job.title}</span>
      <span>{job.company}</span>
    </div>
  );
}
