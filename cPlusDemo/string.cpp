#include <iostream>
#include <string>
using namespace std;

int add(int a,int b){
    return a + b;
}
int main(){
    int num1 = 10;
    int num2 = 5;
    int sum = num1 + num2;
    int difference = num1 - num2;
    int product = num1 * num2;
    int quotient = num1 % num2;
    
    cout << "Sum:" << sum << endl;
    int result = add(num1,num2);
    cout << "Result of add function:" << result << endl;
    return 0;
}
