var moment = require('moment');
moment.locale('zh-cn');

module.exports = function(item){
	return moment(item).format('YYYY-MM-DD HH:mm');
}