"use client";

import { ActionAreaCard } from "./Card";

import img1 from "../../assets/images/projects/1.webp";
import img2 from "../../assets/images/projects/2.webp";
import img3 from "../../assets/images/projects/3.png";
import img4 from "../../assets/images/projects/4.png";
import img5 from "../../assets/images/projects/5.png";

export const Projects = () => {
  const data = [
    {
      imgAlt: "landing-page",
      imagelink: img1,
      cardTitle: "landing page",
      cardDescription:
        "landing page",
        link: 'https://hebaahmedsaleh.github.io/landing-page.github.io/'
    },
    {
        imgAlt: "hangMan",
        imagelink: img2,
        cardTitle: "HangMan",
        cardDescription:
          "React Application hangman game with specific categories",
          link: 'https://dulcet-tanuki-4888bc.netlify.app/'
      },
      {
        imgAlt: "hangMan",
        imagelink: img3,
        cardTitle: "3",
        cardDescription:
          "React Application hangman game with specific categories",
          link: 'https://dulcet-tanuki-4888bc.netlify.app/'
      },
      {
        imgAlt: "hangMan",
        imagelink: img4,
        cardTitle: "4",
        cardDescription:
          "React Application hangman game with specific categories",
          link: 'https://dulcet-tanuki-4888bc.netlify.app/'
      },
      {
        imgAlt: "hangMan",
        imagelink: img5,
        cardTitle: "5",
        cardDescription:
          "React Application hangman game with specific categories",
          link: 'https://dulcet-tanuki-4888bc.netlify.app/'
      },
  ];
  return (
    <div style={{ display: 'flex', flexDirection: 'row', gap: '1rem', maxWidth: '90%', flexWrap: 'wrap'}}>
      {data.map(({ imgAlt, imagelink, cardTitle, cardDescription }) => {
        return (
          <ActionAreaCard
            key={cardTitle}
            imgAlt={imgAlt}
            imagelink={imagelink}
            cardTitle={cardTitle}
            cardDescription={cardDescription}
          />
        );
      })}
    </div>
  );
};
