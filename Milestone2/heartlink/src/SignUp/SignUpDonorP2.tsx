import { Link } from "react-router-dom";
import logo from "../assets/minilogo.png";
import Button from "../components/Buttons/Button.tsx";
import BackButton from "../components/Buttons/BackButton.tsx";
import InputBox from "../components/InputBox/InputBox.tsx";
import Map from "../components/map/Map.tsx";
import FileUploader from "../components/FileUploader/FileUploader.tsx";
import EditRadioButton from "../components/RadioButton/EditRadioButton.tsx";
import { useState } from "react";

function SignUpDonorP2() {
  const [specialization, setSpecialization] = useState("");
  return (
    <div>
      <>
        <div className="signUpMain">
          <div className="leftPartSignupB">
            <div className="logo-containerx">
              <Link to="/" className="noLink">
                <img src={logo} className="logo" alt="logo" />
                <label className="logoText">Dashboard</label>
              </Link>
            </div>
            <div className="rightText">
              <p className="leftTextProgress"> 3 of 3 </p>
              <h2 className="leftTextFirst">Sign up as a Donor!</h2>
              <p className="leftTextSecond"> Only few steps ahead .. </p>
            </div>
          </div>

          <div className="rightPanelSignUpA">
            <div className="rightPanel-containerS">
              <h2 style={{ position: "relative", bottom: "5%" }}>
                Apply for probono
              </h2>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <EditRadioButton
                  text={"Doctor"}
                  margin={"0 8%"}
                  checked={specialization === "Doctor"}
                  setChecked={setSpecialization}
                />
                <EditRadioButton
                  text={"Teacher"}
                  margin={"0 8%"}
                  checked={specialization === "Teacher"}
                  setChecked={setSpecialization}
                />
                <EditRadioButton
                  text={"Later"}
                  margin={"0 8%"}
                  checked={specialization === "Later"}
                  setChecked={setSpecialization}
                />
              </div>
              <div className="dataHolderJJ">
                {specialization === "Doctor" ? (
                  <>
                    <div className="twoInputHolderS">
                      <InputBox
                        type={"text"}
                        label={"Speciality"}
                        width={"200px"}
                      />
                      <InputBox
                        type={"text"}
                        label={"Clinic"}
                        width={"200px"}
                      />
                    </div>
                    <div className="twoInputHolderS">
                      <div className="MapHolderJJ">
                        <label>Clinic Location</label>
                        <Map height={"100%"} width={"200px"} />
                      </div>
                      <div className="MapHolderJJ">
                        <label>Upload Certificate</label>
                        <FileUploader width={"200px"} />
                      </div>
                    </div>
                  </>
                ) : specialization === "Teacher" ? (
                  <>
                    <div className="twoInputHolderS">
                      <InputBox
                        type={"text"}
                        label={"Subject"}
                        width={"200px"}
                      />
                      <InputBox
                        type={"text"}
                        label={"School"}
                        width={"200px"}
                      />
                    </div>
                    <div className="twoInputHolderS">
                      <div className="MapHolderJJ">
                        <label>Upload Certificate</label>
                        <FileUploader width={"200px"} />
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="twoInputHolderS"></div>
                  </>
                )}
              </div>
            </div>
            <div className="footerSignUp">
              <div className="footerButtons-containerSignUp">
                <Link to="../../Donor/">
                  <Button text={"Next"} />
                </Link>
                <Link to="../Donor/1">
                  <BackButton />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </>
    </div>
  );
}

export default SignUpDonorP2;