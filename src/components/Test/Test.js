import React, { Component } from 'react';
import Layout from '../Layout/Layout';
import Accordion from '../Accordion/Accordion';

export default
class Test extends Component{
	
	constructor(props) {
		super(props);
		this.state={
			items:[

				{title:'Title 1', content:'Example content 1', maxHeight:600},

				{title:'Title 2', content:'Example content 2', active: true},

				{title:'Title 3', content:(<div><p>Example content with tags</p></div>)}
			]
		}
	}

	render() {
		const { items } = this.state;

		return(
			<Layout
				title="Test">
				<div>
					<Accordion data={items}/>
				</div>				
			</Layout>
		);
	}
}