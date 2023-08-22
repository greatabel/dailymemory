m1 max osx12.2 安装tensorflow
https://zhuanlan.zhihu.com/p/474212619
conda activate tf26

https://sebastianraschka.com/blog/2022/pytorch-m1-gpu.html
gpu版本的pytorch 在m1 max上:
conda activate torch-nightly

https://www.makeuseof.com/how-to-convert-mov-to-mp4-mac/
使用自带软件iMove 把.mov 转化为 .mp4

conda 是否开terminla自启动：
https://blog.csdn.net/Crazy_zh/article/details/105234816
可以通过配置auto_activate_base关闭自动进入conda基础环境：
conda config --set auto_activate_base false
如要开启，将其设为true就可以了：
conda config --set auto_activate_base true
另可通过conda config -h查看帮助信息，通过conda config --show查看全部配置


osx terminal 显示中文
subl ~/.zshrc
export LC_ALL=en_US.UTF-8 
export LANG=en_US.UTF-8
-
git config --global core.quotepath false
-
https://www.jianshu.com/p/b8b187dac052


修改osx下文件夹时间戳:
touch -t 202308081034  dailymemory
https://sysin.org/blog/how-to-change-file-date/

monterey:
pip3 install virtualenvwrapper

# 设置virtualenvwrapper
export WORKON_HOME=~/Envs
export VIRTUALENVWRAPPER_PYTHON=/usr/bin/python3
source /Users/abel/Library/Python/3.8/bin/virtualenvwrapper.sh
---   https://segmentfault.com/a/1190000014935970 
-

monterey:
M1芯片Mac上Homebrew https://zhuanlan.zhihu.com/p/341831809
（暂时不装m1上proxychains-ng有问题）brew install proxychains-ng


解压7z
7z x 需要解压的文件.7z
https://superuser.com/questions/548349/how-can-i-install-7zip-so-i-can-run-it-from-terminal-on-os-x

Surge、Clash客户端托管配置地址
https://www.butnono.com/latest-2020-freevpn-v2ray-ss-ssr-address.html
-可用节点93个
https://raw.githubusercontent.com/ssrsub/ssr/master/Surge.conf
https://raw.githubusercontent.com/ssrsub/ssr/master/Clash.yml


iconv -f UTF8 -t GB18030 a.csv >b.csv


osx显示桌面:command + F3
截图  Cmd+Shift+4
删除光标后快捷键：Fn＋del
osx同类型窗口：command＋｀
Read more : http://www.ehow.com/how_8565661_delete-after-cursor-macbook.html
OSX 命令行中 10 组快捷键（导航、编辑）
http://www.guomii.com/posts/21306

osx 弹出窗的按钮怎么用快捷键左右tab走：
http://superuser.com/questions/175834/mac-os-x-10-6-key-to-switch-between-selected-button-in-a-dialog-window

http://stackoverflow.com/questions/327664/mac-os-x-terminal-map-optiondelete-to-backward-delete-word
OS X's terminal runs bash, which includes readline support. Follow Glomek's advice and tell terminal to use option as meta key (or else use Esc) and then you've got a bunch of handy options: Ctrl+w deletes prev word (as does Meta+delete as mentioned), but you can also use Meta+f and Meta+b to walk forward and backwards thru words, Ctrl+a and Ctrl+e to beginning and end of line, Ctrl+k delete (kill) from cursor to end of line, and a bunch more.


音乐视频剪辑
http://www.macx.cn/thread-2030967-1-1.html
http://blog.sina.com.cn/s/blog_64b3c56f0101hwm9.html

⌘ = Command
⇧ = Shift
⌥ = Option/Alt
⌃ = Control

Command+Option+D it will automatically hide or show the Dock in OS X

terminal tab之间切换
 Cmd-Shift-{ and Cmd-Shift-}. (or Cmd-Shift-Left and Cmd-Shift-Right)

command+[] 是xcode缩进

Pages格式刷：opt+cmd+c, opt+cmd+v

