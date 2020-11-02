import React from "react";
import RowTextImage from "../HeroSection/RowTextImage";
import image from "../../Assets/images/MenuHeader/menu_hamburger.svg";
import background from "../../Assets/images/MenuHeader/subtract_menu.svg";
const MenuHeader = () => {
  return (
    <div>
      <RowTextImage
        headerText="Cada sabor es una nueva experiencia"
        secondaryText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque pharetra malesuada in imperdiet lectus sit enim."
        image={image}
        background={background}
      />
    </div>
  );
};

export default MenuHeader;
