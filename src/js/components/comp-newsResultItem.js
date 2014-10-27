/**
 * @jsx React.DOM
 */

var React = require('react');

var NewsResultItem = React.createClass({

	processDate: function(date){
		var now = new Date();
		var difference;
		var result;
		var timeSegment;
		console.log(date);
		date = new Date(date);
		if (difference = now.getYear() - date.getYear()) {
			timeSegment = 'year';
		}
		else {
			if (difference = now.getMonth() - date.getMonth()){
				timeSegment = 'month';
			}
			else {
				if (difference = now.getDate() - date.getDate()){
					timeSegment = 'day';
				}
				else {
					if (difference = now.getHours()-date.getHours()){
						timeSegment = 'hour';
					}
					else {
						if (difference = now.getMinutes() - date.getMinutes()){
							timeSegment = 'minute';
						}
						else {
							return 'Just now';
						}
					}
				}
			}
		}
		difference > 1 ? result = [difference, timeSegment + 's', 'ago'].join(' ') : result = [difference, timeSegment, 'ago'].join(' ')
		return result;
	},

	render: function() {
		var res = this.props.result;
		return (
			<div className="news-item">
				<h2>
					<a href={res.Url}>{res.Title}</a>
				</h2>
				<p>
					{res.Description}
				</p>
				<p>
					{res.Source}
				</p>
				<p>
					{this.processDate(res.Date)}
				</p>
			</div>
		);
	}

});

module.exports = NewsResultItem;