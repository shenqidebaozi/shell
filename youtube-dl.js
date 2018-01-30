/*
 * @作者: Baozi 
 * @日期: 2018-01-13 18:50:44 
 * @最后修改者:   Baozi 
 * @最后修改时间: 2018-01-13 18:50:44 
 */


var async = require('async');
var shell = require("shelljs");
var start = async function(){
 await shell.exec('sudo mv /var/lib/dpkg/info /var/lib/dpkg/info_old');
 await shell.exec('sudo mkdir /var/lib/dpkg/info');
 await shell.exec('sudo apt-get update');
 await shell.exec('sudo apt-get -f install');
 await shell.exec('sudo mv /var/lib/dpkg/info/* /var/lib/dpkg/info_old');
 await shell.exec('sudo rm -rf /var/lib/dpkg/info');
 await shell.exec('sudo mv /var/lib/dpkg/info_old /var/lib/dpkg/info');
}
start();