<html>
<head>
<style>
.table {		
    width:100%;
    border-collapse: collapse;    
}
.table th {
    border: 1px solid #000;	    
}
.table td {
    border: 1px solid #000;	    
}
</style>
</head>
<body>
@include('report.ReportHeader')
<table>
    <tbody>
        <tr>
            <td>Nama Mahasiswa</td>
            <td>:</td>
            <td width="250">{{$data_krs->nama_mhs}} ({{$data_krs->jk}})</td>

            <td>Fakultas</td>
            <td>:</td>
            <td>-</td>
        </tr>
        <tr>
            <td>NIRM</td>
            <td>:</td>
            <td>{{$data_krs->nirm}}</td>

            <td>Program Studi</td>
            <td>:</td>
            <td>{{$data_krs->nama_prodi}}</td>
        </tr>
        <tr>
            <td>NIM</td>
            <td>:</td>
            <td>{{$data_krs->nim}}</td>

            <td>Semester / T.A</td>
            <td>:</td>
            <td>{{ucwords(strtolower($data_krs->nama_semester))}} / {{$data_krs->tahun}}-{{$data_krs->tahun+1}}</td>
        </tr>
    </tbody>
</table>
<table class="table">
    <thead>
        <tr>
            <th width="10" rowspan="2">NO</th>
            <th width="70" rowspan="2">KODE</th>
            <th width="250" rowspan="2">NAMA</th>
            <th width="50" rowspan="2">SKS</th>
            <th width="50" rowspan="2">NAMA DOSEN</th>
            <th width="50" colspan="2">PARAF</th>
        </tr>
        <tr>            
            <th width="50">UTS</th>
            <th width="50">UAS</th>
        </tr>
    </thead>
    <tbody>
        @foreach ($daftar_matkul as $key=>$item)
        <tr>
            <td style="text-align:center">
                {{ $key + 1 }}    
            </td>  
            <td>
                {{ $item->kmatkul}}    
            </td>  
            <td>
                {{ $item->nmatkul}}    
            </td>  
            <td style="text-align:center">
                {{ $item->sks}}    
            </td>  
            <td>

            </td>
            <td></td>
            <td></td>
        </tr>
        @endforeach
    </tbody>
</table>
</body>
</html>