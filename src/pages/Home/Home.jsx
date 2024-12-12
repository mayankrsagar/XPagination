import React, {
  createContext,
  useEffect,
  useState,
} from 'react';

import axios from 'axios';

import Table from '../../components/Table/Table';

export const Context = createContext();



const Home = () => {

    const [tableData, setTableData]=useState([]);

  const fetchData = async () => {
    try{
    const response = await axios.get(
      "https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json"
    );
    setTableData(response.data);
}catch(error){
    console.error("Data is not fetcing "+ error)
}
  };

  useEffect(()=>{
    fetchData();
  },[])

  return (
    <Context.Provider value={{tableData}}>
      <Table />
    </Context.Provider>
  );
};

export default Home;
