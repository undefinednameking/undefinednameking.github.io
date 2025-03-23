exports.handler = async (event, context) => {
  const userAgent = event.headers['user-agent'];

  const blockedUserAgents = [
    'Mozilla/5.0 (iPhone; CPU iPhone OS 17_2_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.2 Mobile/15E148 Safari/604.1',
    'Mozilla/5.0 (iPhone; CPU iPhone OS 17_3_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.3 Mobile/15E148 Safari/604.1',
    'Mozilla/5.0 (iPhone; CPU iPhone OS 17_5_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.5 Mobile/15E148 Safari/604.1',
    'Mozilla/5.0 (iPhone; CPU iPhone OS 17_4_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.4 Mobile/15E148 Safari/604.1',
    'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36',
    'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/132.0.0.0 Safari/537.36'
  ];

  // Si el User-Agent está en la lista de bloqueados, denegar acceso inmediatamente.
  if (blockedUserAgents.some(agent => userAgent.includes(agent))) {
    return {
      statusCode: 403, // Forbidden
      body: JSON.stringify({
        message: 'Forbidden: Access blocked for this user-agent.'
      })
    };
  }

  // Si el User-Agent no está bloqueado, permitir la solicitud.
  return {
    statusCode: 200, 
    body: 'Request allowed'
  };
};