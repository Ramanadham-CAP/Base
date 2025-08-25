import "./MainContainer.css";
import { menuItems } from "../generic/constants";
import BTable from "./BTable";
import BTabBar from "./BTabBar";
import FinanceTable from "./FinanceTable";

interface ContainerProps {
  name: string;
}

const MainContainer: React.FC<ContainerProps> = ({ name }) => {
  switch (name) {
    case menuItems.m1:
      return (
        <div id="container">
          <BTabBar />
        </div>
      );
    case menuItems.m2:
      return (
        <div id="container">
          <FinanceTable />
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
