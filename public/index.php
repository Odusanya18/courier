<?php

use App\Kernel;
use Symfony\Component\Debug\Debug;
use Symfony\Component\HttpFoundation\Request;

require dirname(__DIR__).'/config/bootstrap.php';

if ($_SERVER['APP_DEBUG']) {
    umask(0000);

    Debug::enable();
}

$kernel = new Kernel($_SERVER['APP_ENV'], (bool) $_SERVER['APP_DEBUG']);
$request = Request::createFromGlobals();

// tell Symfony about your reverse proxy
Request::setTrustedProxies(
    ['127.0.0.1', '172.0.0.0/8', '10.0.0.0/8', '192.0.0.1', $request->server->get('REMOTE_ADDR')],

    Request::HEADER_X_FORWARDED_PROTO
);

$response = $kernel->handle($request);
$response->send();
$kernel->terminate($request, $response);

