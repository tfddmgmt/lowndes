var pie = new d3pie("pieChart2", {
	/*"header": {
		"title": {
			"text": "Gender",
			"fontSize": 24,
			"font": "open sans"
		},
		"subtitle": {
			"text": "Male vs Female population in Lowndes County (Census Data 2010)",
			"color": "#999999",
			"fontSize": 12,
			"font": "open sans"
		},
		"titleSubtitlePadding": 9
	},
	"footer": {
		"color": "#999999",
		"fontSize": 10,
		"font": "open sans",
		"location": "bottom-left"
	},*/
	"size": {
		"canvasWidth": 400,
		"canvasHeight": 280,
		"pieOuterRadius": "97%"
	},
	"data": {
		"sortOrder": "value-desc",
		"content": [
			{
				"label": "Male",
				"value": 5289,
				"color": "#5dadce"
			},
			{
				"label": "Female",
				"value": 6010,
				"color": "#d56e97"
			}
		]
	},
	"labels": {
		"outer": {
			"pieDistance": 32
		},
		"inner": {
			"hideWhenLessThanPercentage": 3
		},
		"mainLabel": {
			"fontSize": 13
		},
		"percentage": {
			"color": "#ffffff",
			"fontSize": 12,
			"decimalPlaces": 0
		},
		"value": {
			"color": "#adadad",
			"fontSize": 13
		},
		"lines": {
			"enabled": true
		},
		"truncation": {
			"enabled": true
		}
	},
	"tooltips": {
		"enabled": true,
		"type": "placeholder",
		"string": "{label}: {value}, {percentage}%"
	},
	"effects": {
		"pullOutSegmentOnClick": {
			"effect": "linear",
			"speed": 400,
			"size": 8
		}
	},
	"misc": {
		"gradient": {
			"enabled": true,
			"percentage": 75
		}
	},
	"callbacks": {}
});