<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreClientRequest;
use App\Http\Requests\UpdateClientRequest;
use App\Models\Client;
use App\Models\TaxRegime;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use Inertia\Response;

class ClientController extends Controller
{
    public function index(Request $request): Response
    {
        $clients = $request->user()
            ->clients()
            ->with('taxRegime')
            ->latest()
            ->paginate(10);

        $taxRegime = TaxRegime::where('code', '626')->first();

        $clientsMock = Client::factory()
            ->count(8)
            ->make([
                'user_id' => Auth::id(),
                'tax_regime_id' => $taxRegime->id,
            ]);

        $clientsMock->each->setRelation('taxRegime', $taxRegime);

        return Inertia::render('clients/index', [
            'clients' => $clients,
            'clientsMock' => $clientsMock,
        ]);
    }

    public function store(StoreClientRequest $request): RedirectResponse
    {
        Client::create([
            ...$request->validated(),
            'user_id' => $request->user()->id
        ]);

        return redirect()
            ->route('clients.index')
            ->with('toast', [
                'type' => 'success',
                'message' => __('Cliente creado exitosamente')
            ]);
    }

    public function create(): Response
    {
        return Inertia::render('clients/create');
    }

    public function update(UpdateClientRequest $request, Client $client): RedirectResponse
    {
        $this->authorizeClient($client);
        $client->update($request->validated());

        return redirect()
            ->route('clients.index')
            ->with('toast', [
                'type' => 'success',
                'message' => __('Cliente actualizado exitosamente')
            ]);
    }

    public function destroy(Client $client): RedirectResponse
    {
        $this->authorizeClient($client);
        $client->delete();

        return redirect()
            ->route('clients.index')
            ->with('toast', [
                'type' => 'success',
                'message' => __('Cliente borrado exitosamente')
            ]);
    }

    public function edit(Client $client): Response
    {
        $this->authorizeClient($client);

        return Inertia::render('clients/edit', [
            'client' => $client
        ]);
    }

    private function authorizeClient(Client $client): void
    {
        abort_if(
            Auth::user()->id !== $client->user_id,
            403
        );
    }
}
