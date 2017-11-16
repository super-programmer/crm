/**
 * Created by Administrator on 2017-11-16.
 */
var $noBtn = $('.c-top-tips_no'),
    $modalBg = $('.m-modal-bg'),
    $loginBtn = $('#loginBtn'),
    $loginName = $('#loginName'),
    $loginPass = $('#password'),
    $signBtn = $('#signBtn'),
    $modal = $('.m-login'),
    $popNum = $('.userNum'),
    $signOut = $('#signOut'),
    $dataList = [
        {
            num : 188666,
            password : "a1234567"
        },{
            num : 888,
            password : "a1234567"
        },{
            num : 327555,
            password : "a1234567"
        }
    ]
/*modal显示隐藏*/
showModal = function () {
    $modalBg.toggle();
    $modal.toggle();
    if($modalBg.css('display') == "block"){
        $('body').css('overflow','hidden');
    }else{
        $('body').css('overflow','auto');
    }
},
    /*登录状态*/
    storeLogin = function(){
        document.cookie = "lekeUsename=" + $loginName.val();
        showModal();
    },
    /*cookie读取状态*/
    setState = function(){
        var num = document.cookie.split('=')[1];
        if(num){
            $noBtn.html(num).addClass('c-top-tips_over');
            $popNum.html(num);
            $('.c-top-person').show();
        }else{
            $noBtn.html("登录/注册").removeClass('c-top-tips_over');
            $popNum.html(" ");
            $('.c-top-person').hide();
        }
    };
;
/*调出modal层*/
$noBtn.click(function(){
    if($(this).hasClass('c-top-tips_over')){
        return;
    }
    showModal();
})
$modalBg.click(function(){
    showModal();
})
$loginBtn.click(function(){
    var flag = false;
    if($loginName.val() && $loginPass.val()){
        for(var i in $dataList){
            if($loginName.val() == $dataList[i].num && $loginPass.val() == $dataList[i].password){
                flag = true;
                storeLogin();
                setState();
            }
        }
        if(!flag){
            alert('账号未注册或密码错误！')
        }
    }else if($loginName.val()){
        alert('密码为空！')
    }else{
        alert('账号为空！')
    }
})
$signBtn.click(function(){
    if($loginName.val()){
        alert('此账号已注册！')
    }else{
        alert('请输入账号！')
    }

})
/*退出*/
$signOut.click(function(){
    document.cookie = "lekeUsename=";
    setState();
})
setState();