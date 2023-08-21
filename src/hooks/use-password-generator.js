import { useState } from "react";

const useGeneratePassword = () => {
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const generatePassword = (checkBoxData, length) => {
    let charset = "",
      generatedPassword = "";

    const selectedOption = checkBoxData.filter((check) => check.state);
    // console.log("length: ", length);
    // console.log(selectedOption);

    if (selectedOption.length === 0) {
      setErrorMsg("Please select an option");
      setPassword("");
      return;
    }

    selectedOption.forEach((element) => {
      switch (element.title) {
        case "Include Uppercase letter":
          charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
          break;
        case "Include Lowercase letter":
          charset += "abcdefghijklmnopqrstuvwxyz";
          break;
        case "Include Numbers":
          charset += "1234567890";
          break;
        case "Include Symbols":
          charset += "!@#$%^&*(){}[]?><";
          break;
        default:
          break;
      }
    });

    // console.log("charset:" + charset);
    // console.log("charset[3]:" + charset[3]);

    for (let index = 0; index < length; index++) {
      let randomIndex = Math.floor(Math.random() * charset.length);
      // console.log(randomIndex);
      generatedPassword += charset[randomIndex];
    }
    // console.log(generatedPassword);
    setPassword(generatedPassword);
    setErrorMsg("");
  };

  return { password, errorMsg, generatePassword };
};

export default useGeneratePassword;
