# PYdemo（前端测试网站）


**react + mysql + nodejs + webpack**


### 配置基本思路

1：分为开发环境及生产环境</br>
2：共4个配置文件，webpack.config.js(入口接收env参数，判断require哪个环境的配置文件)，webpack.dev.js(开发环境),webpack.prod.js(生产环境),webpack.common.js(开发与生产环境的共用部分)

命令：webpack --env=prod   or   webpack --env=dev
