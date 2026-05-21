<?php

namespace Database\Seeders;

use App\Models\PaymentForm;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class PaymentFormSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        PaymentForm::insert([
            [
                'code' => '01',
                'name' => 'Efectivo',
            ],
            [
                'code' => '03',
                'name' => 'Transferencia electrónica de fondos',
            ],
            [
                'code' => '04',
                'name' => 'Tarjeta de crédito',
            ],
            [
                'code' => '28',
                'name' => 'Tarjeta de débito',
            ],
            [
                'code' => '99',
                'name' => 'Por definir',
            ]
        ]);
    }
}
