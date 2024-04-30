import DropDown from "../components/DropDown/DropDown.tsx";
import { useState } from "react";
import RadioButton from "../components/RadioButton/RadioButton.tsx";
import Template1 from "../components/Templates/Template1.tsx";
import "./createPost.css";
function CreatePost() {
  const [selectedCategory, setSelectedCategory] = useState("");

  const categories = [
    "Blood donations",
    "Clothes",
    "Food",
    "Health supplies",
    "School supplies",
    "Toys",
  ];

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
  };

  return (
    <Template1
      leftPanelDiv={
        <div className="leftText">
          <p /> 1 of 2<h2> Creating your post!</h2>
          <p> Only few steps ahead .. </p>
        </div>
      }
      rightPanelDiv={
        <div className="createPost-div">
          <form className="form-container">
            <h2> What kind of items do you need?</h2>
            <label className="createPost-label">
              Please choose a category of the item you request
            </label>
            <DropDown
              options={categories}
              selected={"Specify category"}
              width={"270px"}
              onChange={handleCategoryChange}
            />
          </form>
          {selectedCategory === "School supplies" && (
            <div>
              <br />
              <h4>Do you need books or stationary?</h4>
              <form className="radioButtons-form" method="get">
                <RadioButton text={"Books"} />
                <RadioButton text={"Stationary"} />
              </form>
            </div>
          )}
        </div>
      }
      rightPanelButtonText={"Next"}
    />
  );
}

export default CreatePost;
