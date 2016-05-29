
var babylon = require('babylon');
var generator = require('babel-generator').default;
var traverse = require('babel-traverse').default;

var code = 'let a = 2 + 2';	
var ast = babylon.parse(code);

traverse(ast, {
	enter(path)
	{
		if (path.node.type === 'Identifier' && path.node.name === 'a')
			path.node.name = 'total'
	}
});

var newCode = '';
var result = generator(ast, null, newCode);
console.log(result);
