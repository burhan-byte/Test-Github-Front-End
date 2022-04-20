import React from "react";
import { Link } from "@mui/material";
import Button from "@mui/material/Button";

export default function About() {
  return (
    <div>
      <h2>About</h2>
      <Link href="/">
        <Button variant="contained">home</Button>
      </Link>
    </div>
  );
}
