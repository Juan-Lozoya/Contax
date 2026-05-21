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
        Schema::create('certificates', function (Blueprint $table) {
            $table->id();
            $table->foreignUlid('client_id')->constrained()->cascadeOnDelete();
            $table->string('cer_path')->nullable();
            $table->string('key_path')->nullable();
            $table->string('key_password')->nullable();
            $table->string('certificate_number')->nullable();

            $table->date('valid_from');
            $table->date('valid_to');

            $table->boolean('is_active')->default(true);

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('certificates');
    }
};
