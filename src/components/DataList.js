import { useState } from 'react';
import DataSetTitle from './DataSetTitle';
import ListItem from './ListItem';

const DataList = () => {
  const [dataset, setDataset] = useState([
    {
      dataset_name:
        'Prevalence and Incidence of , and Risk Factors for, HIV -1 infection among factory workers in Ethiopia , 1997-2001',
      data_type: 'STATA	',
      sample_size: 1679,
      area_coverage: 'National',
      sex_overage: 'Both',
      data_ollection_start_date: '2/1/1997',
      data_collection_end_date: '12/30/2001',
      study_type: 'Cros-Sectional',
    },
    {
      dataset_name:
        'Prevalence and Incidence of , and Risk Factors for, HIV -1 infection among factory workers in Ethiopia , 1997-2001',
      data_type: 'STATA	',
      sample_size: 1679,
      area_coverage: 'National',
      sex_overage: 'Both',
      data_ollection_start_date: '2/1/1997',
      data_collection_end_date: '12/30/2001',
      study_type: 'Cros-Sectional',
    },
    {
      dataset_name:
        'Prevalence and Incidence of , and Risk Factors for, HIV -1 infection among factory workers in Ethiopia , 1997-2001',
      data_type: 'STATA	',
      sample_size: 1679,
      area_coverage: 'National',
      sex_overage: 'Both',
      data_ollection_start_date: '2/1/1997',
      data_collection_end_date: '12/30/2001',
      study_type: 'Cros-Sectional',
    },
  ]);
  return (
    <div className="w-5/6  shadow-md sm:rounded-lg float-right ">
      <table className="w-full text-left ">
        <thead className=" text-xl text-primary bg-secondary ">
          <DataSetTitle />
        </thead>
        <tbody>
          {dataset.map((data) => (
            <ListItem item={data} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataList;
