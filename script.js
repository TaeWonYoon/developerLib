
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
