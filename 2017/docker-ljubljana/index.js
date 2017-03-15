var ejs = require('ejs')
var md = require('markdown-it')( { html: true } );
var glob = require('glob')
var path = require('path')
var fs = require('fs');

function renderFile(filename, data) {
	var contents = fs.readFileSync(filename, 'utf8');
	var first = ejs.render(contents, data)
	var second = md.render(first)
	return second
}

glob("slides/*.md", null, function(err, files) {
	var data = require("./index.json")
	data.slides = []
	files.forEach(function(filename) {
		var classNames = ["slide_" + path.basename(filename.substring(0,filename.length-3)), "slide"]
		var slide = { filename: filename }
		var specials = ['cover', 'shout']
		specials.forEach(function(spec) {
			if (filename.indexOf(spec) !== -1) {
				classNames.push(spec)
			}
		})
		slide.classNames = classNames
		slide.contents = renderFile(filename, data)
		data.slides.push(slide)
	})

	var template = fs.readFileSync("index.ejs", 'utf8')
	console.log(ejs.render(template, data))
})
