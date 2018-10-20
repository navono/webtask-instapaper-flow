# ifttt-instapaper-flow
文章阅读流。

# 原理
`Instapaper` 新增，通过 `IFTTT` 在 `Github` 上的相应的仓库新建一个 `issue` ；当文章在 `Instapaper` 被存档后，再次通过 `IFTTT` 将 `Github` 上的 `issue` 关闭。

`webtask` 作为一个 `Serverless` Server 用来连接 `IFTTT` 和 `Github`。

# 开发
全局安装 `wt-cli` ，然后实用 `wt init` 初始化账户。安装依赖包：
> yarn

获取到 `Github Token` 后，设置到当前的命令行环境变量 `GITHUB_ACCESS_TOKEN` 中，运行：
> yarn deploy
