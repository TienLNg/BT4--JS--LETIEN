
function DanhSachNhanVien() {
    this.mangNV = [];
     
    this.themNV = function(nv){
        this.mangNV.push(nv);
    }

    this.timIndex = function(id){
        var indexFind = -1;
        this.mangNV.map(function(nv,index){
            if (nv.idNV === id) {
                
                indexFind = index;
            }
        });
        console.log(indexFind);
        return indexFind;
    };
    this.xoaNV = function(id){
        var index = this.timIndex(id);
        console.log(index);
        if (index > -1) {

            this.mangNV.splice(index,1)
        }
    };
    this.capNhat = function(sv){
        // tìm sv cần cập nhật 
        var indexFind = this.timIndex(sv.maSV);
        if (indexFind > -1 ) {
            
            // tìm thấy mới cập nhật 
            // sv: chứa thông tin mới
            // gán dữ liệu mới vào vị trí của sv cần cập nhật
            dssv.mangSV[indexFind] = sv;
            return true;//đã cập nhật
        } else {
            return false;
        }
    }
}

// tìm kiếm theo tên
DanhSachNhanVien.prototype.timKiemTheoLoai = function (tuTim) {
    var mangTK = [];
    // chuyển các chuỗi sang chữ thường
    var tuTimThuong = tuTim.toLowerCase();
    // xoá khoảng trắng, tab \t ,
    var tuTimReplace = tuTimThuong.replace(/\s/g,"");
    this.mangSV.map(function(sv,index){
        var tenThuong = sv.tenSV.toLowerCase();
        var tenReplace = tenThuong.replace(/\s/g,"")

        // kiểm tra tên sv có chưa từ cần tìm không
        var result = tenReplace.indexOf(tuTimReplace);
        if (result > -1) {
            // tìm thấy
            mangTK.push(sv);
        }
    })
    return mangTK;
}