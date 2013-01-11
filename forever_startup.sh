#!/bin/sh

# add for chkconfig
# chkconfig: 2345 99 99
# description: Node.js forever /home/helix_dan/server_startup_test.js
# processname: forever_startup

do_start()
{
    /usr/local/bin/forever start /home/helix_dan/server_startup_test.js
}

do_stop()
{
    /usr/local/bin/forever stop /home/helix_dan/server_startup_test.js
}

case "$1" in
    start)
       do_start
       ;;
    stop)
       do_stop
       ;;
    restart)
       do_stop
       do_start
       ;;
    *)

  echo "Usage: $0 {start|stop|restart}"

esac
