配置清华源
pip config set global.index-url https://pypi.tuna.tsinghua.edu.cn/simple

sublimetext 什么都好，就是python调试坑爹
只好用pdb++的sticky模式：https://pypi.python.org/pypi/pdbpp/
调用pdb++还是用：python -m pdb myscript.py ,就是不支持python3

pdb命令：
http://magustest.com/blog/python/use-pdb-debug-python/

sublimetext3 python自动补全
https://github.com/srusskih/SublimeJEDI

更图形化的用pyCharm
http://www.newasp.net/soft/108228.html
如果要用python3.4.2 则pyCharm中调用virutalenv 在 command＋，调出preferences 修改project interpreter路径

#(env1) 下：pip3 install termcolor
from termcolor import colored
print( colored('hello', 'red'), colored('world', 'green'))
http://stackoverflow.com/questions/287871/print-in-terminal-with-colors-using-python

virtualenvwrapper 在osx上设置:
http://stackoverflow.com/questions/12232421/virtualenvwrapper-commands-arent-working
在osx 10.11 上避开问题：pip install virtualenvwrapper --ignore-installed six

显示virtualenv下安装的东西: pip freeze
http://stackoverflow.com/questions/15961926/how-can-i-make-a-list-of-installed-packages-in-a-certain-virtualenv

进入是：workon env1   退出是：deactivate 
删除是rmvirtualenv
http://virtualenvwrapper.readthedocs.org/en/latest/command_ref.html
http://www.jeffkit.info/2011/08/1012/
import django 
print(django.get_version()) 

import gunicorn
print gunicorn.__version__ # Prints version

import haystack
print haystack.__version__ 
http://stackoverflow.com/questions/13145483/how-to-check-the-version-of-a-installed-application-in-django-in-running-time

mac:sudo lsof -i tcp:8000 然后 then kill the process ids that show up
http://stackoverflow.com/questions/880239/how-to-clear-the-port-when-restarting-django-runserver

homebrew 安装的postgreSQL  启动和关闭
http://stackoverflow.com/questions/7975556/how-to-start-postgresql-server-on-mac-os-x
pg_ctl -D /usr/local/var/postgres -l /usr/local/var/postgres/server.log start
pg_ctl -D /usr/local/var/postgres stop -s -m fast

python的restful api选择
http://www.fullstackpython.com/api-creation.html

http://deeplearning.net/software/theano/install.html
pip install Theano
pip install nose

调优python
https://www.airpair.com/python/posts/optimizing-python-code

Python的优雅技巧
http://segmentfault.com/a/1190000002869103

查看 packages in a certain virtualenv
workon envname
pip freeze

更新pip中某个包：pip install Django -U

log
http://www.iteye.com/news/30702

pip install supervisor

使用调试 https://pypi.python.org/pypi/PdbSublimeTextSupport
import pdb
pdb.set_trace()
from PdbSublimeTextSupport import preloop, precmd
pdb.Pdb.preloop = preloop
pdb.Pdb.precmd = precmd

pdb：http://www.blogjava.net/Skynet/archive/2009/04/07/264259.html
>运行
    (Pdb)n #单步运行
    (Pdb)s #细点运行 也就是会下到，方法
    (Pdb)c #跳到下个断点
>查看
    (Pdb)p param #查看当前 变量值
    (Pdb)l #查看运行到某处代码
    (Pdb)a #查看全部栈内变量

https://www.codementor.io/spark/tutorial/building-a-recommender-with-apache-spark-python-example-app-part1

Python后端相关技术/工具栈: http://python.jobbole.com/83486/

fan project of python
http://www.aosabook.org/en/index.html

http://stackoverflow.com/questions/902408/how-to-use-variables-in-sql-statement-in-python

python log
http://stackoverflow.com/questions/2513479/redirect-prints-to-log-file

argparse 日期参数
http://stackoverflow.com/questions/25470844/specify-format-for-input-arguments-argparse-python

http://stackoverflow.com/questions/13265439/python-3-3-unicode-objects-must-be-encoded-before-hashing

ipython3 notebook 运行python3下面的jupyter

快捷键
http://opus.konghy.cn/ipynb/jupyter-notebook-keyboard-shortcut.html

pip list  #列出所有安装的库
pip list --outdated #列出所有过期的库
pip install --upgrade 库名 
http://www.cnblogs.com/luckjun/p/4958338.html

逼近椭圆
https://stackoverflow.com/questions/44741277/how-to-find-the-equation-for-an-ellipse

为python3.6 安装pip3.6 
curl https://bootstrap.pypa.io/get-pip.py | sudo python3.6

https://www.learnopencv.com/install-opencv3-on-macos/
echo /usr/local/Cellar/opencv/3.3.1_1/lib/python3.6/site-packages >> /Users/wanchang/.virtualenvs/samaritan0/lib/python3.6/site-packages/opencv3.path

pytest-cov 代码覆盖率：
py.test --cov=sharingan tests/

