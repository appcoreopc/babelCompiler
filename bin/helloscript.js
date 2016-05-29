module.exports = function(babel) 
{
	const t = babel.types; 
	return {
		
		visitor : {
			 BinaryExpression(path)
			 {
			 	console.log(path);

				if (path.node.type === 'Identifier' && path.node.name === 'a')
				{
					path.node.name = 'total';
				}
			}
		}
	};
};
