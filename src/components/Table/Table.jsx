import React, {
  useContext,
  useEffect,
  useState,
} from 'react';

import { Context } from '../../pages/Home/Home';
import st from './Table.module.css';

const Table = () => {
  const { tableData } = useContext(Context);
  const [currentData, setCurrentData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 10;
  const totalPage = Math.ceil(tableData.length / itemsPerPage);

  useEffect(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    setCurrentData(tableData.slice(startIndex, endIndex));
  }, [currentPage, tableData]);
  
  return (
    <React.Fragment>
      <table className={st.styledTable}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
          </tr>
        </thead>
        <tbody>
          {currentData.map((data) => (
            <tr key={data.id}>
              <td>{data.id}</td>
              <td>{data.name}</td>
              <td>{data.email}</td>
              <td>{data.role}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className={st.pagination}>
        <button
          disabled={currentPage === 1}
          onClick={() => setCurrentPage((prev) => prev - 1)}
        >
          Previous
        </button>
        <div>{currentPage}</div>
        <button
          disabled={currentPage >= totalPage}
          onClick={() => setCurrentPage((prev) => prev + 1)}
        >
          Next
        </button>
      </div>
    </React.Fragment>
  );
};

export default Table;
