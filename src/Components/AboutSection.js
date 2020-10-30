import React from "react";
import RowImageText from "./RowImageText";
import "bootstrap/dist/css/bootstrap.min.css";
import about from "../Assets/images/about_picture.png";
const AboutSection = () => {
  return (
    <div>
      <RowImageText
        title="¿Quién es Foodies?"
        secondaryText="Elit irure ad nulla id elit laborum nostrud mollit irure. Velit reprehenderit sunt nulla enim aliquip duis tempor est culpa fugiat consequat culpa consectetur Lorem. Reprehenderit dolore culpa irure eiusmod minim occaecat et id minim ullamco. "
        image={about}
      />
    </div>
  );
};

export default AboutSection;
