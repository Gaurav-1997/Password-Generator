import { useState } from "react";
import Button from "./components/Button";
import Checkbox from "./components/Checkbox";
import Strength from "./components/Strength";
import useGeneratePassword from "./hooks/use-password-generator";
import "./styles.css";

export default function App() {
  const [length, setLength] = useState(4);
  const [copied, setCopied] = useState(false);

  const [checkBoxData, setCheckBoxData] = useState([
    { title: "Include Uppercase letter", state: false },
    { title: "Include Lowercase letter", state: false },
    { title: "Include Numbers", state: false },
    { title: "Include Symbols", state: false }
  ]);

  const { password, errorMsg, generatePassword } = useGeneratePassword();

  const handlecheckbox = (i) => {
    const updatedcheckboxData = [...checkBoxData];
    updatedcheckboxData[i].state = !updatedcheckboxData[i].state;
    setCheckBoxData(updatedcheckboxData);
    // console.log(checkBoxData);
    // setShowError(false);
  };

  const handleCopy = () => {
    console.log("copy clicked");
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 5000);
    navigator.clipboard
      .writeText(password)
      .then(
        () => {
          console.log("clipboard successfully set")
          /* clipboard successfully set */
        },
        (e) => {
          console.log("clipboard write failed", e.message)
          /* clipboard write failed */
        },
      );
  };

  return (
    <div className="container">
      {password && (
        <div className="header">
          <div className="password">{password}</div>
          {/* <button onClick={handleCopy}> Copy </button> */}
          <Button text="Copy" onClick={handleCopy} />
        </div>
      )}
      {copied && <div className="copied"> Copied </div>}

      <div className="charLength">
        <span>
          <label>character length</label>
          <label>{length}</label>
        </span>
        <input
          type="range"
          value={length}
          min={4}
          max={20}
          onChange={(e) => {
            setLength(e.target.value);
            console.log(length);
          }}
        />
      </div>
      <div className="checkboxes">
        {checkBoxData.map((checkbox, i) => {
          return (
            <>
              <Checkbox
                state={checkbox.state}
                onChange={() => handlecheckbox(i)}
                title={checkbox.title}
              />
            </>
          );
        })}
      </div>
      <div className="errormsg">{errorMsg}</div>

      <Strength password={password} />
      <Button
        text="Generate Password"
        customClass="generateBtn"
        onClick={() => generatePassword(checkBoxData, length)}
      />
    </div>
  );
}
