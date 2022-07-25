import React from 'react'

const DataSetItem = ({ datasets, downloadFile }) => {
    return (
        <>
            {datasets.map((item) => (
                <tr key={item._id} className="bg-white border-b text-dark-light border-blue border-doted ">
                    <th scope="row" className="px-6 py-4 font-medium  whitespace-wrap">
                        {item.dataset_name}
                    </th>
                    <td className="px-6 py-4">{item.data_type}</td>
                    <td className="px-6 py-4">{item.sample_size}</td>
                    <td className="px-6 py-4">{item.area_coverage} </td>
                    <td className="px-6 py-4">{item.sex_coverage} </td>
                    <td className="px-6 py-4">
                        {new Date(item.data_collection_start_date).toLocaleDateString(
                            'sq-AL',
                            { year: 'numeric', month: '2-digit', day: '2-digit' }
                        )}
                    </td>
                    <td className="px-6 py-4">
                        {new Date(item.data_collection_end_date).toLocaleDateString('sq-AL', {
                            year: 'numeric',
                            month: '2-digit',
                            day: '2-digit',
                        })}
                    </td>
                    <td className="px-6 py-4">{item.study_type} </td>
                    <td
                        className="px-6 py-4 text-right text-xl text-blue hover:underline"
                        onClick={() => downloadFile(item)}
                    >
                        Download
                    </td>
                </tr>
            ))}
        </>
    )
}

export default DataSetItem