<?php

namespace App\Http\Controllers\System;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\System\ConfigurationModel;
use App\Models\DMaster\TAModel;
use App\Models\DMaster\FakultasModel;
use App\Models\DMaster\ProgramStudiModel;
use App\Models\DMaster\StatusMahasiswaModel;


class UIController extends Controller {    
    /**
     * digunakan untuk mendapatkan Identitas Perguruan Tinggi
     */
    public function frontend ()
    {
        $config = ConfigurationModel::getCache();
        $captcha_site_key = $config['CAPTCHA_SITE_KEY'];
        $tahun_pendaftaran = $config['DEFAULT_TAHUN_PENDAFTARAN'];
        $semester_pendaftaran = $config['DEFAULT_SEMESTER_PENDAFTARAN'];
        $identitas['nama_pt']=$config['NAMA_PT'];
        $identitas['nama_pt_alias']=$config['NAMA_PT_ALIAS'];
        $identitas['bentuk_pt']=$config['BENTUK_PT'];
        return Response()->json([
                                    'status'=>1,
                                    'pid'=>'fetchdata',
                                    'captcha_site_key'=>$captcha_site_key,
                                    'tahun_pendaftaran'=>$tahun_pendaftaran,
                                    'semester_pendaftaran'=>$semester_pendaftaran,
                                    'identitas'=>$identitas,
                                    'message'=>'Fetch data ui untuk front berhasil diperoleh'
                                ],200);  
    }
    /**
     * digunakan untuk mendapatkan Identitas Perguruan Tinggi
     */
    public function admin ()
    {
        $config = ConfigurationModel::getCache();        
        $daftar_semester=[
                            0=>[
                                'id'=>1,
                                'text'=>'GANJIL'
                            ],
                            1=>[
                                'id'=>2,
                                'text'=>'GENAP'
                            ],
                            2=>[
                                'id'=>3,
                                'text'=>'PENDEK'
                            ]
                        ];

        if ($this->hasRole('superadmin'))
        {
            $daftar_ta=TAModel::all();        

            $daftar_fakultas=FakultasModel::all();
            $fakultas_id=$config['DEFAULT_FAKULTAS'];        

            $daftar_prodi=ProgramStudiModel::all();
            $prodi_id=$config['DEFAULT_PRODI'];    
            
            $tahun_pendaftaran = $config['DEFAULT_TAHUN_PENDAFTARAN'];
            $tahun_akademik = $config['DEFAULT_TA'];
        }
        elseif($this->hasRole('pmb'))
        {
            $daftar_ta=TAModel::all();        

            $userid=$this->getUserid();
            $daftar_prodi=$this->guard()->user()->prodi;

            if ($daftar_prodi->count()>0)
            {
                $daftar_fakultas=FakultasModel::select(\DB::raw('kode_fakultas,nama_fakultas'))
                            ->whereExists(function ($query) use ($userid) {
                                $query->select(\DB::raw(1))
                                    ->from('usersprodi')
                                    ->join('pe3_prodi','pe3_prodi.id','usersprodi.prodi_id')
                                    ->where('user_id',$userid);
                            })
                            ->get();
                            
                $fakultas_id=$config['DEFAULT_FAKULTAS'];            
                $prodi_id=$daftar_prodi[0]->id;
            }
            else
            {
                $daftar_fakultas=FakultasModel::all();
                $fakultas_id=$config['DEFAULT_FAKULTAS'];        

                $daftar_prodi=ProgramStudiModel::all();
                $prodi_id=$config['DEFAULT_PRODI'];     
            }            
            $tahun_pendaftaran = $config['DEFAULT_TAHUN_PENDAFTARAN'];
            $tahun_akademik = $config['DEFAULT_TA'];
        }
        elseif ($this->hasRole('keuangan'))
        {
            $daftar_ta=TAModel::all();        

            $userid=$this->getUserid();
            $daftar_prodi=$this->guard()->user()->prodi;

            if ($daftar_prodi->count()>0)
            {
                $daftar_fakultas=FakultasModel::select(\DB::raw('kode_fakultas,nama_fakultas'))
                            ->whereExists(function ($query) use ($userid) {
                                $query->select(\DB::raw(1))
                                    ->from('usersprodi')
                                    ->join('pe3_prodi','pe3_prodi.id','usersprodi.prodi_id')
                                    ->where('user_id',$userid);
                            })
                            ->get();
                            
                $fakultas_id=$config['DEFAULT_FAKULTAS'];            
                $prodi_id=$daftar_prodi[0]->id;
            }
            else
            {
                $daftar_fakultas=FakultasModel::all();
                $fakultas_id=$config['DEFAULT_FAKULTAS'];        

                $daftar_prodi=ProgramStudiModel::all();
                $prodi_id=$config['DEFAULT_PRODI'];     
            }            
            $tahun_pendaftaran = $config['DEFAULT_TAHUN_PENDAFTARAN'];
            $tahun_akademik = $config['DEFAULT_TA'];
        }
        elseif ($this->hasRole('mahasiswabaru'))
        {
            $formulir=\App\Models\SPMB\FormulirPendaftaranModel::find($this->getUserid());
            $daftar_ta=TAModel::where('tahun','=',$formulir->ta)
                                ->get();        
            
            $daftar_fakultas=[];
            $fakultas_id=$config['DEFAULT_FAKULTAS'];
            
            $daftar_prodi=ProgramStudiModel::where('id',$formulir->kjur1)->get();
            $prodi_id=$formulir->kjur1;

            $tahun_pendaftaran = $formulir->ta;
            $tahun_akademik = $formulir->ta;
        }        
        elseif ($this->hasRole('mahasiswa'))
        {
            $formulir=\App\Models\SPMB\FormulirPendaftaranModel::find($this->getUserid());
            $daftar_ta=TAModel::where('tahun','>=',$formulir->ta)
                                ->get();        
            
            $daftar_fakultas=[];
            $fakultas_id=$config['DEFAULT_FAKULTAS'];
            
            $daftar_prodi=ProgramStudiModel::where('id',$formulir->kjur1)->get();
            $prodi_id=$formulir->kjur1;

            $tahun_pendaftaran = $formulir->ta;
            $tahun_akademik = $formulir->ta;
        }        
        elseif ($this->hasRole(['akademik','programstudi']))
        {
            $daftar_ta=TAModel::all();        

            $userid=$this->getUserid();
            $daftar_prodi=$this->guard()->user()->prodi;

            $daftar_fakultas=FakultasModel::select(\DB::raw('kode_fakultas,nama_fakultas'))
                        ->whereExists(function ($query) use ($userid) {
                            $query->select(\DB::raw(1))
                                ->from('usersprodi')
                                ->join('pe3_prodi','pe3_prodi.id','usersprodi.prodi_id')
                                ->where('user_id',$userid);
                        })
                        ->get();
                        
            $fakultas_id=$config['DEFAULT_FAKULTAS'];            
            $prodi_id=$daftar_prodi[0]->id;

            $tahun_pendaftaran = $config['DEFAULT_TAHUN_PENDAFTARAN'];
            $tahun_akademik = $config['DEFAULT_TA'];
        }
        elseif ($this->hasRole(['dosen','dosenwali']))
        {
            $daftar_ta=TAModel::all();        

            $daftar_fakultas=FakultasModel::all();
            $fakultas_id=$config['DEFAULT_FAKULTAS'];        

            $daftar_prodi=ProgramStudiModel::all();
            $prodi_id=$config['DEFAULT_PRODI'];    
            
            $tahun_pendaftaran = $config['DEFAULT_TAHUN_PENDAFTARAN'];
            $tahun_akademik = $config['DEFAULT_TA'];            
        }
        $daftar_kelas=\App\Models\DMaster\KelasModel::select(\DB::raw('idkelas AS id,nkelas AS text'))
                                                    ->get();
        $idkelas='A';

        $daftar_status_mhs=StatusMahasiswaModel::select(\DB::raw('k_status AS id,n_status AS text'))
                                                ->get();
        $k_status='A';
        return Response()->json([
                                    'status'=>1,
                                    'pid'=>'fetchdata',  
                                    'daftar_ta'=>$daftar_ta,    
                                    'tahun_pendaftaran'=>$tahun_pendaftaran,
                                    'tahun_akademik'=>$tahun_akademik,
                                    'daftar_semester'=>$daftar_semester,    
                                    'semester_akademik' => $config['DEFAULT_SEMESTER'],
                                    'daftar_fakultas'=>$daftar_fakultas,
                                    'fakultas_id'=>$fakultas_id,                                    
                                    'daftar_prodi'=>$daftar_prodi,
                                    'prodi_id'=>$prodi_id,                                    
                                    'daftar_kelas'=>$daftar_kelas,                              
                                    'idkelas'=>$idkelas,
                                    'daftar_status_mhs'=>$daftar_status_mhs,
                                    'k_status'=>$k_status,
                                    'message'=>'Fetch data ui untuk admin berhasil diperoleh'
                                ],200);  
    }
}               