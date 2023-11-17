module.exports = {
	"devServer" : {
	    "port" : 8080,
	    "disableHostCheck" : true,
	    "proxy" : {
	        "/api" : {
	            "target" : "https://nongan.app65.cn/api", 
	            "changeOrigin" : true,
	            "pathRewrite" : {
	                "^/api" : ""
	            }
	        },
			 
		}
	}
}

