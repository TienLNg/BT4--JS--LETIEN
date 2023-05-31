const dsnv = new DanhSachNhanVien();

const validation = new Validation();

//! khởi tạo 
function setLocalStorage() {
   
    localStorage.setItem("DSNV", JSON.stringify(dsnv.mangNV));
}

function getLocalstorage() {
    //getItem => return JSON (kiểu dữ liệu lưu ở DB backend)
    var dataLocal = JSON.parse(localStorage.getItem("DSNV"));
    // console.log(dataLocal);
    if (dataLocal !== null) {
        //có dữ liệu
        hienThiTable(dataLocal);
        dsnv.mangNV = dataLocal;
    }
}

// gọi khi load web 
getLocalstorage()

function themNhanVien() {
    var id = document.getElementById("tknv").value;
    var ten = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var ngaylam = document.getElementById("datepicker").value;
    var luong = document.getElementById("luongCB").value;
    var chuc = document.getElementById("chucvu").value;
    var giolam = document.getElementById("gioLam").value;
    

    // console.log(id,ten,email,password,ngaylam,luong,chuc,giolam);


    var isValid = true; 

    // ID
    isValid &= validation.checkEmpty(id,"tbTKNV","Mã nhân viên không được để trống!!!") && validation.checkEmpty(id,"tbTKNV","Tài khoản tối đa 4-6 số & không được trùng", dsnv.mangNV);

    // // tên
    // isValid &= validation.checkEmpty(ten,"spanTenSV","Tên sinh viên không được để trống") && validation.checkName(ten,"spanTenSV","Tên sinh viên chỉ được chứa ký tự chữ");

    // // email: kiểm tra định dạng email 
    // isValid &= validation.checkEmail(email,"spanEmailSV","Email chưa đúng định dạng");

    // // phone: kiểm tra định dạng sđt
    // isValid &= validation.checkPhone(sdt,"spanPhone","Số điện thoại chưa đúng định dạng");

    // // score: kiểm tra định dạng điểm
    // isValid &= validation.checkScore(RL,"spanRenluyen","Điểm phải từ 0 đến 10");
    // isValid &= validation.checkScore(toan,"spanToan","Điểm phải từ 0 đến 10");
    // isValid &= validation.checkScore(ly,"spanLy","Điểm phải từ 0 đến 10");
    // isValid &= validation.checkScore(hoa,"spanHoa","Điểm phải từ 0 đến 10");
    

    if (isValid) {

    var nv = new nhanVien(id,ten,email,password,ngaylam,Number(luong),chuc,Number(giolam));

    // nv.tinhtongluong();
    console.log(nv);

    dsnv.themNV(nv);

    setLocalStorage();
    hienThiTable(dsnv.mangSV);
    }
   
}


function hienThiTable(mang) {
    var content = "";

    mang.map(function (nv) {
     
        var trNV = ` <tr>
        <td>${nv.idNV} </td>
        <td>${nv.tenNV} </td>
        <td>${nv.email} </td>
        <td>${nv.ngaylam} </td>
        <td>${nv.chucvu} </td>
        <td>${nv.tongluong} </td>
        <td>${nv.xeploai} </td>


        <td>
            <button class="btn btn-danger" onclick="xoaSinhVien('${nv.idNV}')" >Xoá</button>
            <button class="btn btn-info" data-toggle="modal" data-target="#myModal" onclick="xemThongTin('${nv.idNV}')">Xem</button>

        </td>
        
        </tr> `;

        content += trNV;

    })

    // console.log(content);

    document.getElementById("tableDanhSach").innerHTML = content;
}


function xoaSinhVien(id) {
    dsnv.xoaNV(id);
    hienThiTable(dsnv.mangNV);
    setLocalStorage();
}




function xemThongTin(id) {
    var indexFind = dssv.timIndex(id);
    if (indexFind > -1) {
        // tìm thấy vị trí của sv 
        console.log(dssv.mangSV[indexFind]);
        var svFind = dssv.mangSV[indexFind]
        document.getElementById("txtMaSV").value = svFind.maSV;
        document.getElementById("txtMaSV").disabled = true;//ngăn người dùng sửa mã
        document.getElementById("txtTenSV").value = svFind.tenSV;
        document.getElementById("txtEmail").value = svFind.email;
        document.getElementById("loaiSV").value = svFind.loai;
        document.getElementById("txtPhone").value = svFind.sdt;
        document.getElementById("txtDiemRenluyen").value = svFind.diemRL;
        document.getElementById("txtDiemToan").value = svFind.diemToan;
        document.getElementById("txtDiemLy").value = svFind.diemLy;
        document.getElementById("txtDiemHoa").value = svFind.diemHoa;
    }
}


function capNhatSV() {
    // lấy dữ liệu từ form 
    var ma = document.getElementById("txtMaSV").value;
    var ten = document.getElementById("txtTenSV").value;
    var email = document.getElementById("txtEmail").value;
    var loai = document.getElementById("loaiSV").value;
    var sdt = document.getElementById("txtPhone").value;
    var RL = document.getElementById("txtDiemRenluyen").value;
    var toan = document.getElementById("txtDiemToan").value;
    var ly = document.getElementById("txtDiemLy").value;
    var hoa = document.getElementById("txtDiemHoa").value;

    console.log(ma, ten, email, loai, sdt, hoa, ly, toan, RL);

    // tạo đối tượng sinh viên
    // instance : thể hiện của lớp đối tượng 
    var sv = new SinhVien(ma, ten, email, loai, sdt, Number(RL), Number(ly), Number(hoa), Number(toan));
    sv.tinhDTB();
    console.log(sv);

    var result = dssv.capNhat(sv);
    if (result) {
        setLocalStorage();
        hienThiTable(dssv.mangSV);
        resetForm();
    } else {
        alert("Cập nhật thất bại!!!")
        
    }

}

function resetForm() {
    document.getElementById("txtMaSV").disabled = false;
    document.getElementById("formQLSV").reset();
    // nếu ko có thẻ form 
    // document.getElementById("txtMaSV").disabled = false;

}

// document.getElementById("txtSearch").onkeyup = function () {
//     var tuTim = document.getElementById("txtSearch").value;
//     var mangTK = dssv.timKiemTheoTen(tuTim);
//     hienThiTable(mangTK);
// }
