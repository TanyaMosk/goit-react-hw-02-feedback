import PropTypes from 'prop-types'; 

export const Statistics = ({ good, neutral, bad, total, positivePercentage, title }) => {
   
    return (
        <div>
        <h2>{title}</h2>       
            
        <span>Good:{good}</span>
        <span>Neutral:{neutral}</span>
        <span>Bad:{bad}</span>
        <span>Total:{total}</span>
        <span>Positive feedback:{positivePercentage.toFixed(0)}%</span>
    </div>
    )
}

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number,
}
  
export default Statistics;