var pie = new d3pie("pieChart", {
	"header": {
		"title": {
			"text": "Population",
			"fontSize": 24,
			"font": "open sans"
		},
		"subtitle": {
			"text": "Black vs White population in Lowndes County (Census Data 2010)",
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
	},
	"size": {
		"canvasWidth": 500,
		"pieOuterRadius": "70%"
	},
	"data": {
		"sortOrder": "value-desc",
		"content": [
			{
				"label": "White",
				"value": 2859,
				"color": "#c096ea"
			},
			{
				"label": "Black",
				"value": 8310,
				"color": "#cc9fb1"
			},
			{
				"label": "Other",
				"value": 157,
				"color": "#9f82f4"
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
		"string": "{label}: {value}"
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