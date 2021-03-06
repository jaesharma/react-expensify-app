import React from 'react';
import { connect } from 'react-redux';
import { DateRangePicker } from 'react-dates';
import { setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate } from '../actions/filters';

class ExpenseListFilters extends React.Component{
	state={
		calendarFocused: null
	};
	onDatesChange=({startDate, endDate})=>{
		this.props.dispatch(setStartDate(startDate));
		this.props.dispatch(setEndDate(endDate));
	};
	onFocusChange=(calendarFocused)=>{
		this.setState(()=>({calendarFocused}));
	};
	render(){
		return(
			<div className="container">
			  <div className="input-group">
			   <div className="input-item">
					<input 
					  className="text-input" 
					  type='text' 
					  placeholder="Search Expenses" 
					  value={this.props.filters.text} 
					  onChange={(e)=>{
						this.props.dispatch(setTextFilter(e.target.value));
					  }
					}/>
			   </div>
			   <div className="input-item">
					<select 
						className="select"
					    onChange={(e)=>{
						if(e.target.value==='date'){
							this.props.dispatch(sortByDate());
						}else if(e.target.value==='amount'){
							this.props.dispatch(sortByAmount());
						}
						}}>
						<option value='date'>Date</option>
						<option value='amount'>Amount</option>
					</select>
			   </div>
			   <div className="input-item date-picker">
					<DateRangePicker
						startDate={this.props.filters.startDate}
						startDateId="StartDate"
						endDateId="EndDate"
						endDate={this.props.filters.endDate}
						onDatesChange={this.onDatesChange}
						focusedInput={this.state.calendarFocused}
						showClearDates={true}
						onFocusChange={this.onFocusChange}
						numberOfMonths={1}
						isOutsideRange={()=> false}
					/>
				</div>
			  </div>
			</div>
		);
	}
}

const mapStateToProps=(state)=>{
	return{
			filters: state.filters
		}
}

export default connect(mapStateToProps)(ExpenseListFilters);