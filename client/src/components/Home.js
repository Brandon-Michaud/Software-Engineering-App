import React from 'react';
import Searchbar from './Searchbar';
import './Home.css'

 function Home({user, login}){
    return (
        <div className='home'>
            <Searchbar user={user} login={login}/>
        </div>
    )
}

export default Home;