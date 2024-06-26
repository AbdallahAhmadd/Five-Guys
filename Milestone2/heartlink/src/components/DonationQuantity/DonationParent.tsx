import "./Donate.css";
import React, { useState } from "react";
import DonateButton from "../Buttons/DonateButton.tsx";
import DonationPic from "../../assets/DonationGeneral.jpeg";
import BackButton from "../Buttons/BackButton.tsx";
import { Link } from "react-router-dom";
interface DonationQuantityProps {
  maxValue?: number;
  type?: String;
  description?: String;
  id?: string;
}

function DonationParent(props: DonationQuantityProps) {
  const minValue = 1;
  const maxValue = props.maxValue || 100;
  const [rangeValue, setRangeValue] = useState(1); // You can set an initial value as needed

  // Handle changes in the range input
  const handleRangeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRangeValue(parseInt(event.target.value));
  };
  const getPercentage = () => {
    return (rangeValue / maxValue) * 100;
  };

  const percentage = getPercentage();

  return (
    <div className="beige-color-body">
      <div className="range-container">
        <div className={"back-button-transp-container"}>
          <Link to="../">
            <BackButton />
          </Link>
        </div>
        <div className="header">
          <h1>{props.type}</h1>
          <p> {props.description}</p>
          <img
            className={"delivey-guy-img"}
            src={DonationPic}
            alt="Donation box"
          />
        </div>

        <div className="scroller-container">
          <label htmlFor="customRange1" className="form-label">
            Specify The Quantity
          </label>
          <input
            type="range"
            className="form-range"
            id="customRange1"
            value={rangeValue}
            onChange={handleRangeChange}
            min={minValue} // Set minimum range value
            max={maxValue} // Set maximum range value
          />
          <div className="value-display">
            <p>{rangeValue}</p>
            <p>({percentage.toFixed(0)}%)</p>
          </div>{" "}
          {/* Display the current value and percentage in a box */}{" "}
          {/* Display the current value in a box */}
        </div>
        <div className="button-container">
          <Link to={"Transportation"}>
            <DonateButton text={"Next"} />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default DonationParent;
