<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\LoginRequest;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Auth;

class AuthenticatedSessionController extends Controller
{
    /**
     * Handle an incoming authentication request.
     */
   public function store(LoginRequest $request): Response
{
    $request->authenticate();
    Log::info('Authentication succeeded');

    $request->session()->regenerate();
    Log::info('Session regenerated');

    $user = auth()->user();
    Log::info('User retrieved: ' . $user);

    return response()->json([
        'user' => $user,
    ]);
}

    /**
     * Destroy an authenticated session.
     */
    public function destroy(Request $request): Response
    {
        Auth::guard('web')->logout();

        $request->session()->invalidate();

        $request->session()->regenerateToken();

        return response()->noContent();
    }
    public function user()
    {

        $user = auth()->user();
        return response()->json([
            'user' => $user,
        ]);
    }
}
