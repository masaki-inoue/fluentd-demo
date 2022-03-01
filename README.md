# A simple for Fluentd demo

<img src="https://raw.githubusercontent.com/fluent/fluentd-docs-gitbook/53020426cdcfcb5a5f722031838ee1cb95b5a7a2/images/logo/Fluentd_square.svg" alt="Fluentd Logo" width="240">

## How to use this?

```bash
$ git clone git@github.com:masaki-inoue/fluentd-demo.git
$ cd fluentd-demo
$ docker-compose up
```

Both application server and Fluentd are started by `docker-compose up` command.

You can see that the Fluentd node is forwarding logs that are emitted by express application on Fluentd node's `stdout`.