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

if (!$request->server->has('APP_DEBUG')) {
    $request->server->set('HTTPS', 'on');
}

// tell Symfony about your reverse proxy
Request::setTrustedProxies(
// the IP address (or range) of your proxy
    ['127.0.0.1', '172.0.0.0/8'],
    // trust *all* "X-Forwarded-*" headers
    Request::HEADER_X_FORWARDED_ALL
// or, if your proxy instead uses the "Forwarded" header
// Request::HEADER_FORWARDED
// or, if you're using AWS ELB
// Request::HEADER_X_FORWARDED_AWS_ELB
);

$response = $kernel->handle($request);
$response->send();
$kernel->terminate($request, $response);

