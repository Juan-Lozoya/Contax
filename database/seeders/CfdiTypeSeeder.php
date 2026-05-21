<?php

namespace Database\Seeders;

use App\Models\CfdiType;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class CfdiTypeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        CfdiType::insert([
            [
                'code' => 'I',
                'name' => 'Ingreso'
            ],
            [
                'code' => 'E',
                'name' => 'Egreso'
            ],
            [
                'code' => 'T',
                'name' => 'Traslado'
            ],
            [
                'code' => 'P',
                'name' => 'Pago'
            ],
            [
                'code' => 'N',
                'name' => 'Nómina'
            ],
        ]);
    }
}
