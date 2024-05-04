import { useState } from "react";
import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  Modal,
} from "@mui/material";

type JobCardProps = {
  job: any;
};

const JobCard = ({ job }: JobCardProps) => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const descriptionWords = job?.jobDetailsFromCompany
    .split(" ")
    .slice(0, 20)
    .join(" ");

  return (
    <Card
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        minWidth: 100,
        maxWidth: 300,
        transition: "transform 0.5s",
        "@media (min-width: 300px)": {
          maxWidth: "50%",
        },
        "@media (min-width: 600px)": {
          maxWidth: "70%",
        },
        "@media (min-width: 900px)": {
          maxWidth: 300,
        },
        "&:hover": {
          transform: "scale(1.05)",
        },
      }}
    >
      <CardContent sx={{ display: "flex", gap: 2 }}>
        <CardMedia
          component="img"
          sx={{ width: 50, height: 50 }}
          image={job?.logoUrl}
          alt="Company logo"
        />
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Typography
            sx={{
              fontSize: "13px",
              fontWeight: "600",
              marginBottom: "3px",
              color: "#8b8b8b",
            }}
          >
            {job?.companyName}
          </Typography>
          <Typography sx={{ fontSize: "14px" }}>{job?.jobRole}</Typography>
          <Typography>{job?.location}</Typography>
        </Box>
      </CardContent>

      <CardContent>
        <Box sx={{ display: "flex", gap: 1 }}>
          <Typography fontWeight={400} fontSize={14}>
            Estimated Salary: ₹{job?.minJdSalary ? job?.minJdSalary : "0"} - ₹
            {job?.maxJdSalary} LPA
          </Typography>
        </Box>
      </CardContent>
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          sx={{ fontSize: "1rem", lineHeight: "1.5", fontWeight: "500" }}
          component="div"
        >
          About Company:
        </Typography>
        <div className="description-wrapper">
          <Typography
            sx={{ fontSize: "14px" }}
            variant="body2"
            color="text.secondary"
          >
            {descriptionWords}{" "}
            {job?.jobDetailsFromCompany.split(" ").length > 20 && "..."}
          </Typography>
          <CardActions className="show-more-button-container">
            {job?.jobDetailsFromCompany.split(" ").length > 20 && (
              <Button className="show-more-button" onClick={toggleModal}>
                Show More
              </Button>
            )}
          </CardActions>

          <div className="gradient-overlay"></div>
        </div>
        <Typography
          sx={{
            fontSize: "13px",
            fontWeight: "600",
            marginBottom: "3px",
            color: "#8b8b8b",
          }}
        >
          Minimum Experience
        </Typography>
        <Typography sx={{ fontSize: "14px", lineHeight: "1.5" }}>
          {job?.minExp ? job?.minExp : "0"} years
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          sx={{
            width: "100%",
            backgroundColor: "#55efc4",
            color: "black",
            fontWeight: "500",
            padding: "18px",
            paddingTop: "8px",
            marginTop: "5px",
            margin: "0px",
            "&:hover": {
              backgroundColor: "#55efc4",
            },
          }}
        >
          Easy Apply
        </Button>
      </CardActions>
      <Modal
        open={showModal}
        onClose={toggleModal}
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        <Box
          sx={{
            bgcolor: "background.paper",
            p: 2,
            maxHeight: "80vh",
            maxWidth: "50%",
            overflowY: "auto",
          }}
        >
          <Typography
            variant="h6"
            component="h2"
            textAlign="center"
            fontWeight="bold"
            p={2}
          >
            Job Description
          </Typography>
          <Typography>{job?.jobDetailsFromCompany}</Typography>
        </Box>
      </Modal>
    </Card>
  );
};

export default JobCard;
