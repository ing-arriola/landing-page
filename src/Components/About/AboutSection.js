import React from "react";
import RowImageText from "./RowImageText";
import "bootstrap/dist/css/bootstrap.min.css";
import about from "../../Assets/images/About/about_picture.svg";
const AboutSection = () => {
  return (
    <div>
      <RowImageText
        title="¿Quién es Foodies?"
        secondaryText="Elit irure ad nulla id elit laborum nostrud mollit irure. Velit reprehenderit sunt nulla enim aliquip duis tempor est culpa fugiat consequat culpa consectetur Lorem. Reprehenderit dolore culpa irure eiusmod minim occaecat et id minim ullamco. "
        image={about}
        text1="LA COMIDA ES"
        text2="NUESTRO ARTE"
      />
    </div>
  );
};

export default AboutSection;
