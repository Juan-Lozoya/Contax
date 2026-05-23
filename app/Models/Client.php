<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Attributes\Fillable;
use Illuminate\Database\Eloquent\Concerns\HasUlids;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

#[Fillable([
    'user_id',
    'name',
    'email',
    'phone_number',
    'rfc',
    'tax_regime',
    'zip_code',
    'corporate_reason',
    'commercial_name',
    'is_active',
])]
class Client extends Model
{
    use HasUlids;


    protected function casts(): array
    {
        return [
            'rfc' => 'encrypted',
            'is_active' => 'boolean',
        ];
    }

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }
}
