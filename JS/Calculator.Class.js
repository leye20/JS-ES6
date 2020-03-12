export class Calculator {
    static add ( ...nums ) {
        let sum = 0;
        for ( let i = 0; i < nums.length; i++ ) {
            sum += Number( nums[i] );
        }
        return sum;
    }
    static subtract ( num1, num2 ) {
        return Number( num1 ) - Number( num2 );
    }
}