import React from "react";
import { Typography } from "@material-ui/core";

export default function Job({ job }) {
  return (
    <div className={"job"}>
      <div>
        <Typography variant="h6">{job.title}</Typography>
        <Typography variant="h5">{job.company}</Typography>
        <Typography>{job.location}</Typography>
      </div>
      <div>
        <Typography>
          {job.created_at.split(" ").splice(0, 3).join(" ")}
        </Typography>
      </div>
    </div>
  );
}
