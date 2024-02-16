import { FC } from "react";
import "./style.scss";
interface IData {
  data?: ["Day", "Week"];
  onTabChange?: ()=>void;
}
const SwitchTabs: FC<IData> = () => {
  return (
    <div>
      <h2>This is swith tabs</h2>
    </div>
  );
};

export default SwitchTabs;
