import React from 'react';
import RocketItem from '../RocketItem/RocketItem';

const Home = ({ launches }) => {
    const rockets = launches.map((launch) => {
        return <RocketItem key={launch.id} launch={launch} />
    })
    return (
        <>
            <h1 className="display-4 my-4">Rockets</h1>
            {rockets}
        </>
    )
}

export default Home;