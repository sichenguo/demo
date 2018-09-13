### 主分支 `master`

- master 为主分支，要保护它的稳定性，随时可用来上线。
- 我们不应该直接在 master 分支上直接提交代码，而是合并其余分支。

### 开发分支 develop

- develop 为开发分支，一般包含正在开发的所有新特性，用于测试环境部署和测试。
- 我们不应该直接在 develop 分支上直接提交代码，也不应该把未经测试的代码合并进来，应该尽量保持测试环境干净可用。
- 当 develop 太“脏”以至于不能继续测试之后，可以考虑重新从 master 拉取一次。
- Git 创建 Dev 分支的命令: git checkout -b dev masterk
- 将 Dev 分支发布到 Master 分支的命令: git checkout master
- 对 Dev 分支进行合并: git merge –no–ff dev
  - 这里稍微解释一下，上一条命令的–no–ff 参数是什么意思。默认情况下，Git 执行” 快进式合并”（fast-farward merge），会直接将 Master 分支指向 Dev 分支。
    使用–no–ff 参数后，会执行正常合并，在 Master 分支上生成一个新节点。为了保证版本演进的清晰，我们希望采用这种做法。

### 特性分支 feature

- _分支命名_: feature/ 开头的为特性分支，命名规则为 feature/\*-date。举例来讲，如 xxx10 月 18 日要开发一个通讯录改进的功能，可以自建分支为 feature/contacts_advance-ty-1018。
- 一般 feature 分支应仅包含一个特性，上线（合并至 master）部署验证无误后即可删除。记得及时将 feature 分支 push 至远端。
- 如果合并至 develop 或 master 时发现在 fork 此特性分支之后分支已合并了很多其它分支的提交，请先执行 git rebase，这样能提交历史更加整洁。
- 创建一个功能分支：git checkout -b feature/x dev
- 开发完成后，将功能分支合并到 dev 分支：

```
git checkout dev
git merge –no-ff feature/x
```

- 删除 feature 分支：git branch -d feature/x

### 预上线分支 release

- 第二种是预发布分支，它是指发布正式版本之前（即合并到 Master 分支之前），我们可能需要有一个预发布的版本进行测试。预发布分支是从 Dev 分支上面分出来的，预发布结束以后，必须合并进 Dev 和 Master 分支。
- _分支命名_: release/ 开头的为预发布分支，命名规则为 release/(date/versionNumber) (前端版本号：主版本号. 子版本号. 修正版本号)
- 上线后即可删除。
- 创建一个预发布分支：git checkout -b release/v_1.2 dev
- 确认没有问题后，合并到 master 分支：

```
git checkout master
git merge –no-ff release/v_1.2
```

- 对合并生成的新节点，做一个标签: git tag -a 1.2
- 再合并到 dev 分支：

```
git checkout dev
git merge –no-ff release/v_1.2
```

- 最后，删除预发布分支: git branch -d release/v_1.2

### 快速修复分支 hotfix

- _分支命名_: hotfix/ 开头的为修复分支，它的命名规则与 feature 分支类似。
- 一般我们如果发现紧急线上 bug，可以将线上代码临时回滚，从最新的 master 分支建立 hotfix 分支，提交修复代码、测试无误后，合并至 develop 和 master。
- 上线验证无误后，即可将 hotfix 分支删除。
- 创建一个修补 bug 分支：git checkout -b hotfix/0.1 master
- 修补结束后，合并到 master 分支

```
git checkout master
git merge –no-ff hotfix/0.1
git tag -a 0.1.1
```

- 合并到 dev 分支

```
git checkout dev
git merge –no-ff hotfix/0.1
```

- 最后，删除” 修补 bug 分支”：git branch -d hotfix/0.1

### git tag usage

- 添加
  git tag -a V_0.1.1.0 -m"基本部署完成，有 BUG 待做"

- 删除 git tag -d V_0.1.1.0

- 推送到远程

```
git push origin V_0.1.1.0
git push –tags
```

###命名分支必须遵守一些简单的规则

- 可以使用斜杠（/) 创建一个分层的命名方法。但是，该分支名不能以斜线结尾。
- 分支名不能以减号（-）开头。
- 以斜杠分割的组件不能以点（.) 开头。如 feature/.new 这样的分支名是无效的。
- 分支名的任何地方都不能包含两个连续的点（..)
- 此外，分支名不能包含以下内容：
  - 任何空格活其他空白字符：
  - 在 Git 中具有特殊含义的字符，包括波浪线（~）、插入符（^)、冒号（:)、问号（？）、星号（\*）、左方括号（[)。——ASCII 码控制字符，即值小于八进制 \ 040 的字符，或 DEL 字符（八进制 \ 177)。
  - 这些分支的命名规则是由 git check-ref-format 底层命令强制检测的，它们是为了确保每个分支的名字不仅容易输入，而且在 git 目录和脚步作为一个文件名是可用的。
