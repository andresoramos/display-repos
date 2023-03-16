import './App.css';
import * as React from 'react';
import MenuBar from './Components/MenuBar/MenuBar'
import Box from '@mui/material/Box';
import westPak from './Assets/westpak.png'
import RepoTable from './Components/RepoTable/RepoTable'
import Settings from './Components/Settings/Settings'
import axios from 'axios'

function App() {

  const [section, setSection] = React.useState('repo');
  const [data, setData] = React.useState(null)
  const [index, setIndex] = React.useState(0);
  React.useEffect(()=>{
    if(data === null){
      fetchData();
    }
  }, [])

  const createPaginationArrs = (dataArr)=>{
      let returnArr = []
      let currentArr = [];
      for(let i = 0; i < dataArr.length; i++){
          if(currentArr.length === 5){
              returnArr.push(currentArr);
              currentArr = [];
              currentArr.push(dataArr[i])
          }else{
              currentArr.push(dataArr[i]);
          }
      }
      if(currentArr.length){
          returnArr.push(currentArr)
      }
      return returnArr;
  }

  const fetchData = async () =>{
      const { data: info } = await axios.get('https://api.github.com/search/repositories?q=forecasting&sort=stars&order=desc', {headers:{Accept: 'application/vnd.github.v3+json'}});
      const { items } = info;
      if(items.length){
          const paginatedArrs = createPaginationArrs(items);
          setData(paginatedArrs);
      }
  }


  return (
    <div className="App">
     <MenuBar setSection={setSection}/>
     <Box
        component="img"
        sx={{
          marginTop: "7%",
          height: 70,
          width: 350,
          maxHeight: { xs: 233, md: 167 },
          maxWidth: { xs: 350, md: 250 },
        }}
        alt="This will be a company logo"
        src={westPak}
      />

      <div className='repo-table-container'>
      {section === 'repo' && <RepoTable data={data} index={index} setIndex={setIndex}/>}
      {section === 'settings' && <Settings/>}
      </div>
    </div>
  );
}

export default App;
