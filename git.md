
删除文件夹下所有的.git文件
find . -name ".git" | xargs rm -Rf

git init的时候，没有注意到子目录里面的liblinear是git clone来的。
后来想要对其进行控制，删除该目录下的.git之后，遇到fatal: 路径规格 'train.c' 在子模组 'build_model/liblinear' 中错误。
那是因为git已经把该目录当做子模组了，通过下列代码删除
git rm --cache submodule_name


Which Git? How to Keep Git Up To Date on Mac
http://blog.grayghostvisuals.com/git/how-to-keep-git-updated/

创建.gitignore 最快速：touch .gitignore
http://stackoverflow.com/questions/10744305/how-to-create-gitignore-file

git 删除文件
http://stackoverflow.com/questions/2047465/how-can-i-delete-a-file-from-git-repo


for private repos, or to have push access on your repository, you can clone this way:
$ git clone https://username@github.com/username/project.git
https://github.com/blog/642-smart-http-support


git的https被间歇墙了，哎，不行得重回ssh
http://www.wangp.org/wordpress/?p=173

Force Git to overwrite local files on pull
如果
git reset --hard HEAD
git pull
不行，就：
git fetch --all
git reset --hard origin/master
http://stackoverflow.com/questions/1125968/force-git-to-overwrite-local-files-on-pull

git 缓存密码，不用每次输入：
用https方式：git config --global credential.helper cache
git config --global credential.helper 'cache --timeout=3600'
https://help.github.com/articles/caching-your-github-password-in-git/

修改github的url后，本地同步：
git remote set-url origin https://github.com/user/repo2.git
http://stackoverflow.com/questions/2432764/change-the-uri-url-for-a-remote-git-repository

Git Submodule
http://www.kafeitu.me/git/2012/03/27/git-submodule.html

删除已经被git缓存的文件 Can't ignore UserInterfaceState.xcuserstate
http://stackoverflow.com/questions/6564257/cant-ignore-userinterfacestate-xcuserstate

删除本地分支 git branch -D 分支名字

查看当前分支
"git branch" should show all the local branches of your repo. The starred branch is your current branch.

Git分支管理策略
http://www.ruanyifeng.com/blog/2012/07/git.html

出现“fatal: Pathspec is in submodule”错误的时候：
git rm --cached directory
git add directory
http://stackoverflow.com/questions/24472596/git-fatal-pathspec-is-in-submodule


find . -type d -name ".git" \
&& find . -name ".gitignore" \
&& find . -name ".gitmodules"  然后 rm -rf ./.git 之类 
http://stackoverflow.com/questions/4822321/remove-all-git-files-from-a-directory

http://stackoverflow.com/questions/1143796/remove-a-file-from-a-git-repository-without-deleting-it-from-the-local-filesyste
git rm --cached mylogfile.log
For a directory:

git rm --cached -r mydirectory

删除上一个commit： git reset --hard HEAD~1
http://stackoverflow.com/questions/927358/how-do-you-undo-the-last-commit
-
git remote add upstream－随便名字 https://location/of/generic.git
git pull upstream 
如果有分支的话：
git pull CompanyRep develop(分支名)

http://stackoverflow.com/questions/24815952/git-pull-from-another-repository

git rm --cached subfolder
git add subfolder
git commit -m "Enter message here"
git push
FWIW, I also removed the .git folder before doing the git add.
http://stackoverflow.com/questions/1260748/how-do-i-remove-a-git-submodule

https://help.github.com/articles/generating-ssh-keys/

http://stackoverflow.com/questions/7297379/how-do-you-rebase-the-current-branchs-changes-on-top-of-changes-being-merged-in

git commit --amend
http://stackoverflow.com/questions/179123/edit-an-incorrect-commit-message-in-git

http://stackoverflow.com/questions/5189560/squash-my-last-x-commits-together-using-git

clairvoyant/lib/schema 如果是空时候，到里面：
git submodule init 
git submodule update

克隆一个分支方法：git clone -b <branch> <remote_repo>    
http://stackoverflow.com/questions/1911109/clone-a-specific-git-branch
例子如下：
git clone -b feature/decoder https://bitbucket.org/luminagic/clairvoyant

撤销一次rebase
http://stackoverflow.com/questions/134882/undoing-a-git-rebase

http://stackoverflow.com/questions/6313126/how-to-remove-a-directory-in-my-github-repository
返回某一个commit
http://stackoverflow.com/questions/2007662/rollback-to-an-old-git-commit-in-a-public-repo

Git create and checkout new branch
git checkout -b newbranch

让homebrew 版本的覆盖掉 apple自带git
https://www.phodal.com/blog/use-brew-cleanup-clean-old-git/

How to ignore files starting with # in git:   \#*
http://stackoverflow.com/questions/10297603/how-to-ignore-files-starting-with-in-git

本地分支改名字：git branch -m <oldname> <newname>

https://stackoverflow.com/questions/4493936/could-i-change-my-name-and-surname-in-all-previous-commits
git filter-branch --commit-filter 'if [ "$GIT_AUTHOR_EMAIL" = "greatabel1@126.com" ];
  then export GIT_AUTHOR_NAME="greatabel"; export GIT_AUTHOR_EMAIL=myreceiver2for2github@gmail.com;
  fi; git commit-tree "$@"'

开启2步验证后命令行中密码要替换为token
https://stackoverflow.com/questions/29297154/github-invalid-username-or-password

重新输入密码
https://stackoverflow.com/questions/25845963/git-credential-helper-update-password
