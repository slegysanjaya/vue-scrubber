function diamond(val){
  var y, w, shape = '';

  for(y = 0; y < val * 2 - 1; y++) {
    w = y < val ? y : val * 2 - y - 2;
    shape += Array(val - w).join(' ') + Array(w + 1).join('* ') + '*\n';
  }
  document.write('<pre>' + shape + '</pre>');
}

diamond(7);