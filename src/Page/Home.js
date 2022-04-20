import React from "react";
import { Link } from "@mui/material";
import Button from "@mui/material/Button";

export default function Home() {
  return (
    <div>
      <h2>Home</h2>
      <Link href="about">
        <Button variant="contained">About</Button>
      </Link>
    </div>
  );
}
