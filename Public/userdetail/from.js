
// 地区选择数据
var citys;              // 地区
var photoData1;         // 照片1（登记照）
var photoData2;         // 照片2（证书照）
yeluochenCity('J-demo', (city) => {
    citys = city.province + city.city + city.district;
    // console.log(city);
    // console.log(citys);
}, null);




//  登记照片
function getFile_1(e) {
    // 8.1创建文件读取对象
    var reader = new FileReader();

    // 8.2文件是储存在files中的，打印出来就是一个数组
    var file = document.querySelector('#photo_1').files;

    // 8.3读取文件，获取其中的  DataURL
    reader.readAsDataURL(file[0]);

    // 8.4文件读取成功之后，获取到返回值
    reader.onload = function () {
        console.log(reader.result);
        photoData1 = reader.result;
        // 8.5预览
        //使用压缩
        dealImage(photoData1, 800, printing);
        function printing(base64) {
            // console.log("压缩后", base64.length / 1024);
            //    console.log(base64);
            photoData1 = base64;
            // console.log(src);
            document.querySelector('#spread_1').style.backgroundImage = "url(" + photoData1 + ")";
        }
    }
}

//  证书照片
function getFile_2(e) {
    // 8.1创建文件读取对象
    var reader = new FileReader();

    // 8.2文件是储存在files中的，打印出来就是一个数组
    var file = document.querySelector('#photo_2').files;

    // 8.3读取文件，获取其中的  DataURL
    reader.readAsDataURL(file[0]);

    // 8.4文件读取成功之后，获取到返回值
    reader.onload = function () {
        console.log(reader.result);
        photoData2 = reader.result;
        // 8.5预览
        //使用压缩
        dealImage(photoData2, 800, printing);
        function printing(base64) {
            // console.log("压缩后", base64.length / 1024);
            //    console.log(base64);
            photoData2 = base64;
            // console.log(src);
            document.querySelector('#spread_2').style.backgroundImage = "url(" + photoData2 + ")";
        }
    }
}

// 图片压缩
function dealImage(base64, w, callback) {
    var newImage = new Image();
    var quality = 1;    //压缩系数0-1之间
    newImage.src = base64;
    newImage.setAttribute("crossOrigin", 'Anonymous');	//url为外域时需要
    var imgWidth, imgHeight;
    newImage.onload = function () {
        imgWidth = this.width;
        imgHeight = this.height;
        var canvas = document.createElement("canvas");
        var ctx = canvas.getContext("2d");
        if (Math.max(imgWidth, imgHeight) > w) {
            if (imgWidth > imgHeight) {
                canvas.width = w;
                canvas.height = w * imgHeight / imgWidth;
            } else {
                canvas.height = w;
                canvas.width = w * imgWidth / imgHeight;
            }
        } else {
            canvas.width = imgWidth;
            canvas.height = imgHeight;
            quality = 0.6;
        }
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(this, 0, 0, canvas.width, canvas.height);
        var base64 = canvas.toDataURL("image/jpeg", quality); //压缩语句
        // 如想确保图片压缩到自己想要的尺寸,如要求在50-150kb之间，请加以下语句，quality初始值根据情况自定
        // while (base64.length / 1024 > 150) {
        // 	quality -= 0.01;
        // 	base64 = canvas.toDataURL("image/jpeg", quality);
        // }
        // 防止最后一次压缩低于最低尺寸，只要quality递减合理，无需考虑
        // while (base64.length / 1024 < 50) {
        // 	quality += 0.001;
        // 	base64 = canvas.toDataURL("image/jpeg", quality);
        // }
        callback(base64);//必须通过回调函数返回，否则无法及时拿到该值
    }
}
// $('#inputName').css('border-bottom-color','red');

// 数据整合
function submitData() {
    // 数据验证开始
    let name = $('#name').val();                        // 姓名
    if (!name) {
        alert('请输入姓名');
        return false;
    }
    let card = $('#card').val();                        // 姓名
    if (!name) {
        alert('请输入身份证');
        return false;
    }
    let sex = $("input[type='radio']:checked").val();   // 性别



    let location = $('#location').val();                // 户口所在地
    if (!location) {
        alert('请输入户口所在地');
        return false;
    }

    let fUnit = $('#fUnit').val();                      // 父单位
    if (!fUnit) {
        alert('请输入工作单位');
        return false;
    }

    let Munit = $('#Munit').val();                      // 母单位
    if (!Munit) {
        alert('请输入工作单位');
        return false;
    }

    let tel = $('#tel').val();                          // 联系方式
    if (!tel) {
        alert('请填写联系方式');
        return false;
    }

    let area = citys;
    if (!area) {
        alert('请选择地址');
        return false;
    }
    if (area.indexOf("null")) {
        area = citys.replace('null', '') + $('#areas').val();// 地区
    }


    let introductionText = $('#introductionText').val()        // 个人简介
    console.log(introductionText);
    console.log($('#introductionText'));
    if (!introductionText) {
        alert('请输入个人简介');
        return false;
    }

    if (!photoData1) {
        alert('上传证书照片');
        return false;
    }      // 登记照片

    if (!photoData2) {
        alert('上传登记照片');
        return false;
    }      // 证书照片
    // 数据验证结束

    // 打印
    /*
    console.log('姓名：' + name);
    console.log('性别：' + sex);
    console.log('类别：' + types);
    console.log('户口所在地：' + location);
    console.log('父单位：' + fUnit);
    console.log('母单位：' + Munit);
    console.log('联系方式：' + tel);
    console.log('地区：' + area);
    console.log('身高：' + stature);
    console.log('肩宽：' + shoulder);
    console.log('胸围：' + chest);
    console.log('腰围：' + waist);
    console.log('臀围：' + buttocks);
    console.log('个人简介：' + introductionText);
    console.log('登记照片Base64：' + photoData1);
    console.log('证书照片Base64：' + photoData2);
    */

    // 12.数据提交修改
    // $.ajax({
    //   url:'',
    //   data:{},
    //   type:"POST",
    //   dataType:"json",
    //   success:function(res){},
    // })
    var _tel = $("#_tel").val();

    var barth = $("#barth").val();
    var nation = $("#nation").val();
    var zk_score = $("#zk_score").val();
    var edu = $("#edu").val();
    var f_name = $("#f_name").val();
    var m_name = $("#m_name").val();
    var email = $("#email").val();

    var data = {
        name: name,
        sex: sex,
        barth: barth,
        nation: nation,
        zk_score: zk_score,
        edu: edu,
        f_name: f_name,
        m_name: m_name,
        email: email,
        area: area,
        addr: location,
        f_unit: fUnit,
        m_unit: Munit,
        tel: tel,
        _tel: _tel,
        desc: introductionText,
        img_dj: photoData1,
        img_zs: photoData2
    };
    console.log(data);
    $.ajax({
        type: "POST",
        url: "/Home/Index/editfamily",
        data: data,
        success: function (datas) {
            console.log(datas);
            alert('填写成功');
            window.location.reload();
        }
    });
}