const { BaseModel } = require('exmd')   
const fieldsMap = {   
	id: {
		type: 'uuid',  
    length: 16,  
    lengthvar: -1,     
		notnull: true,  
    comment: null
  },
	username: {
		type: 'text',  
    length: -1,  
    lengthvar: -1,     
		notnull: true,  
    comment: null
  },
	password: {
		type: 'text',  
    length: -1,  
    lengthvar: -1,     
		notnull: true,  
    comment: null
  },
	isactive: {
		type: 'int4',  
    length: 4,  
    lengthvar: -1,     
		notnull: true,  
    comment: null
  },
	realname: {
		type: 'text',  
    length: -1,  
    lengthvar: -1,     
		notnull: false,  
    comment: null
  }
}

function tbuser() {   
	const vm = this   
	BaseModel.apply(vm, arguments)
	vm.fields = fieldsMap
	vm.tableName = 'tbuser'
}

;(function() {
	const TempFun = function(){}   
	TempFun.prototype = BaseModel.prototype   
	tbuser.prototype = new TempFun()   
})()   

module.exports = tbuser