<?php

use App\Kernel;
use Symfony\Component\Debug\Debug;
use Symfony\Component\HttpFoundation\Request;

require dirname(__DIR__).'/config/bootstrap.php';

if ($_SERVER['APP_DEBUG']) {
    umask(0000);

    Debug::enable();
} else {
    $_SERVER['HTTPS'] = 'on';
}

$kernel = new Kernel($_SERVER['APP_ENV'], (bool) $_SERVER['APP_DEBUG']);
$request = Request::createFromGlobals();

// tell Symfony about your reverse proxy
Request::setTrustedProxies(
// the IP address (or range) of your proxy
    ['192.0.0.1', $request->server->get('REMOTE_ADDR')],

    // trust *all* "X-Forwarded-*" headers
    Request::HEADER_X_FORWARDED_ALL
);

$response = $kernel->handle($request);
$response->send();
$kernel->terminate($request, $response);

