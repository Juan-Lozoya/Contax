<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class ClientController extends Controller
{
    public function index(Request $request)
    {
        $clients = $request->user()->clients()->latest()->paginate(10);

        return Inertia::render('clientes/index', [
            'clients' => $clients,
        ]);
    }

    public function store()
    {

    }

    public function create()
    {

    }

    public function show(Request $id)
    {
        $userId = $id;
    }

    public function update()
    {

    }

    public function destroy()
    {

    }

    public function edit() {}
}
