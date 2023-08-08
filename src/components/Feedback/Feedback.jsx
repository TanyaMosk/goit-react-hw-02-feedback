import { Component } from "react";
import { Stats } from './Feedback.styled';


export class Feedback extends Component{
    state = {
        good: 0,
        neutral: 0,
        bad: 0
    };
   
    handelClick = type => {
        this.setState(prevState => {
            return {
                [type]: prevState[type] + 1,
            };
        });
    };

    render() {
        return (
            <div>
                <h1>Please leave feedback</h1>
                <button onClick={()=> this.handelClick('good')}>Good</button>
                <button onClick={()=> this.handelClick('neutral')}>Neutral</button>
                <button onClick={()=> this.handelClick('bad')}>Bad</button>
                <Stats>
                    <h2>Statistic</h2>
                    <span>Good:{this.state.good}</span>
                    <span>Neutral:{this.state.neutral}</span>
                    <span>Bad:{this.state.bad}</span>
                </Stats>
            </div>
        )
    }
}