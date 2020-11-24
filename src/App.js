import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import * as ReactBootStrap from 'react-bootstrap';


const App = () => {

  const [pictures, setPictures] = useState([]);
  const [loading, setLoading] = useState(false);

  //function to fetch API data:
  const getData = async() => {
    const data = await axios.get(
      "https://jsonplaceholder.typicode.com/photos");
      console.log(data);
      setPictures(data.data);
      setLoading(true);
};

// column fields
const cols = [
  { dataField: "albumId", text: "Album ID"},
  { dataField: "id", text: "ID"},
  { dataField: "title", text: "Title"},
  { dataField: "url", text: "Link/URL"},
  { dataField: "thumbnailUrl", text: "URL of Thumbnail"}
]
  useEffect(() =>
  {
    getData();
  }, []);

    return <div className="App">
      {loading ?(<BootstrapTable
      keyField="albumId"
      data={pictures}
      columns={cols}
      pagination={paginationFactory()}
      />):(
        <ReactBootStrap.Spinner animation = "grow"/>
      )}
      
    </div>;
}

export default App;
