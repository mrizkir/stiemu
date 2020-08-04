<?php

use Illuminate\Database\Seeder;

use Carbon\Carbon;

class StatusTransaksiTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        \DB::statement('DELETE FROM pe3_status_transaksi');
        
        \DB::table('pe3_status_transaksi')->insert([
            'id_status'=>0,
            'nama_status'=>'UNPAID', 
            'style'=>'amber accent-1'           
        ]);        

        \DB::table('pe3_status_transaksi')->insert([
            'id_status'=>1,
            'nama_status'=>'PAID',
            'style'=>'light-green lighten-1'            
        ]);  

        \DB::table('pe3_status_transaksi')->insert([
            'id_status'=>2,
            'nama_status'=>'CANCELED', 
            'style'=>'red darken-2'           
        ]);        
    }
}
