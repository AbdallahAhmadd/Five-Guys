import DonateButton from "../Buttons/DonateButton.tsx";
import "./Donate.css";
import RadioButton from "../RadioButton/RadioButton.tsx";
import delivery from "../../assets/deliveryGuy.png";
import ScheduleSelection from "../../Donationdrop-off/ScheduleSelection.tsx";
function TransportationSelection() {
  return (
    <>
      <div className="range-container">
        <div className="header">
          <h1>Pickup Info</h1>
          <img style={{ width: "20%" }} src={delivery}></img>
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
            <RadioButton text={"Car"} />
            <RadioButton text={"Truck"} />
            <RadioButton text={"Motorcycle"} />
          </div>
        </div>

        <div className="Donor-TimeSelection-container">
          <ScheduleSelection text={"Schedule the Donation Pickup"} />
        </div>

        <div className="button-container">
          <DonateButton text={"Finish"} />
        </div>
      </div>
    </>
  );
}

export default TransportationSelection;