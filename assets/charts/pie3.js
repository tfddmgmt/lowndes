var pie = new d3pie("pieChart3", {
	/*"header": {
		"title": {
			"text": "Water related complaints in Haynesville",
			"fontSize": 24,
			"font": "open sans"
		},
		"subtitle": {
			"text": "Years 2012-2017",
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
		"canvasWidth": 430,
		"canvasHeight": 280,
		"pieOuterRadius": "90%"
	},
	"data": {
		"sortOrder": "value-desc",
		"content": [
			{
				"label": "Sewage Overflow",
				"value": 42,
				"color": "#2484c1"
			},
			{
				"label": "Sewer Leakage",
				"value": 31,
				"color": "#cb2121"
			},
			{
				"label": "Drinking Water",
				"value": 27,
				"color": "#4daa4b"
			}
		]
	},
	"labels": {
		"outer": {
			"pieDistance": 12
		},
		"inner": {
			"hideWhenLessThanPercentage": 3
		},
		"mainLabel": {
			"fontSize": 11
		},
		"percentage": {
			"color": "#ffffff",
			"decimalPlaces": 0
		},
		"value": {
			"color": "#adadad",
			"fontSize": 11
		},
		"lines": {
			"enabled": true
		},
		"truncation": {
			"enabled": false
		}
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
			"percentage": 100
		}
	}
});