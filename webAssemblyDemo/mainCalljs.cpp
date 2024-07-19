#include <emscripten/val.h>
#include <stdio.h>

using namespace emscripten;

int main() {
  //访问 JavaScript 全局对象 myObj
  val myObj = val::global("myObj");
  //调用 JavaScript 全局对象 myObj 的 hello 方法，并向该方法传递两个参数。
  myObj.call<void>("hello",val(12),val(13.3));
  printf("All done!\n");
}
