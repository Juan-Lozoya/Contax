<?php

namespace App\Http\Controllers;

use App\Models\Client;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class DashboardController extends Controller
{
    public function index()
    {
        // Mock up datos
        $clients = Client::factory()
            ->count(3)
            ->make([
                'user_id' => Auth::id(),
            ]);

        return Inertia::render('dashboard', [
            'clients' => $clients
        ]);
    }
}
