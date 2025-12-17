load('api_rpc.js');
load('api_shadow.js');

RPC.addHandler('Reveal', function() {
  print('Node 078 activates: Nazi');
  return {phase: 2.2076};
});

print('Mongoose OS Brain 078 online – hydrogen valve ready');
