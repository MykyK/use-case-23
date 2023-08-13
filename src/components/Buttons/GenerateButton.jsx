import { useState } from "react";
import { GenerateFakeDataHelper, getCsvCreditsData, getCsvTitlesData } from "./helpers"
import { CsvButton } from "./CsvButton";
import './Buttons.css'

export const GenerateButton = () => {
  const [data, setData] = useState(null)

  const onClick = () => {
    setData(GenerateFakeDataHelper())
  }
  
  return (
    <div className="button_wrapper">
      <button className="generate_button" onClick={onClick}>Generate</button>
      { data &&  
        <div className="csv_buttons_wrapper">
          <CsvButton title="Titles" csvData={getCsvTitlesData(data.titles)}/>
          <CsvButton title="Credits" csvData={getCsvCreditsData(data.credits)}/>
        </div>
      }
    </div>
  )
}