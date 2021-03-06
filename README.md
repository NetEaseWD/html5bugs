#前端开发中的BUG

由于大家所作业务截然不同，各自为政的总结和解决自己遇到的bug效率是很低(甚至完全没有总结)，此仓库旨在提供一个统一的平台供大家讨论和总结日常Web开发中的bug。

本文档用`gitbook`构建，你可以访问 [http://neteasewd.github.io/html5bugs/](http://neteasewd.github.io/html5bugs/) 来查看成书

你可以看到本文档分为`desktop` 和 `mobile`两部分, 其中mobile当然代表的是移动端特有的bug，而`desktop`并不仅仅指代桌面端，它有泛指性，你可以提交任何web开发中碰到的bug

> __本repo不仅仅是关于html5的bug，你可以将低版本的ie的bug也提交在这里__

## 基本流程

1. 创建一个issue，标题:你所描述的bug ，标签:`bug`, `platform-**`, 正文: 详细描述你的遇到的bug. 要包含遇到的平台和触发条件，现象描述，如果能直接带上解决方案那是更好了
2. 大家留言讨论或总结后，添加`status-compelete`标签
3. 创建一个markdown文件最终收录到文本档中（[示例:bind函数不支持]()），文档中要链接issue地址。因为浏览器一直在更新，很可能会引发新的bug或这个bug已经失效。
4. 定期deploy最新的gitbook

其中3,4管理员会进行操作



## 贡献

__ 关于标签 __

1. `bug` : 代表这个issue是一个bug说明，后续可能会加入`tip`(技巧)标签
2. `platform-`: 代表属于哪个大类,目前有`platform-mobile`（移动特定）, `platform-desktop`泛指的bug
3. `status-`: 代表目前所处的状态, 现在分为在讨论中:`status-discuss`和完稿`status-compelete`两个状态

__ 前置条件__:

1. `npm install gitbook gulp -g & npm install`
2. `gitbook server . ` 预览书籍
3. `gulp deploy`       build 并发布书籍到[http://neteasewd.github.io/html5bugs/](http://neteasewd.github.io/html5bugs/)
4. 关于gitbook使用，可以简单参考博文[GitBook: Git + Markdown 快速发布你的书籍](http://leeluolee.github.io/2014/07/22/2014-07-22-gitbook-guide/) 

__注: 如果不属于neteasewd的成员，可以发起pull-request。只要成功被merge 将会获得本repo的push权限。__



