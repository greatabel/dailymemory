zsh 百分号为 $ 美元符号的方法:
转移到 /etc/zshrc 文件就行啦。打开该文件，修改 70 行左右位置：
# Default prompt
PS1="%n@%m %1~ $ "
https://blog.csdn.net/maxsky/article/details/104227756

统计下代码行数:  find . -name '*.py' | xargs wc -l