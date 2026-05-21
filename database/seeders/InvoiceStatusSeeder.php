<?php

namespace Database\Seeders;

use App\Models\InvoiceStatus;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class InvoiceStatusSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        InvoiceStatus::insert([
            [
                'code' => 'draft',
                'name' => 'Borrador'
            ],
            [
                'code' => 'stamped',
                'name' => 'Timbrada'
            ],
            [
                'code' => 'cancelled',
                'name' => 'Cancelada'
            ]
        ]);
    }
}
