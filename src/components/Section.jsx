/**
 * Section Component
 *
 * UI for a Section element. Any state styles are declared here and applied directly inline.
 *
 * Props:
 * sectionText : string for section name
 * sectionClass : HTML element class
 */

import React, { Component, PropTypes } from 'react'

class Section extends Component {

	constructor(props) {
		super(props)
	}
// ------

	shouldComponentUpdate(nextProps) {
		const { sectionText, sectionClass} = this.props
		return	sectionText !== nextProps.sectionTest ||
				sectionClass !== nextProps.sectionClass
	}

	render() {
		const { sectionText, sectionClass, id } = this.props

		return (
			<div
				className={sectionClass}
				id={id}
			>
				<span dangerouslySetInnerHTML={{ __html: sectionText }} />
			</div>
		)
	}
}

Section.propTypes = {
	sectionText: PropTypes.string.isRequired,
	sectionClass: PropTypes.string.isRequired,
	id: PropTypes.string.isRequired,
}

export default Section
