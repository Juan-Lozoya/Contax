<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('invoices', function (Blueprint $table) {
            $table->id();
            $table->foreignUlid('client_id')->constrained()->cascadeOnDelete();

            $table->uuid('uuid');

            $table->string('serie', length: 25)->nullable();
            $table->string('folio', length: 50)->nullable();

            $table->decimal('subtotal', 12 , 2);
            $table->decimal('discount', 12, 2)->default(0);
            $table->decimal('tax', 12, 2)->default(0);
            $table->decimal('total', 12,2 );

            $table->foreignId('currency_id')->constrained()->restrictOnDelete();

            $table->foreignId('cfdi_type_id')->constrained()->restrictOnDelete();

            $table->foreignId('payment_method_id')->constrained()->restrictOnDelete();
            $table->foreignId('payment_form_id')->constrained()->restrictOnDelete();

            $table->foreignId('invoice_status_id')->constrained()->restrictOnDelete();

            $table->text('xml_path')->nullable();
            $table->text('pdf_path')->nullable();

            $table->timestamp('stamped_at')->nullable();
            $table->timestamp('cancelled_at')->nullable();

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('invoices');
    }
};
