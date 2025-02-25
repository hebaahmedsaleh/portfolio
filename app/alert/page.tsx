import Head from "next/head";
import styles from "../../styles/Home.module.css";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
import WarningIcon from "@mui/icons-material/Warning";
import InfoIcon from "@mui/icons-material/Info";

import { Alert, Typography } from "@mui/material";

export default function Home() {
  return (
    <div className={styles.container}>
      <Alert
        icon={<CheckIcon fontSize="inherit" />}
        color="success"
        variant="filled"
      >
        <Typography> your action was successful. </Typography>
      </Alert>

      <br />
      <br />
      <br />

      <Alert
        icon={<CloseIcon fontSize="inherit" />}
        color="error"
        variant="filled"
      >
        <Typography> your action was successful. </Typography>
      </Alert>

      <br />
      <br />
      <br />

      <Alert
        icon={<WarningIcon fontSize="inherit" />}
        color="warning"
        variant="filled"
      >
        <Typography> your action was successful. </Typography>
      </Alert>

      <br />
      <br />
      <br />

      <Alert
        icon={<InfoIcon fontSize="inherit" />}
        color="info"
        variant="filled"
      >
        <Typography> your action was successful. </Typography>
      </Alert>
    </div>
  );
}
