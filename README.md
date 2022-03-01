# A simple for Fluentd demo

## How to use this?

```bash
$ git clone git@github.com:masaki-inoue/fluentd-demo.git
$ cd fluentd-demo
$ docker-compose up
```

Both application server and Fluentd are started by `docker-compose up` command.

You can see that the Fluentd node is forwarding logs that are emitted by express application on Fluentd node's `stdout`.