import { React, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { MatchDetailCard } from '../components/MatchDetailCard';

export const MatchPage = () => {

    const [matches, setMatches] = useState([]);
    const {teamName,year} = useParams();
    useEffect(
        () => {
            const fetchMatchesByYearandTeam = async () => {
                const response = await fetch(`http://localhost:8080/team/${teamName}/matches?year=${year}`);
                const data = await response.json();
                setMatches(data);
                console.log(data);
            };
            fetchMatchesByYearandTeam();
        },
        // eslint-disable-next-line react-hooks/exhaustive-deps
        []
    );
    return (
        <div className="MatchPage">
            <h1>Match Page</h1>
            {matches.map(match => <MatchDetailCard match={match} teamName={teamName} />)}
        </div>
    );
}