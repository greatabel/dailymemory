Install Hadoop On Ubuntu 18.04 Or 20.04
https://phoenixnap.com/kb/install-hadoop-ubuntu


java.net.ConnectException: Connection refused:
到hadoop的bin下面运行：
stop-all.sh
hadoop namenode -format
rm -rf  '/home/abel/dfsdata/datanode'
start-all.sh