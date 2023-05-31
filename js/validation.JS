function Validation() {
 
    this.checkEmpty = function (value,spanID, message) {
        if (value === "") {
            //? chưa hợp lệ
            // thông báo lỗi 
            document.getElementById(spanID).innerHTML = message;
            document.getElementById(spanID).style.display = "block";
            // trả kết quả false
            return false;
        }
        document.getElementById(spanID).innerHTML = "";
        document.getElementById(spanID).style.display = "none";
        // trả kết quả true
        return true;
    }
    this.checkID = function (value, spanID, message, mangSV) {
        // some(): duyệt mảng, kiểm tra theo điều kiện => return true/false
        // sv: từng sinh viên trong mảng
        var isExist = mangSV.some(function (sv, index) {
            // return biểu thức so sánh 
            return sv.maSV === value;
        });
        if (isExist) {
            //? chưa hợp lệ 
            // đã tồn tại mã 
            // thông báo lỗi 
            document.getElementById(spanID).innerHTML = message;
            document.getElementById(spanID).style.display = "block";
            // trả kết quả false
            return false;
        }
        document.getElementById(spanID).innerHTML = "";
        document.getElementById(spanID).style.display = "none";
        // trả kết quả true
        return true;
        
    }

    this.checkName = function (value, spanID,message) {
        // biểu thức chính quy (RegExp)
        var pattern = /^[a-z A-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹý\\s]+$/

        if(value.match(pattern)) {
            document.getElementById(spanID).innerHTML = "";
            document.getElementById(spanID).style.display = "none";
        return true;
        }
        
            document.getElementById(spanID).innerHTML = message;
            document.getElementById(spanID).style.display = "block";
        return false;
        
    }

    this.checkEmail = function(value,spanID,message){
        pattern =  /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if(value.match(pattern)) {
            document.getElementById(spanID).innerHTML = "";
            document.getElementById(spanID).style.display = "none";
        return true;
        }
            document.getElementById(spanID).innerHTML = message;
            document.getElementById(spanID).style.display = "block";
        return false;
    }

    this.checkPhone = function(value,spanID,message){
        pattern =  /^[0-9]+$/;
        if(value.match(pattern) && value.length >= 9  && value.length <= 10 ) {
            document.getElementById(spanID).innerHTML = "";
            document.getElementById(spanID).style.display = "none";
        return true;
        }
            document.getElementById(spanID).innerHTML = message;
            document.getElementById(spanID).style.display = "block";
        return false;
    }

    this.checkScore = function(value,spanID,message){
        pattern =  /^(\d{1,2}(\.\d{1,2})?)$/;
        if(value.match(pattern) && value >= 0 && value <=10 ) {
            // hợp lệ
            document.getElementById(spanID).innerHTML = "";
            document.getElementById(spanID).style.display = "none";
        return true;
        }
            // chưa hợp lệ
            document.getElementById(spanID).innerHTML = message;
            document.getElementById(spanID).style.display = "block";
        return false;
    }
}