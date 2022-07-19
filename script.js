function nowDate(type) { //원하는 날짜 출력
	var today = new Date();

	var year = today.getFullYear();
	var month = ('0' + (today.getMonth() + 1)).slice(-2);
	var day = ('0' + today.getDate()).slice(-2);
	
	var returnData = "";
	if(type == "y") {
		returnData = year;
	} else if(type == "m") {
		returnData = year + '-' + month;
	} else if(type == "d") {
		returnData = year + '-' + month  + '-' + day;
	} 

	return returnData;
}
function backDate(minus) {
	var now = new Date();	// 현재 날짜 및 시간
	var days = new Date(now.setDate(now.getDate() - minus));
	var year = days .getFullYear();
	var month = ('0' + (days .getMonth() + 1)).slice(-2);
	var day = ('0' + days .getDate()).slice(-2);
	returnData = year + '-' + month  + '-' + day;	
	
	return returnData;
}
function numFormmat(num) { //넘버 포맷 함수
	return new Intl.NumberFormat().format(num);
}

function statusVal(data, statusKey, statusVal) { //키벨류 값 출력
        let statusKeys = statusKey.split(','); // key
        let statusVals = statusVal.split(','); // value
        
        let i=0;
        let dataArr = {};
        
        for(i; i < statusKeys.length; i++) {
            dataArr[statusKeys[i]] = statusVals[i];  // 원하는 key,val 배열에 담기
        }
        let dataVal = dataArr[data];  //val 출력
        
        return dataVal;
    }
	
//데이트 타임 포맷
function dateFormatter(date) { //타임스템프 날짜변환 처리
	var result = "";
	if(date != null && date != "") {  //널값은 유닉스 시간이 나오기 때문에 조건처리
		var now = new Date(date);
		var year = now.getFullYear() < 10 ? '0' + now.getFullYear() : now.getFullYear();
		var month = now.getMonth() + 1 < 10 ? '0' + (now.getMonth() + 1) : (now.getMonth() + 1);
		var day = now.getDate() < 10 ? '0' + now.getDate() : now.getDate();
		result = year + '-' + month + '-' + day;
	} 
	
	return result;
}

//Ajax
function callAjax(param, url, callback, async, type) {
	if(type == "f") {
		$.ajax({
			type: "POST", 
			enctype: 'multipart/form-data',   //form data 설정
			url: url,
			dataType: "json",
			data : param,
			async : async,
			contentType : false, //프로세스 데이터 설정 : false 값을 해야 form data로 인식합니다
			processData : false,   //헤더의 Content-Type을 설정 : false 값을 해야 form data로 인식합니다
			success: function (result) {
				callback(result)
			}, error: function(xhr, status, err) {
				console.log('entered error...');
				console.log("xhr : " + JSON.stringify(xhr));
				console.log("status : " + JSON.stringify(status));
				console.log("err : " + err);   
			}
		})
	} else if(type == "p") {
		$.ajax({
			type: "POST", 
			url: url,
			dataType: "json",
			data : param,
			async : async,
			success: function (result) {
				callback(result)
			}, error: function(xhr, status, err) {
				console.log('entered error...');
				console.log("xhr : " + JSON.stringify(xhr));
				console.log("status : " + JSON.stringify(status));
				console.log("err : " + err);   
			}
		})
	}
}

//폰 - 정규식
$(".phoneNumber").keyup(function() { $(this).val( $(this).val().replace(/[^0-9]/g, "").replace(/(^02|^0505|^1[0-9]{3}|^0[0-9]{2})([0-9]+)?([0-9]{4})$/,"$1-$2-$3").replace("--", "-") ); });

//콘솔 로그
function log(name,data) {
	console.log(name+" = " +  JSON.stringify(data))	
}

//유효성 검사
$.fn.emptyCheck = function(target) {
	if($(this).val() == '') {
	    alert(target + " 입력해주세요.");
	    return true;
	} else {
	    return false;
	}
}

function setCookie(key, val) { //쿠키 생성
    var ck = key + "=" + val;

    document.cookie = ck;
  } 

  function getCookie(cookieName){ //쿠키 조회
    var cookieValue=null;
    if(document.cookie){
        var array=document.cookie.split((escape(cookieName)+'='));
        if(array.length >= 2){
            var arraySub=array[1].split(';');
            cookieValue=unescape(arraySub[0]);
        }
    }
    return cookieValue;
}

function deleteCookie(cookieName){ //쿠키 삭제 
    var temp=getCookie(cookieName);
    if(temp){
      document.cookie = cookieName+'=; expires=Thu, 01 Jan 1970 00:00:01 GMT;'; //등록시간보다 낮으면 삭제
    }
}
