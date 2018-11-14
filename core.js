var Core=(function(){
	
	var pid=0;

	function setPid(args){
		pid=args;
	}
	
	return{
		pid:pid,
		gp:function(){
			return pid;
		},
		sp:function(args){
			//alert("I'm privilegedMethod");
			setPid(args);
		}
	}
})();