启动 mongodb:
To have launchd start mongodb now and restart at login:
  brew services start mongodb
Or, if you don't want/need a background service you can just run:
  mongod --config /usr/local/etc/mongod.conf

osx 上命令行连接：
cd /usr/local/Cellar/mongodb/3.6.1/bin
./mongo
show dbs
show collections
show tables
db.getCollectionNames()

删除一个数据库
use mydb; 
db.dropDatabase();
