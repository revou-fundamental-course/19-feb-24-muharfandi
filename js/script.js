var nama = window.prompt("mohon isi nama anda");
document.write("halo!"+nama +" selamat datang di website buatan saya");

function coba_function() {
    document.getElementById("demo").innerHTML = "halo nama saya muh arfandi saya tinggal di kota makassar,<br> email: arfandi2008@gmail.com.<br> nomor telepon: 082346514686";
}
function coba() {
    document.getElementById("demo").innerHTML = "saat ini saya menempuh pendidikan disekolah smk kartika xx-1 makassar";
}
function messageus(){
    document.getElementById("demo").innerHTML = "teruslah belajar karna belajar bisa membuatmu sukses";
}

function kirim() {
    var nama = document.getElementById("nama").value;
    var tanggallahir = document.getElementById("tanggal lahir").value;
    var gender = document.getElementById("gender").value;
    var pesan = document.getElementById("pesan").value;
    var keluaran = document.getElementById("keluaran");
    keluaran.innerHTML ="nama:"+ nama+"<br>"+"tanggal lahir:" + tanggallahir +"<br>"+"jenis kelamin:"+ gender+"<br>"+"message:"+ pesan;
}




