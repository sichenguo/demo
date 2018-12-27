// 异步函数书写时回调函数需要注意的点
// 必须执行调用者传入的回调函数
// 正确传递异常供调用者判断
var async = function(callback) {
  process.nextTick(function() {
    var results = something;
    if (error) {
      return callback(error);
    }
    callback(null, results);
  });
};
// addListener on() 、 once() 、 removeListener() 、 removeAllListeners() 􏰐emit()
// 􏲆􏲟可能因为􏵔在􏹀􏹁􏱮过多􏰊发的􏿉􏷸，􏱯要􏳿用setMaxListeners(0) 􏹋􏲒􏶐􏿉􏷸􏿉􏷸􏿥􏸍
var proxy = new events.EventEmitter();
var status = "ready";
var select = function(callback) {
  proxy.once("selected", callback);
  if (status === "ready") {
    status = "pending";
    db.select("SQL", function(results) {
      proxy.emit("selected", results);
      status = "ready";
    });
  }
};

// 模块包装器;
// 在执行模块代码之前，Node.js 会使用一个如下的函数包装器将其包装：
(function (exports, require, module, __filename, __dirname) {
  // 模块的代码实际上在这里
});
// 通过这样做，Node.js 实现了以下几点：

// 它保持了顶层的变量（用 var 、const 或 let 定义）作用在模块范围内，而不是全局对象。
//   它有助于提供一些看似全局的但实际上是模块特定的变量，例如：  - 实现者可以用于从模块中导出值的 module 和 exports 对象。  - 包含模块绝对文件名和目录路径的快捷变量 __filename 和 __dirname 。