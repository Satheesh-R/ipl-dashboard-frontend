import { React, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { MatchDetailCard } from '../components/MatchDetailCard';
import { YearSelector } from '../components/YearSelector';
import './MatchPage.scss'

export const MatchPage = () => {

    const [matches, setMatches] = useState([]);
    const { teamName, year } = useParams();
    useEffect(
        () => {
            const fetchMatchesByYearandTeam = async () => {
                const response = await fetch(`${process.env.REACT_APP_API_URL}/team/${teamName}/matches?year=${year}`);
                const data = await response.json();
                setMatches(data);
            };
            fetchMatchesByYearandTeam();
        },
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [teamName,year]
    );
    return (
        <div className="MatchPage">
            <div className="year-selector">
                <h2>Select Year</h2>
                <YearSelector teamName={teamName} />
            </div>
            <div>
                <h1 className="page-heading">{teamName} matches in {year}</h1>
                {matches.map(match => <MatchDetailCard key={match.id} match={match} teamName={teamName} />)}
            </div>
        </div>
    );
}