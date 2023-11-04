module.exports = {
	"devServer" : {
	    "port" : 8888,
	    "disableHostCheck" : true,
	    "proxy" : {
	        "/api" : {
	            "target" : "http://36.134.191.59/api", 
	            "changeOrigin" : true,
	            "pathRewrite" : {
	                "^/api" : ""
	            }
	        },
			 
		}
	}
}

