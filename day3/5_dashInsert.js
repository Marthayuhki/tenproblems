// Week 4-1 dashInsert
//
//   Have the function DashInsert(str) insert dashes ('-') between each two odd numbers in str.
//
//  For example: if str is 454793 the output should be 4547-9-3.
//  Don't count zero as an odd number.


var userInput = '454793';

var dashInsert = function(str) {

    var oddEven = str.split("");
    var oddEven_change = []
    var first = 0;

    oddEven_change[first] = oddEven_change.push(oddEven[first]);

    //console.log(1,oddEven_change); //

    for (var i=1; i<oddEven.length; i++) {

        if (oddEven[first] % 2 !== 0 && oddEven[i] % 2 !== 0) {

            oddEven_change += '-' + oddEven[i];
        }
        else if (oddEven[first] % 2 === 0 || oddEven[i] % 2 === 0) {

            //oddEven_change = oddEven_change + oddEven[i];
            oddEven_change += oddEven[i];
            first = i;
        }
        //console.log(2, oddEven_change); //  
        //first = first + 1;
    }

    return oddEven_change;
};

console.log(dashInsert(userInput));

/*
        숫자를 쪼개고 짝수조건을 부여할 때 return이 되는지 확인해본다.
        var oddeven = str.split("");

        if (oddeven[0] % 2 === 0)
        {
            return oddeven[0];
        }

        return oddeven;

        // 출력 4 ok!
    */

    /*
    // 각 수가 짝수인지 홀수인지를 구분하고 
    // [0]과 [1], [1]과 [2], [2]와 [3] 을 비교해야 한다. 

    // 각 수를 하나씩 쪼개어 oddeven에 넣는다. 
    var oddeven = str.split("");

    // 처음 비교할 index로 사용하기 위해 first라는 변수를 선언하고 0의 값을 넣는다.  
    var first = 0;

    // for문을 통해 각 배열이 홀수인지 짝수인지를 구분한다.
    // 두 배열이 모두 홀수이고, 해당 값이 '-' 아닐 경우에 코드가 실행되도록 한다. 
    // 모든 조건이 맞을 경우 두 번째 비교대상이 되는 배열부터 끝까지 드러내어 count에 저장한다.
    // 비교대상 첫 번째 배열 뒤에 '-'을 push를 통해 넣어준다. 
    // 이후 count에 저장된 배열값을 다시 붙여넣는다. 
    for (var i=1; i<oddeven.length; i++) {

        if (oddeven[first] % 2 !== 0) {
            
            if (oddeven[i] % 2 !== 0) {

                if (oddeven[i] !== '-') {
                
                    count = oddeven.splice(i, oddeven.length);
                    oddeven.push('-');
                    oddeven.push(count);
                }
            }
        }
        else if (oddeven[first] % 2 === 0) {
            
            first = i; 
        }
    }

    return oddeven;
    */