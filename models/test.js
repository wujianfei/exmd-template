const { BaseModel } = require('exmd')   
const fieldsMap = {   
	id: {
		type: 'uuid',  
    length: 16,  
    lengthvar: -1,     
		notnull: true,  
    comment: null
  },
	name: {
		type: 'text',  
    length: -1,  
    lengthvar: -1,     
		notnull: false,  
    comment: null
  },
	password: {
		type: 'text',  
    length: -1,  
    lengthvar: -1,     
		notnull: false,  
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

function test() {   
	const vm = this   
	BaseModel.apply(vm, arguments)
	vm.fields = fieldsMap
	vm.tableName = 'test'
}

;(function() {
	const TempFun = function(){}   
	TempFun.prototype = BaseModel.prototype   
	test.prototype = new TempFun()   
})()   

module.exports = test