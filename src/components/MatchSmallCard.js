import {React} from 'react';
import {Link} from 'react-router-dom';
import './MatchSmallCard.scss';

export const MatchSmallCard = ({teamName,match}) => {
    if(!match) return null;
    const otherTeam = teamName === match.team1 ? match.team2 : match.team1;
    const isMatchWon = teamName === match.matchWinner;
    return(
        <div className={isMatchWon ? 'MatchSmallCard won-card' : 'MatchSmallCard lost-card'}>
            <span>vs</span>
            <h3> <Link to={`/teams/${otherTeam}`}>{otherTeam}</Link></h3>
            <p className="match-result">{match.matchWinner} won by {match.resultMargin} {match.result}</p>
        </div>
    );
}   