<?php

use App\Models\Client;
use App\Models\User;
use Inertia\Testing\AssertableInertia as Assert;

use function Pest\Laravel\actingAs;
use function Pest\Laravel\delete;
use function Pest\Laravel\get;
use function Pest\Laravel\post;
use function Pest\Laravel\put;

function makeUser(): User
{
    return User::factory()->create();
}

function makeClient(array $attrs = []): Client
{
    return Client::factory()->create($attrs);
}

describe('GET /clients (index)', function () {

    it('redirects unauthenticated users to login', function () {
        get(route('clients.index'))
            ->assertRedirect(route('login'));
    });

    it('renders the clients/index Inertia page with clients', function () {
        $user = makeUser();

        actingAs($user)
            ->get(route('clients.index'))
            ->assertOk()
            ->assertInertia(fn (Assert $page) => $page->component('clients/index')->has('clients'));
    });

    it('only returns clients belonging to the authenticated user', function () {
        $user = makeUser();
        $otherUser = makeUser();

        $ownClient = makeClient(['user_id' => $user->id]);
        $otherClient = makeClient(['user_id' => $otherUser->id]);

        actingAs($user)
         ->get(route('clients.index'))
         ->assertInertia(fn (Assert $page) =>
            $page->component('clients/index')
                ->has('clients.data', 1)
                ->where('clients.data.0.id', $ownClient->id)
        );
    });
});

describe('POST /clients (store)', function () {

    it('redirects unauthenticated users to login', function () {
        post(route('clients.store'), [])
            ->assertRedirect(route('login'));
    });

    it('creates a client and redirects with success toast', function () {
        $user = makeUser();
        $payload = Client::factory()->make()->only([
            'name',
            'email',
            'rfc',
            'is_active',
        ]);

        actingAs($user)
            ->post(route('clients.store'), $payload)
            ->assertRedirect(route('clients.index'))
            ->assertSessionHas('toast.type', 'success');

        $this->assertDatabaseHas('clients', [
            'name' => $payload['name'],
            'email' => $payload['email'],
            'is_active' => $payload['is_active'],
            'user_id' => $user->id,
        ]);
    });

    it('assigns the authenticated user as owner', function () {
        $user = makeUser();
        $payload = Client::factory()->make()->only([
            'name',
            'email',
            'rfc',
            'is_active',
        ]);

        actingAs($user)->post(route('clients.store'), $payload);

        expect(Client::latest()->first()->user_id)->toBe($user->id);
    });

    it('returns validation errors when required fields are missing', function () {
        actingAs(makeUser())
            ->post(route('clients.store'), [])
            ->assertSessionHasErrors();
    });
});

describe('GET /clients/{client}/edit (edit)', function () {
    it('redirects unauthenticated users to login', function () {
        $client = makeClient(['user_id' => makeUser()->id]);

        get(route('clients.edit', $client))
            ->assertRedirect(route('login'));
    });

    it('renders the clients/edit Inertia page with the client', function () {
        $user   = makeUser();
        $client = makeClient(['user_id' => $user->id]);

        actingAs($user)
            ->get(route('clients.edit', $client))
            ->assertOk()
            ->assertInertia(fn (Assert $page) =>
                $page->component('clients/edit')
                     ->where('client.id', $client->id)
            );
    });

    it('returns 403 when editing another user\'s client', function () {
        $user        = makeUser();
        $otherClient = makeClient(['user_id' => makeUser()->id]);

        actingAs($user)
            ->get(route('clients.edit', $otherClient))
            ->assertForbidden();
    });
});

describe('PUT /clients/{client} (update)', function () {

    it('redirects unauthenticated users to login', function () {
        $client = makeClient(['user_id' => makeUser()->id]);

        put(route('clients.update', $client), [])
            ->assertRedirect(route('login'));
    });

    it('updates the client and redirects with success toast', function () {
        $user   = makeUser();
        $client = makeClient(['user_id' => $user->id]);
        $data   = ['name' => 'Updated Name']; // adjust to your validated fields

        actingAs($user)
            ->put(route('clients.update', $client), $data)
            ->assertRedirect(route('clients.index'))
            ->assertSessionHas('toast.type', 'success')
            ->assertSessionHas('toast.message', __('Cliente actualizado exitosamente'));

        $this->assertDatabaseHas('clients', ['id' => $client->id, ...$data]);
    });

    it('returns 403 when updating another user\'s client', function () {
        $user        = makeUser();
        $otherClient = makeClient(['user_id' => makeUser()->id]);

        actingAs($user)
            ->put(route('clients.update', $otherClient), ['name' => 'Hack'])
            ->assertForbidden();
    });

    it('returns validation errors for invalid data', function () {
        $user   = makeUser();
        $client = makeClient(['user_id' => $user->id]);

        actingAs($user)
            ->put(route('clients.update', $client), ['name' => ''])
            ->assertSessionHasErrors('name');
    });

});


describe('DELETE /clients/{client} (destroy)', function () {

    it('redirects unauthenticated users to login', function () {
        $client = makeClient(['user_id' => makeUser()->id]);

        delete(route('clients.destroy', $client))
            ->assertRedirect(route('login'));
    });

    it('deletes the client and redirects with success toast', function () {
        $user   = makeUser();
        $client = makeClient(['user_id' => $user->id]);

        actingAs($user)
            ->delete(route('clients.destroy', $client))
            ->assertRedirect(route('clients.index'))
            ->assertSessionHas('toast.type', 'success')
            ->assertSessionHas('toast.message', __('Cliente borrado exitosamente'));

        $this->assertDatabaseMissing('clients', ['id' => $client->id]);
    });

    it('returns 403 when deleting another user\'s client', function () {
        $user        = makeUser();
        $otherClient = makeClient(['user_id' => makeUser()->id]);

        actingAs($user)
            ->delete(route('clients.destroy', $otherClient))
            ->assertForbidden();

        $this->assertDatabaseHas('clients', ['id' => $otherClient->id]);
    });

});
