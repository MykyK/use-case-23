import { CSVLink } from "react-csv";

export const CsvButton = ({ csvData, title }) => (
    <CSVLink className="downloadbtn" filename={`${title}.csv`} data={csvData}>
        Export {title} to CSV
    </CSVLink>
)