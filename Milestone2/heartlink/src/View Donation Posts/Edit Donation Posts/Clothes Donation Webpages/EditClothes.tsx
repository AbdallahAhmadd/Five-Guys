import { useState } from "react";
import EditDropDown from "../../../components/DropDown/EditDropDown.tsx";
import EditRadioButton from "../../../components/RadioButton/EditRadioButton.tsx";
import Template1 from "../../../components/Templates/Template1.tsx";

interface ClothesProps {
  id: string;
  ageGroup: string;
  gender: string;
  category: string;
  season: string;
  material: string;
}

function EditClothes(props: ClothesProps) {
  const [gender, setGender] = useState(props.gender);
  const [season, setSeason] = useState(props.season);
  return (
    <Template1
      leftPanelDiv={
        <div className="leftText">
          <p /> 2 of 2<h2> Creating your post!</h2>
          <p> Almost Done.. </p>
        </div>
      }
      rightPanelDiv={
        <div className="bloodDonation-container">
          <div className="header-container">
            <h1>Clothes</h1>
          </div>
          <div className="rest-container" style={{ top: "10em" }}>
            <h4> Who will be wearing these clothes?</h4>
            <EditDropDown
              options={["Infants", "Kids", "Adults"]}
              selected={props.ageGroup}
              width={"280px"}
            />
            <p />
            <form className={"radioButtons-form"} method="get">
              <EditRadioButton
                text={"Male"}
                checked={gender == "Male"}
                setChecked={setGender}
              />
              <EditRadioButton
                text={"Female"}
                checked={gender == "Female"}
                setChecked={setGender}
              />
            </form>
            <p style={{ marginTop: "10px" }}></p>
            <h4 style={{ marginBottom: "15px" }}>
              What kind of clothes do you need?
            </h4>
            <EditDropDown
              options={[
                "Specify category",
                "Belts",
                "Blouses",
                "Coats",
                "Dresses",
                "Gloves",
                "Hats",
                "Jackets",
                "Jeans",
                "Pajamas",
                "Pants",
                "Scarves",
                "Shirts",
                "Shorts",
                "Skirts",
                "Socks",
                "Suits",
                "Sweaters",
                "Swimwear",
                "Tops",
                "Trousers",
                "Undergarments",
              ]}
              selected={props.category}
              width={"280px"}
            />
            <p />
            <h6>Please specify clothing season</h6>
            <form className="radioButtons-form" method="get">
              <EditRadioButton
                text={"Summer"}
                checked={season === "Summer"}
                setChecked={setSeason}
              />
              <EditRadioButton
                text={"Spring"}
                checked={season === "Spring"}
                setChecked={setSeason}
              />
              <EditRadioButton
                text={"Fall"}
                checked={season === "Fall"}
                setChecked={setSeason}
              />
              <EditRadioButton
                text={"Winter"}
                checked={season === "Winter"}
                setChecked={setSeason}
              />
            </form>
            <p />
            <h6 style={{ marginBottom: "15px" }}>
              Please specify clothing material
            </h6>
            <EditDropDown
              options={[
                "Cashmere",
                "Chiffon",
                "Corduroy",
                "Cotton",
                "Denim",
                "Fleece",
                "Flannel",
                "Leather",
                "Linen",
                "Lycra",
                "Nylon",
                "Polyester",
                "Rayon",
                "Silk",
                "Satin",
                "Spandex",
                "Tweed",
                "Velvet",
                "Wool",
              ]}
              selected={props.material}
              width={"280px"}
            />
          </div>
        </div>
      }
      rightPanelButtonText={"Next"}
      hasButton={true}
      forwardPath={"../cont/" + props.id}
      backButtonPath={"../../ViewPosts"}
    />
  );
}

export default EditClothes;
