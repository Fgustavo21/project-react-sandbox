import "./styles.css";
import Menu from "./Menu";
import Biografia from "./Biografia";
import ProfileImage from "./ProfileImage";
import ColoredFrame from "./ColoredFrame";

export default function App() {
  return (
    <div className="App">
      {
        <div className="frame-blue">
          <ColoredFrame color="blue">
            <Menu />
            <p className="espacamento"></p>
            <h2>Felipe Marques</h2>
            <p className="espacamento"></p>
            <ProfileImage />
            <Biografia />
          </ColoredFrame>
        </div>
      }
    </div>
  );
}
