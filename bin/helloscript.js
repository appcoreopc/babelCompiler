module.exports = function(babel) 
{
	const t = babel.types; 
	return {
		visitor : {
			 BinaryExpression(path)
			 {
				if (path.parent.id.type === 'Identifier' && path.parent.id.name === 'a')
				{
					path.parent.id.name = 'total';
				}
			}
		}
	};
};
