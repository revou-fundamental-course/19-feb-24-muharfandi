function coba_function() {
    document.getElementById("demo").innerHTML = "halo nama saya muh arfandi saya tinggal di kota makassar";
}
function coba() {
    document.getElementById("demo").innerHTML = "saat ini saya menempuh pendidikan disekolah smk kartika xx-1 makassar";
}
function messageus(){
    document.getElementById("demo").innerHTML = "terus belajar";
}

function kirim() {
    var nama = document.getElementById("nama").value;
    var tanggallahir = document.getElementById("tanggal lahir").value;
    var gender = document.getElementById("gender").value;
    var pesan = document.getElementById("pesan").value;
    var keluaran = document.getElementById("keluaran");
    keluaran.innerHTML = nama+"<br>"+ tanggallahir +"<br>"+ gender+"<br>"+ pesan;
}




