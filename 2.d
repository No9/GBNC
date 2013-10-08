dtrace -n 'profile-97/execname == "node" && arg1/{
    @[jstack(150, 8000)] = count(); } tick-600s { exit(0); }' > stacks.out

/*
http://blog.nodejs.org/2012/04/25/profiling-node-js/
This will sample about 100 times per second for 60 seconds and pipe results to stacks.out
*/


