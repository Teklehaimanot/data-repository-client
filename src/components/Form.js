import React, { useState } from 'react';
const Form = ({ addDataset }) => {
  const [dataset_name, setDatasetName] = useState('');
  const [data_type, setDatasetFormat] = useState('STATA');
  const [study_type, setStudyType] = useState('Survey');
  const [sample_size, setSampleSize] = useState('');
  const [area_coverage, setAreaCoverage] = useState('National');
  const [sex_coverage, setSexCoverage] = useState('Male');
  const [data_collection_start_date, setStartDate] = useState('');
  const [data_collection_end_date, setEndDate] = useState('');
  const [file, setFile] = useState([]);
  // const url = BASE_URL;

  const handleSubmit = async (e) => {
    console.log(file);
    e.preventDefault();
    if (
      !dataset_name &&
      !data_type &&
      !study_type &&
      !sample_size &&
      !area_coverage &&
      !area_coverage &&
      !data_collection_start_date &&
      !data_collection_end_date
    ) {
      alert('please fill all input filds');
    }
    try {
      addDataset(
        {
          dataset_name,
          data_type,
          sample_size,
          study_type,
          area_coverage,
          sex_coverage,
          data_collection_start_date,
          data_collection_end_date,
        },
        file
      );
      clearDataSet();
      // addDataset(file);
    } catch (error) {
      alert(error);
    }
  };

  const clearDataSet = () => {
    setDatasetName('');
    setDatasetFormat('');
    setStudyType('');
    setSampleSize('');
    setAreaCoverage('');
    setSexCoverage('');
    setStartDate('');
    setEndDate('');
  };
  return (
    <div className="mx-20 my-10 bg-secondary rounded-lg shadow-xl ">
      <form className="flex flex-wrap justify-between " onSubmit={handleSubmit}>
        <div className="flex flex-col p-4 w-1/3 shadow-xl my-10">
          <label className="text-primary text-2xl py-2" htmlFor="">
            Dataset Name
          </label>
          <input
            type="text"
            onChange={(e) => setDatasetName(e.target.value)}
            value={dataset_name}
            placeholder="Dataset Name"
            className=" p-2 border border-primary text-xl rounded-sm focus:blue focus:border-blue"
            required
          />
        </div>
        <div className="flex flex-col p-4 w-1/3 shadow-xl my-10">
          <label className="text-primary text-2xl py-2" htmlFor="">
            Dataset format
          </label>
          <select
            onChange={(e) => setDatasetFormat(e.target.value)}
            value={data_type}
            className=" p-2 border border-primary text-xl rounded-sm focus:blue focus:border-blue"
          >
            <option value="STATA">STATA</option>
            <option value="CSV">CSV</option>
            <option value="ACCDB">ACCDB</option>
            <option value="CDF">CDF</option>
          </select>
        </div>
        <div className="flex flex-col p-4 w-1/3 shadow-xl my-10">
          <label className="text-primary text-2xl py-2" htmlFor="">
            Study Type
          </label>
          <select
            onChange={(e) => setStudyType(e.target.value)}
            value={study_type}
            className=" p-2 border border-primary text-xl rounded-sm focus:blue focus:border-blue"
          >
            <option value="Survey">Survey</option>
            <option value="Cros-sectional">Cros-sectional</option>
            <option value="GPS Data">GPS Data</option>
          </select>
        </div>
        <div className="flex flex-col p-4 w-1/3 shadow-xl my-10">
          <label className="text-primary text-2xl py-2" htmlFor="">
            Sample Size
          </label>
          <input
            type="number"
            onChange={(e) => setSampleSize(e.target.value)}
            value={sample_size}
            placeholder="0"
            className=" p-2 border border-primary text-xl rounded-sm focus:blue focus:border-blue"
            required
          />
        </div>
        <div className="flex flex-col p-4 w-1/3 shadow-xl my-10">
          <label className="text-primary text-2xl py-2" htmlFor="">
            Area Coverage
          </label>
          <select
            onChange={(e) => setAreaCoverage(e.target.value)}
            value={area_coverage}
            className=" p-2 border border-primary text-xl rounded-sm focus:blue focus:border-blue"
          >
            <option value="National">National</option>
            <option value="Subnational">Subnational</option>
            <option value="Zone">Zone</option>
            <option value="Wereda">Wereda</option>
          </select>
        </div>
        <div className="flex flex-col p-4 w-1/3 shadow-xl my-10">
          <label className="text-primary text-2xl py-2" htmlFor="">
            Sex Coverage
          </label>
          <select
            onChange={(e) => setSexCoverage(e.target.value)}
            value={sex_coverage}
            className=" p-2 border border-primary text-xl rounded-sm focus:blue focus:border-blue"
          >
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Both">Both</option>
          </select>
        </div>
        <div className="flex flex-col p-4 w-1/3 shadow-xl my-10">
          <label className="text-primary text-2xl py-2" htmlFor="">
            Data Collection Start Date
          </label>
          <input
            type="date"
            placeholder="Start Date"
            onChange={(e) => setStartDate(e.target.value)}
            value={data_collection_start_date}
            className=" p-2 border border-primary text-xl rounded-sm focus:blue focus:border-blue"
            required
          />
        </div>
        <div className="flex flex-col p-4 w-1/3 shadow-xl my-10">
          <label className="text-primary text-2xl py-2" htmlFor="">
            Data Collection End Date
          </label>
          <input
            type="date"
            placeholder="End Date"
            onChange={(e) => setEndDate(e.target.value)}
            value={data_collection_end_date}
            className=" p-2 border border-primary text-xl rounded-sm focus:blue focus:border-blue"
            required
          />
        </div>
        <div className="flex flex-col p-4 w-1/3 shadow-xl my-10">
          <label className="text-primary text-2xl py-2" htmlFor="">
            Upload File
          </label>
          <input
            type="file"
            placeholder=""
            onChange={(e) => setFile(e.target.files[0])}
            className=" p-2 bg-white border border-primary text-xl rounded-sm focus:blue focus:border-blue"
          />
        </div>
        <div className="flex px-5 my-10">
          <input
            type="submit"
            value="Save"
            className="border hover:bg-blue hover:text-secondary px-5 py-5 border-primary text-2xl rounded-lg focus:blue focus:border-blue"
          />
        </div>
      </form>
    </div>
  );
};

export default Form;
