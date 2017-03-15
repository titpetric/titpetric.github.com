## Setting it up: Network

~~~
sysctl -w net.ipv4.neigh.default.gc_thresh1=8096
sysctl -w net.ipv4.neigh.default.gc_thresh2=12288
sysctl -w net.ipv4.neigh.default.gc_thresh3=16384
~~~

1. The minimum number of entries to keep in the ARP cache.
2. The soft maximum number of entries to keep in the ARP cache.
3. The hard maximum number of entries to keep in the ARP cache.
