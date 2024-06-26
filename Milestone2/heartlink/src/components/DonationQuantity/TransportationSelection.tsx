import DonateButton from "../Buttons/DonateButton.tsx";
import "./Donate.css";
import RadioButton from "../RadioButton/RadioButton.tsx";
import delivery from "../../assets/deliveryGuy.png";
import ScheduleSelection from "../../Donationdrop-off/ScheduleSelection.tsx";
import BackButton from "../Buttons/BackButton.tsx";
import { useState } from "react";
import { Link } from "react-router-dom";
import DonorThankYouCard from "../Card/DonorThankYouCard.tsx";

interface Props {
  type: string;
}

function TransportationSelection({ type }: Props) {
  const [selectedRadio, setSelectedRadio] = useState("");
  const [selectedTiming, setselectedTiming] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [thankYouCard, setThankYouCard] = useState(false);
  const handleClick = () => {
    if (!(selectedRadio && selectedTiming)) {
      setErrorMessage("Please fill in all fields.");
      return;
    }
    setErrorMessage("");
    setThankYouCard(true);
    return true;
  };

  const handleRadioButton = (value: string) => {
    setSelectedRadio(value);
  };
  const handleScheduleSelection = (value: string) => {
    setselectedTiming(value);
  };

  return (
    <div className={"beige-color-body"}>
      <div className="range-container">
        <div className={"back-button-transp-container"}>
          <Link to="../">
            <div>
              <BackButton />
            </div>
          </Link>
        </div>
        <div className="header">
          <h1>Pickup Info</h1>
          <img
            className="delivey-guy-img"
            style={{ width: "20%" }}
            src={delivery}
          ></img>
          <div style={{ marginTop: "30px" }}>
            <h4>Choose Type Of Pickup Vehicle</h4>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              marginTop: "20px",
              width: "100%",
            }}
          >
            <RadioButton text={"Car"} handleFilterChange={handleRadioButton} />
            <RadioButton
              text={"Truck"}
              handleFilterChange={handleRadioButton}
            />
            <RadioButton
              text={"Motorcycle"}
              handleFilterChange={handleRadioButton}
            />
          </div>
        </div>
        <div className="Donor-TimeSelection-container">
          <ScheduleSelection
            text={"Schedule the Donation Pickup"}
            onClick={handleScheduleSelection}
          />
          {errorMessage && (
            <div
              style={{
                marginTop: "2%",
                color: "red",
                textAlign: "center",
              }}
            >
              {errorMessage}
            </div>
          )}
        </div>

        <div className="button-container">
          <DonateButton text={"Finish"} onClick={handleClick} />
        </div>
      </div>
      {thankYouCard && (
        <DonorThankYouCard
          Buttontext={"Dashboard"}
          type={type}
          width={"120px"}
        />
      )}
    </div>
  );
}

export default TransportationSelection;
