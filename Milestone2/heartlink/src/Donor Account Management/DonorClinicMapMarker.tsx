import InputBox from "../components/InputBox/InputBox.tsx";
import DonateButton from "../components/Buttons/DonateButton.tsx";
import "./donorAccountMangPage.css";
import Map from "../components/map/Map.tsx";
import { useEffect, useState } from "react";

interface Props {
  setCurrentStep: Function;
}

function DonorClinicAddress(props: Props) {
  const [address, setAddress] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isUnderReview, setUnderReview] = useState(false);
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isUnderReview) {
      timer = setTimeout(() => {
        props.setCurrentStep(0);
      }, 5000);
    }
    return () => {
      clearTimeout(timer);
    };
  }, [isUnderReview]);
  function handleFinishClick() {
    if (!address.trim()) {
      setErrorMessage("Please fill in the Address field.");
    } else {
      setErrorMessage("");
      setUnderReview(true);
    }
  }

  return (
    <>
      {/*main container for probono info*/}
      <div className="probono-info-container">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "70%",
          }}
        >
          <h2>Clinic Location</h2>
          <div style={{ padding: "0 4%" }}>
            <div
              style={{
                marginTop: "10%",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <h5 style={{ marginRight: "10%", width: "41%" }}>
                Enter Address
              </h5>
              <InputBox
                width={"99%"}
                label={"Enter Full Address"}
                type={"string"}
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>

            <div
              style={{
                marginTop: "10%",
                display: "flex",
                flexDirection: "row",
              }}
            >
              <div onClick={handleFinishClick}>
                <DonateButton text={"Finish"} />
              </div>
              {errorMessage && (
                <div
                  style={{
                    display: "flex",
                    color: "red",
                    marginLeft: "10px",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {errorMessage}
                </div>
              )}
              {isUnderReview && (
                <h3 style={{ marginLeft: "10px", color: "#01A95D" }}>
                  Your Data is Under Review!
                </h3>
              )}
            </div>
          </div>
        </div>
        <Map height={"270px"} width={"250px"} />
      </div>
    </>
  );
}

export default DonorClinicAddress;
