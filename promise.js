function MyPromise(fn){
	this.status = 'Pending';
	this.value = undefined;
	
	this.thenCallbacks = [];
	this.catchCallback = undefined;
	this.finallyCallback = undefined;
	
	this.then = function(cb){
		this.thenCallbacks.push(cb);
		return this;
	}
	
	this.catch = function(cb){
		this.catchCallback = cb;
		return this;
	}
	
	this.finally = function(cb){
		this.finallyCallback = cb;
		return this;
	}

	fn(resolve.bind(this), reject.bind(this));
	
	function resolve(value){
		this.value = value;
		this.status = 'Fulfilled';
		
		this.thenCallbacks.forEach(func=>func(this.value));
		
		if(typeof this.finallyCallback === 'function'){
			this.finallyCallback(this.value);
		}
	}
	
	function reject(value){
		this.value = value;
		this.status = 'Rejected';
		
	    if(typeof this.catchCallback === 'function'){
			this.catchCallback(this.value);
		}
		
		if(typeof this.finallyCallback === 'function'){
			this.finallyCallback(this.value);
		}
	}
}

function get(url){
	return new MyPromise(function(resolve, reject){
		var xhr =  new XMLHttpRequest();
		xhr.open('GET', url, true);
		xhr.onload = function(){
			if(xhr.status == 200){
				resolve(xhr.resoponseText);
			}else{
				reject(xhr.resoponseText);
			}
		}
		xhr.onerror = function(){
			reject("error");
		}
	});
}

get('/files/1')
.then(fuction(value){console.log(value})
.catch(function(val){console.log(val)});
