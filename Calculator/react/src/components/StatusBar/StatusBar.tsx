import BarIcon from '../BarIcon';
import BatteryIcon from '../BatteryIcon';
import WifiIcon from '../WifiIcon';
import './StatusBarStyles.css';

export default function StatusBar() {
  return (
    <div className="status">
      <time>4:20</time>
      <div className="camera"></div>
      <span>
        <BarIcon />
        <WifiIcon />
        <BatteryIcon />
      </span>
    </div>
  );
}
