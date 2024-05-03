import { Button } from "@mui/material";

const JobCard = ({ job }: any) => {
  return (
    <div>
      <h2>{job?.title}</h2>
      <p>{job?.company}</p>
      <p>{job?.location}</p>
      <p>{job?.description}</p>
      <p>{job?.experience}</p>
      <Button>Apply</Button>
    </div>
  );
};

export default JobCard;
