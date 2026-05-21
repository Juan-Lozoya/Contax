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
        Schema::create('invoice_items', function (Blueprint $table) {
            $table->id();

            $table->foreignId('invoice_id')->constrained();
            $table->string('product_key', length: 20)->nullable();
            $table->string('unit_key', length: 20)->nullable();
            $table->string('description')->nullable();
            $table->decimal('quantity', 12, 2);
            $table->integer('unit_price');
            $table->decimal('subtotal', 12, 2);
            $table->decimal('dicount', 12, 2)->default(0);
            $table->decimal('tax', 12, 2)->default(0);
            $table->decimal('total', 12, 2);

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('invoice_items');
    }
};
