import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';

export default class ExpenseForm extends React.Component{
	constructor(props){
		super(props);
		this.state={
			description: props.expense? props.expense.description: '',
			note: props.expense? props.expense.note: '',
			amount: props.expense? (props.expense.amount).toString(): '',
			createdAt: props.expense? moment(props.expense.createdAt) : moment(),
			calendarFocused: false,
			error: undefined
	  	}
	}
	onDescriptionChange=(e)=>{
		const description=e.target.value
		this.setState(()=>({description}));
	}
	onNoteChange=(e)=>{
		const note=e.target.value;
		this.setState(()=>({note}));
	}
	onAmountChange=(e)=>{
		const amount=e.target.value;
		if(!amount || amount.match(/^\d+(\.\d{0,2})?$/)){
			this.setState(()=>({amount}));
		}
	}
	onDateChange=(createdAt)=>{
		if(createdAt){
			this.setState(()=>({createdAt}));
		}
	}
	onFocusChange=({focused})=>{
		this.setState(()=>({ calendarFocused: focused}));
	}

	onFormSubmit=(e)=>{
		e.preventDefault();
		if(!this.state.description || !this.state.amount){
			this.setState(()=>({error: 'Description and Amount field should not be empty'}));
		}else{
			this.setState(()=>({error: undefined}));
			this.props.onSubmit({
				description: this.state.description,
				note: this.state.note,
				amount: parseFloat(this.state.amount,10),
				createdAt: this.state.createdAt.valueOf()
			})
		}
	}
	render(){
		return(
			<div>
			  <div className="page-header__container">
			  	<h1>Add Expense</h1>
			  </div>
			  <div>
			  <div className="form_error">
			  	{this.state.error && <p>{this.state.error}</p>}
			  </div>
			  	<div className="container">
					  <form className="form" onSubmit={this.onFormSubmit}>
					  	  <div className="input-item">
							<input
							 className="text-input"
							 type='text'
							 placeholder='Description'
							 autoFocus
							 value={this.state.description}
							 onChange={this.onDescriptionChange}
							/>
						  </div>
						  <div className="input-item">
							<input
							 className="text-input"
							 type='text'
							 placeholder='Amount'
							 value={this.state.amount}
							 onChange={this.onAmountChange}
							/>
						  </div>
						  <div className="input-item">
							<textarea
							  className="text-input"
							  placeholder='add a short note'
							  value={this.state.note}
							  onChange={this.onNoteChange}
							/>
						  </div>
						  <div className="input-item">
							<SingleDatePicker
							  date={this.state.createdAt}
							  onDateChange={this.onDateChange}
							  focused={this.state.calendarFocused}
							  onFocusChange={this.onFocusChange}
							  numberOfMonths={1}
							  isOutsideRange={()=>false}
							/>
						  </div>
							<button className="long-btn" type='submit'>Add Expense</button>
					 	</form>
				  </div>
			  </div>
			</div>
		);
	}
}