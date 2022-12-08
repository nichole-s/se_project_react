import { useState, useContext, useEffect } from "react";
import "./ToggleSwitch.css";
import CurrentTemperatureUnitContext from "../../contexts/CurrentTemperatureUnitContext";

const ToggleSwitch = () => {
  const { currentTemperatureUnit, handleToggleSwitchChange } = useContext(
    CurrentTemperatureUnitContext
  );

  const [isChecked, setIsChecked] = useState(currentTemperatureUnit === "C");
  useEffect(
    () => setIsChecked(currentTemperatureUnit === "C"),
    [currentTemperatureUnit]
  );

  return (
    <label className="temperature-switch">
      <input
        className="temperature-checkbox"
        name="temperature-checkbox"
        type="checkbox"
        checked={isChecked}
        onChange={handleToggleSwitchChange}
        value={currentTemperatureUnit}
      />
      <div className="temperature-slider" />
      <div className="temperature-labels">
        <span>F</span>
        <span>C</span>
      </div>
    </label>
  );
};

export default ToggleSwitch;
