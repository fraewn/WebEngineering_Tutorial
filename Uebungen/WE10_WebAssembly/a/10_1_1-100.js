var wasmModule = new WebAssembly.Module(wasmCode);
var wasmInstance = new WebAssembly.Instance(wasmModule, wasmImports);
log(wasmInstance.exports.ggT(4,24));

for (i = 1; i <= 100; i++) {
  for (j = 1; j <= 100; j++) {
    console.log("ggt("+i+","+j+")="+wasmInstance.exports.ggT(i,j));
  }
}
