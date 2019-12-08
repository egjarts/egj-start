import bunyan from 'bunyan';
import seq from 'bunyan-seq';
import debug from 'bunyan-debug-stream';

const log = bunyan.createLogger({
  name: 'egj-start',
  streams: [
    seq.createStream({ serverUrl: 'http://localhost:5341/', level: 'trace' }),
    {
      stream: debug({ forceColor: true }),
      type: 'raw',
      level: 'info'
    }
  ],
  serializers: {
    req: bunyan.stdSerializers.req,
    res: bunyan.stdSerializers.res,
    err: bunyan.stdSerializers.err,
    request: bunyan.stdSerializers.req,
    response: bunyan.stdSerializers.res,
    error: bunyan.stdSerializers.err
  }
});

export default log;
