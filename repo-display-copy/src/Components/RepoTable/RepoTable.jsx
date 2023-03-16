import * as React from 'react';
import './RepoTable.css'
import OutlinedCard from '../Cards/Cards';
import Pagination from '@mui/material/Pagination';
import CircularProgress from '@mui/material/CircularProgress';


const RepoTable = ({data, index, setIndex})=>{

    const handlePageSelection = (e, page)=>{
        setIndex(page - 1);
    }

     return <div className='repo-container'>
        <h2 id='repositories'>Repositories</h2>
        <div className='card-collection'>
        {data?.length && data[index].map((item, i)=>{
            const { name, full_name, description } = item;
            return <OutlinedCard  name={name} fullName={full_name} description={description}/>
        })}
        {data === null && <CircularProgress/>}
        </div>
        <div className='pagination'>
        {data?.length && <Pagination page={index + 1} onChange={handlePageSelection} count={data.length} color="primary" />}
        </div>
     </div>
}

export default RepoTable;