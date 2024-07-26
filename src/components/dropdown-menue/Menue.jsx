import React, { useState } from "react";
import { DropDown } from "./DropDown";
import Icon from "./Icon";
const Menue = ({ icons }) => {
  const [isOpen, setOpen] = useState(false);
  const closeHandler = () => setOpen(!isOpen);
  return (
    <div>
      <img
        src="../images/icon-menue.png"
        alt=""
        height="24"
        width="24"
        onClick={closeHandler}
      ></img>
      {isOpen && (
        <DropDown>
          {icons.map((icon) => (
            <Icon
              key={icon.id}
              url={icon.url}
              src={icon.src}
              name={icon.name}
            />
          ))}
        </DropDown>
      )}
    </div>
  );
};

export default Menue;
