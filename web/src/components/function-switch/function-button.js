import React, { Component } from 'react'; 
import axios from '../../util/axios-auth'; 
import classNames from 'classnames'; 
import { server } from '../../util/constants';

const FunctionButton = props => { 
	const callFunction = () => { 
		axios.get(`${server}/api/send/${props.deviceName}/${props.functionName}`, {auth_me: true}).then(
			response => {
				console.log(response);
				if (response.data.success) props.changeStatus(response.data.data);	
			}
		).catch((e) => {
			console.log(e);	
		}); 
	};

	const buttonClass = classNames({
		'btn': true,
		'btn-lg': true,
		'btn-default': !props.type,
		'btn-success': props.type==='success', 
		'btn-primary': props.type==='primary',
		'btn-danger': props.type==='danger',
	});

	return (
		<button className={buttonClass} onClick={callFunction}>{props.actionText}</button>
	) 
};

export default FunctionButton;
