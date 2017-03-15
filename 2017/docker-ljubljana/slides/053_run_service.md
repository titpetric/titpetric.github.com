## Let's start: service

~~~
# docker service create \
  --replicas 1000 \
  --network party-swarm \
  --update-parallelism 5 \
  --name sonyflake \
  -p 80:80 titpetric/sonyflake
je2np5ab1s6ztf55qj62im72g
~~~
