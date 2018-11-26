/**
 * Label Component
 *
 * UI for a Label element. Any state styles are declared here and applied directly inline.
 *
 * Props:
 * text : string for subsection name
 * textClass : HTML element class
 * concat : "yes" if next component is to stay in the same row
 */

import React, { Component, PropTypes } from 'react'

class Label extends Component {

	constructor(props) {
		super(props)
	}

    // ----- 

	shouldComponentUpdate(nextProps) {
		const { buttonClass, buttonText, buttonTextStyle, id, tab } = this.props
		return	buttonClass !== nextProps.buttonClass ||
				buttonText !== nextProps.buttonText ||
				buttonTextStyle !== nextProps.buttonTextStyle ||
				id !== nextProps.id ||
				tab !== nextProps.tab
	}

	render() {
		const { buttonClass, buttonTextStyle, buttonText, callbacks, id, tab } = this.props

		return (
			<div
				className={buttonClass}
				id={id}
				onClick={callbacks && callbacks.click}
				onKeyDown={this.handleKeyDown}
				tabIndex={tab}
			>
				<span className={buttonTextStyle} dangerouslySetInnerHTML={{ __html: buttonText }} />
			</div>
		)
	}
}

Button.propTypes = {
	buttonClass: PropTypes.string.isRequired,
	buttonText: PropTypes.string.isRequired,
	buttonTextStyle: PropTypes.string,
	callbacks: PropTypes.shape({
		click: PropTypes.func
	}),
	id: PropTypes.string.isRequired,
	tab: PropTypes.number
}

export default Button
