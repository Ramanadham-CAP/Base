import "./MainContainer.css";
import { menuItems } from "../generic/constants";
import Btable from "./Btable";

interface ContainerProps {
  name: string;
}

const MainContainer: React.FC<ContainerProps> = ({ name }) => {
  switch (name) {
    case menuItems.m1:
      return (
        <div id="container">
          <Btable />
        </div>
      );

    default:
      return (
        <div id="container">
          <strong>{name}</strong>
        </div>
      );
  }
};

export default MainContainer;
