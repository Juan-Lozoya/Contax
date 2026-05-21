<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Attributes\Fillable;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

#[Fillable([
    'client_id',
    'currency_id',
    'uuid',
    'serie',
    'folio',
    'subtotal',
    'discount',
    'tax',
    'total' ,
    'cfdi_type_id',
    'payment_method_id',
    'payment_form_id',
    'invoice_status_id',
    'xml_path',
    'pdf_path',
    'stamped_at',
    'cancelled_at'
])]
class Invoice extends Model
{
    public function client(): BelongsTo
    {
        return $this->belongsTo(Client::class);
    }

    public function currency(): BelongsTo
    {
        return $this->belongsTo(Currency::class);
    }

    public function paymentMethod(): BelongsTo
    {
        return $this->belongsTo(PaymentMethod::class);
    }

    public function paymentForm(): BelongsTo
    {
        return $this->belongsTo(PaymentForm::class);
    }

    public function invoiceStatus(): BelongsTo
    {
        return $this->belongsTo(InvoiceStatus::class, 'invoice_status_id');
    }

    public function cfdiType(): BelongsTo
    {
        return $this->belongsTo(CfdiType::class);
    }

    public function items(): HasMany
    {
        return $this->hasMany(InvoiceItem::class);
    }

}
