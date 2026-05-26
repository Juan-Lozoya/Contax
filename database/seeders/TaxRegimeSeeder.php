<?php

namespace Database\Seeders;

use App\Models\TaxRegime;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class TaxRegimeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        TaxRegime::insert([
            [
                'code' => '601',
                'name' => 'REGIMEN GENERAL DE LEY PERSONAS MORALES'
            ],
            [
                'code' => '602',
                'name' => 'RÉGIMEN SIMPLIFICADO DE LEY PERSONAS MORALES'
            ],
            [
                'code' => '603',
                'name' => 'PERSONAS MORALES CON FINES NO LUCRATIVOS'
            ],
            [
                'code' => '604',
                'name' => 'RÉGIMEN DE PEQUEÑOS CONTRIBUYENTES'
            ],
            [
                'code' => '605',
                'name' => 'RÉGIMEN DE SUELDOS Y SALARIOS E INGRESOS ASIMILADOS A SALARIOS'
            ],
            [
                'code' => '606',
                'name' => 'RÉGIMEN DE ARRENDAMIENTO'
            ],
            [
                'code' => '607',
                'name' => 'RÉGIMEN DE ENAJENACIÓN O ADQUISICIÓN DE BIENES'
            ],
            [
                'code' => '608',
                'name' => 'RÉGIMEN DE LOS DEMÁS INGRESOS'
            ],
            [
                'code' => '609',
                'name' => 'RÉGIMEN DE CONSOLIDACIÓN'
            ],
            [
                'code' => '610',
                'name' => 'RÉGIMEN RESIDENTES EN EL EXTRANJERO SIN ESTABLECIMIENTO PERMANENTE EN MÉXICO'
            ],
            [
                'code' => '611',
                'name' => 'RÉGIMEN DE INGRESOS POR DIVIDENDOS (SOCIOS Y ACCIONISTAS)'
            ],
            [
                'code' => '612',
                'name' => 'RÉGIMEN DE LAS PERSONAS FÍSICAS CON ACTIVIDADES EMPRESARIALES Y PROFESIONALES'
            ],
            [
                'code' => '613',
                'name' => 'RÉGIMEN INTERMEDIO DE LAS PERSONAS FÍSICAS CON ACTIVIDADES EMPRESARIALES'
            ],
            [
                'code' => '614',
                'name' => 'RÉGIMEN DE LOS INGRESOS POR INTERESES'
            ],
            [
                'code' => '615',
                'name' => 'RÉGIMEN DE LOS INGRESOS POR OBTENCIÓN DE PREMIOS'
            ],
            [
                'code' => '616',
                'name' => 'SIN OBLIGACIONES FISCALES'
            ],
            [
                'code' => '617',
                'name' => 'PEMEX'
            ],
            [
                'code' => '618',
                'name' => 'RÉGIMEN SIMPLIFICADO DE LEY PERSONAS FÍSICAS'
            ],
            [
                'code' => '619',
                'name' => 'INGRESOS POR LA OBTENCIÓN DE PRÉSTAMOS'
            ],
            [
                'code' => '620',
                'name' => 'SOCIEDADES COOPERATIVAS DE PRODUCCIÓN QUE OPTAN POR DIFERIR SUS INGRESOS'
            ],
            [
                'code' => '621',
                'name' => 'RÉGIMEN DE INCORPORACIÓN FISCAL'
            ],
            [
                'code' => '622',
                'name' => 'RÉGIMEN DE ACTIVIDADES AGRÍCOLAS, GANADERAS, SILVÍCOLAS Y PESQUERAS PM'
            ],
            [
                'code' => '623',
                'name' => 'RÉGIMEN DE OPCIONAL PARA GRUPOS DE SOCIEDADES'
            ],
            [
                'code' => '624',
                'name' => 'RÉGIMEN DE LOS COORDINADOS'
            ],
            [
                'code' => '625',
                'name' => 'RÉGIMEN DE LAS ACTIVIDADES EMPRESARIALES CON INGRESOS A TRAVÉS DE PLATAFORMAS TECNOLÓGICAS'
            ],
            [
                'code' => '626',
                'name' => 'RÉGIMEN SIMPLIFICADO DE CONFIANZA'
            ],
        ]);
    }
}
