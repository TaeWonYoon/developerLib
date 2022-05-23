
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
				 console.log("xhr : " + xhr);
				 console.log("status : " + status);
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
				 console.log("xhr : " + xhr);
				 console.log("status : " + status);
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
