/**
 * @jsx React.DOM
 */

var React = require('react');

var ImageResultItem = React.createClass({

	render: function() {
		var res = this.props.result;
		return (
			<div className="image-item">
				<img src={res.Thumbnail.MediaUrl} width={res.Thumbnail.Width} height={res.Thumbnail.Height}/>
			</div>
		);
	}

});

module.exports = ImageResultItem;