重建移动硬盘索引
http://www.cnblogs.com/yaohuil/p/3237016.html

任务管理器一样的，在spotlight：
Activity Monitor

brew search haskell
brew install Caskroom/cask/haskell-platform
http://stackoverflow.com/questions/15709129/installing-haskell-packages-on-mac

redis on osx
http://www.richardsumilang.com/blog/2014/04/04/how-to-install-redis-on-os-x/

brew install siege

查看80端口：sudo lsof -i :80

terminal在文件夹上打开
System Preferences > Keyboard > Shortcuts > Services
Enable New Terminal at Folder. 

spotlight: control + 空格

terminal 光标前路径变短：
直接terminal输入 PS1='$' 或者 PS1='\u:\W\$ ' 

sudo subl /private/etc/hosts
https://www.ihash.eu/2015/09/how-to-edit-hosts-file-in-mac-os-x-10-11-el-capitan/
设置：0.0.0.0 license.sublimehq.com 防止屏蔽

134.170.108.26  http://onedrive.live.com
134.170.108.152 http://skyapi.onedrive.live.com

pages 给一段问题设置背景
http://apple.stackexchange.com/questions/116592/how-to-highlight-text-in-yellow-in-pages-5-0

pages的格式刷： opt+cmd+c, opt+cmd+v 

温度通过:
$ gem install iStats
Usage
$ istats

删除chrome 联想提示错误
Windows：使用 shift+del 键将其删除。
Mac ：用shift+fn+delete就可以了
http://blog.csdn.net/dull_boy2/article/details/39973963

osx 设置环境变量
http://stackoverflow.com/questions/22502759/mac-os-x-10-9-setting-permanent-environment-variables

zip -er output.zip ./yourfolder
http://bobchesley.net/how-to-password-protect-zip-files-in-mac-os-x/

reset  的作用很简单——将目前「终端」屏幕上的内容清空，就好像刚刚打开终端一样。

音效位置
http://apple.stackexchange.com/questions/210072/where-are-the-alert-tone-audio-files-located-in-os-x


升级到Xcode 8 ，用于注释的快捷键 cmd + /用不了。在菜单看到注释功能也是被禁用
在终端执行命令:
sudo /usr/libexec/xpccachectl
然后重启电脑。

黑色图变白色
1:用预览打开2:打开"调整颜色"3:把"自动色阶"两边的按钮, 拖动换位置,就可以看到效果了.

osx 创造加密压缩包
zip -er tenseigan2017_12_28.zip tenseigan

合并文件夹: ditto directory1 directory2
http://osxdaily.com/2010/08/12/merge-directories-in-mac-os-x/

磁盘清理工具OmniDiskSweeper
https://www.omnigroup.com/more

处理webp
http://www.devsai.com/2018/02/01/2018-webp/
brew install webp
dwebp 640.webp -o 640.png

拷贝和黏贴之间 加上：command + k （我是在受不了ibook了）
https://www.jianshu.com/p/0e9e5c2cb2a2

去掉ebook拷贝的引用（不过我在上面修复了bug）：
sed -E -e 's/^“//g' | sed -E -e 's/”$//g' | sed -E -e '/^$/d' | sed -E -e 's/(摘录来自).*//g'
https://www.jianshu.com/p/ab7d1ebba3bf
-
https://zj-network-guide.readthedocs.io/zh_CN/latest/intranet-penetration/ngrok/[%E5%86%85%E7%BD%91%E7%A9%BF%E9%80%8F]ngrok%E5%AE%9E%E7%8E%B0/
ssh -p 12757 abel@0.tcp.ngrok.io


tkinter on macOS
https://www.jianshu.com/p/1d1ec6b4e531

PYTHON_CONFIGURE_OPTS="--disable-ipv6 --with-tcltk-includes='-I/usr/local/opt/tcl-tk/include'
 --with-tcltk-libs='-L/usr/local/opt/tcl-tk/lib -ltcl8.6 -ltk8.6'" proxychains4 pyenv install 3.7.7