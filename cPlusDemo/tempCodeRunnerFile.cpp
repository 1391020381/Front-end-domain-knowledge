#include <iostream>
using namespace std;
int main(){
    int* pointerB { nullptr};
    cout << pointerB << endl;
    int a = 1;
    int* pointerA { &a};
    cout << pointerA << endl;
    cout << *pointerA << endl;
    auto c = getchar();
}