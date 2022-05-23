
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

function getPaginationHtml(currentPage, totalCount, pageRow, blockPage, pageFunc, exParams)
{	
	totalCount = parseInt(totalCount);
	pageRow = parseInt(pageRow);
	blockPage = parseInt(blockPage);
	
			
	
	var totalPage = Math.ceil(totalCount / pageRow);
	if (totalPage == 0) {
		totalPage = 1;
	}

	// 현재 페이지가 전체 페이지 수보다 크면 전체 페이지 수로 설정
	if (currentPage > totalPage) {
		currentPage = totalPage;
	}

	// 현재 페이지의 처음과 마지막 글의 번호 가져오기.
	var startCount = (currentPage - 1) * pageRow;
	var endCount = startCount + pageRow;

	
	
	// 시작 페이지와 마지막 페이지 값 구하기.
	startPage = Math.floor((currentPage - 1) / blockPage) * blockPage + 1;
	endPage = startPage + blockPage - 1;

	// 마지막 페이지가 전체 페이지 수보다 크면 전체 페이지 수로 설정
	if (endPage > totalPage) {
		endPage = totalPage;
	}
	
	// 추가 파라미터가 있는 경우 함수 호출 파라미터로 적용
	var sExParam = exParams==undefined ? "" : ",\"" + exParams.join("\",\"") + "\"";
	
	var pagingHtml = "<div class='paging'>";
	pagingHtml += "<a class='first' href='javascript:"+pageFunc+"(1"+sExParam+")'><span class='hidden'>맨앞</span></a>";
	pagingHtml += "<a class='pre' href='javascript:"+pageFunc+"(" + (startPage - 1 == 0 ? 1 : (startPage -1)) +sExParam+")'><span class='hidden'>이전</span></a>";

	for (var i = startPage; i <= endPage; i++) {
		if (i > totalPage) {
			break;
		}
		
		if(i > startPage) {
			firstPage = "";
		}
		
		if (i == currentPage) {
			pagingHtml += "<strong>" + i + "</strong>";
		} else {
			pagingHtml += " <a href=javascript:"+pageFunc+"(" + i + sExParam +")>" + i + "</a>";
		}
	}

	pagingHtml += "<a class='next' href='javascript:"+pageFunc+"(" + (endPage + 1 > totalPage ? totalPage : (endPage + 1))+ sExParam + ")'><span class='hidden'>다음</span></a>";
	pagingHtml += "<a class='last' href='javascript:"+pageFunc+"(" + totalPage + sExParam + ")'><span class='hidden'>맨뒤</span></a>";
	pagingHtml += "</div>";

	return pagingHtml;
}
