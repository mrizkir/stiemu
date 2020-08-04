<?php

namespace App\Http\Controllers\Keuangan;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use App\Models\Keuangan\KomponenBiayaModel;
use App\Models\Keuangan\BiayaKomponenPeriodeModel;

class BiayaKomponenPeriodeController extends Controller {  
    /**
     * daftar komponen biaya per periode
     */
    public function index(Request $request)
    {
        $this->hasPermissionTo('KEUANGAN-BIAYA-KOMPONEN-PERIODE_BROWSE');
        
        $this->validate($request, [           
            'TA'=>'required',
            'idkelas'=>'required'
        ]);
        
        $ta=$request->input('TA');
        $idkelas=$request->input('idkelas');

        $kombi=BiayaKomponenPeriodeModel::where('tahun',$ta)
                                            ->where('idkelas',$idkelas)
                                            ->get();

        return Response()->json([
                                    'status'=>1,
                                    'pid'=>'fetchdata',  
                                    'kombi'=>$kombi,                                                                                                                                   
                                    'message'=>'Fetch data biaya komponen periode berhasil.'
                                ],200);     
    } 
    /**
     * digunakan untuk meload daftar kombi pertama kali atau selanjutnya ke table pe3_kombi_periode
     */
    public function loadkombiperiode (Request $request)
    {
        $this->hasPermissionTo('KEUANGAN-BIAYA-KOMPONEN-PERIODE_STORE');
        
        $this->validate($request, [           
            'TA'=>'required',
            'idkelas'=>'required'
        ]);
        $ta=$request->input('TA');
        $idkelas=$request->input('idkelas');
        
        $sql = "INSERT INTO pe3_kombi_periode (id,kombi_id,nama_kombi,periode,idkelas,tahun,biaya,created_at,updated_at)
                SELECT UUID(),id,nama AS nama_kombi,periode,'$idkelas' AS idkelas,$ta AS tahun,0 AS biaya,NOW() AS created_at,NOW() AS updated_at FROM pe3_kombi WHERE id NOT IN (SELECT kombi_id FROM pe3_kombi_periode WHERE tahun='$ta' AND idkelas='$idkelas')";                

        \DB::statement($sql);

        $kombi=BiayaKomponenPeriodeModel::where('tahun',$ta)
                                            ->where('idkelas',$idkelas)
                                            ->get();
            
        return Response()->json([
                                    'status'=>1,
                                    'pid'=>'store',  
                                    'kombi'=>$kombi,                                                                                                                                   
                                    'message'=>'Menyalin data kombi ke data kombi periode berhasil.'
                                ],200);     
    } 
    /**
     * digunakan untuk merubah biaya komponen
     */
    public function updatebiaya (Request $request)
    {
        $this->hasPermissionTo('KEUANGAN-BIAYA-KOMPONEN-PERIODE_STORE');
        
        $this->validate($request, [           
            'id'=>'required|exists:pe3_kombi_periode,id',
            'biaya'=>'required'
        ]);
        $id=$request->input('id');
        $biaya=$request->input('biaya');
        
        $kombi_biaya=BiayaKomponenPeriodeModel::find($id);
        $kombi_biaya->biaya=$biaya;
        $kombi_biaya->save();

        return Response()->json([
                                    'status'=>1,
                                    'pid'=>'update',     
                                    'kombi_biaya'=>$kombi_biaya,                                                                                                                                                               
                                    'message'=>'Mengubah biaya komponen '.$kombi_biaya->nama_kombi.'berhasil.'
                                ],200);     
    } 
}