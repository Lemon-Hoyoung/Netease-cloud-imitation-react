const path = require("path");

const resolve = dir => path.resolve(__dirname, dir)

module.exports = {
    webpack: {
        alias: {
            "@": resolve("src")
        }
    },
    babel:{  
        plugins: [
          [   
            "import", 
            {
              "libraryName": "antd",
              "libraryDirectory": "es",
               "style": 'css' //设置为true即是less
             }
         ]
        ]
     }
}