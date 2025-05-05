import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Link from '@mui/material/Link'
import CardActionArea from "@mui/material/CardActionArea";

import Image from "next/image";

export const ActionAreaCard = ({
  imagelink,
  imgAlt,
  cardTitle,
  cardDescription,
  link
}: {
  imagelink: string;
  imgAlt: string;
  cardTitle: string;
  cardDescription: string;
  link: string;
}) => {
  return (
    <Card sx={{ maxWidth: 345, height: "18.75rem" }}>
      <CardActionArea>
        <Image width={300} height={200} src={imagelink} alt={imgAlt} />

        <CardContent>
          <Link href={link}>{cardTitle}</Link>

          <Typography gutterBottom variant="h5" component="link"></Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            {cardDescription}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
