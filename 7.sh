 mlogin #requires an active joyent account, or if you already have a smartos/illumos based instance somewhere else get there

git clone repo.git
npm install
UMEM_DEBUG=default node myLeakyScript.js &

ps -ef | grep node #find the pid of your node process

gcore <pid> #creates a file named core.<pid> in $CWD

mdb core.<pid>

::findleaks
