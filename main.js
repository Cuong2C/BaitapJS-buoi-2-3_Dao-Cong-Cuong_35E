// Bài 1
/* đầu vào: số ngày lam, tiền lương 1 ngày
Xử lý: tiền lương = lương 1 ngày * số ngày làm
Đầu ra = tiền lương.*/
var tinhLuong = document.getElementById("tinhLuong");
tinhLuong.onclick = function(){
    var soNgayLam = document.getElementById("soNgayLam").value*1;
    var luongNgay = document.getElementById("luongNgay").value*1;
    var tienLuong = soNgayLam*luongNgay;
    // format hiển thị số theo đơn vị tiền ...
    var currentFormat = new Intl.NumberFormat("VN-vn");
    var ketQua ="<br>"+"<p>Tổng lương là:"+ currentFormat.format(tienLuong) +"VND</p>";
    document.getElementById("tienLuong").innerHTML=ketQua;
}

// Bài 2: 
/*Đầu vào: giá trị 5 số thực;
 Xử lý: giá trị  trung bình = (number1 + number2 + number3 + number4 + number5)/5 
đầu ra: giá trị trung bình;*/

var tinhTrungBinh = document.getElementById("tinhTrungBinh");
tinhTrungBinh.onclick = function(){
// document.getElementById("tinhTrungBinh").onclick = function(){ cách viết gọn.
    var soThu1 = document.getElementById("soThu1").value*1;
    var soThu2 = document.getElementById("soThu2").value*1;
    var soThu3 = document.getElementById("soThu3").value*1;
    var soThu4 = document.getElementById("soThu4").value*1;
    var soThu5 = document.getElementById("soThu5").value*1;
    var giatriTB = (soThu1+soThu2+soThu3+soThu4+soThu5)/5;
    var currentFormat = new Intl.NumberFormat("VN-vn");
    var ketQua = "<br>" + "<p>Giá trị trung bình là:"+currentFormat.format(giatriTB)+ "</p>";
    document.getElementById("giatriTB").innerHTML=ketQua;

}

//Bài 3
/* Đầu vào: số USD
Xử lý: VND = số USD*23500
Đầu ra: số VND*/

document.getElementById("quiDoi").onclick = function(){
    var soUSD = document.getElementById("soUSD").value*1;
    var giaTri = soUSD*23500;
    var currentFormat = new Intl.NumberFormat("VN-vn");
    var ketQua = "<br>" + "<p>Giá trị VND tương ứng là: "+currentFormat.format(giaTri)+ "</p>";
    document.getElementById("tienVND").innerHTML = ketQua;
}

//Bài 4
/*đầu vào: chiều dài, rộng
xử lý: chu vi = (dài + rộng)*2
đầu ra: chu vi*/
document.getElementById("tinhChuVi").onclick = function(){
    var chieuDai = document.getElementById("chieuDai").value*1;
    var chieuRong = document.getElementById("chieuRong").value*1;
    var tinhChuVi = (chieuDai +chieuRong)*2;
    var tinhDienTich = chieuDai*chieuRong;
    var ketQua = "<br>" + "<p>Chu vi là: "+ tinhChuVi +"</p>";
    ketQua+="<p>Diện tích là: "+ tinhDienTich +"</p>";
    document.getElementById("chuVi").innerHTML = ketQua;
}


// Bài 5:
/*đầu vào: ký số
xử lý: số hàng chục = math.floor(ký số / 10);
 số hàng dv = ký số % 10;
 đầu ra: tổng = số hàng chục + số hàng dv */
document.getElementById("tinhTong").onclick = function(){
    var soCanTinh = document.getElementById("soCanTinh").value*1;
    var hangDV = Math.floor(soCanTinh%10);
    var hangChuc = Math.floor(soCanTinh/10);
    var tong = hangChuc+hangDV;
    var ketQua = "<br>" + "<p>Tổng ký số là: " + tong +"</p>";
    document.getElementById("tongKySo").innerHTML=ketQua;
}
 



