<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;

class BearerTokenMiddleware
{
    public function handle(Request $request, Closure $next)
    {
        // Check if the request has a 'Authorization' header
        if ($request->header('Authorization')) {
            $token = str_replace('Bearer ', '', $request->header('Authorization'));

            // Check if the token is valid 
            if ($this->isValidToken($token)) {
                // Token is valid, proceed with the request
                return $next($request);
            }
        }

        // Token is invalid or not provided, return unauthorized response
        return response()->json(['error' => 'Unauthorized'], 401);
    }

    // You can implement your own logic to validate the token
    private function isValidToken($token)
    {

        if($token == 1234) return true;
    // logic
    // const token = req.headers.authorization.split(" ")[1];

        return false;
    }
}
