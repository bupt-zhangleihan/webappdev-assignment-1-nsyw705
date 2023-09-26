//计算三角形面积
//方法1，使用底和高进行计算
function calculateTriangleArea1(base, height) {
    // 如果未提供高度参数，则默认高度为1
    if (height === undefined) {
      height = 1;
    }
  
    const area = (base * height) / 2;
    return area;
  }
//方法2，使用边长进行计算
  function calculateTriangleArea2(lit1, lit2,lit3) {
    // 如果未提供高度参数，则默认高度为1
    if (lit1 === undefined) {
      height = 3;
    }
    if (lit2 === undefined) {
        lit2 = 4;
    }
    if (lit3 === undefined) {
        lit3 = 5;
    }
    let s=(lit1+lit2+lit3)/2;
    let s_twien=s*(s-lit1)*(s-lit2)*(s-lit3);
    const area = Math.sqrt(s_twien);
    return area;
  }
  console.log(calculateTriangleArea1(1,2));//结果为1
  console.log(calculateTriangleArea2(3,4,5));//结果为6
  //打印素数
  function isPrime(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;
    if (num % 2 === 0 || num % 3 === 0) return false;
  
    let i = 5;
    while (i * i <= num) {
      if (num % i === 0 || num % (i + 2) === 0) return false;
      i += 6;
    }
  
    return true;
  }
  
  function printPrimesInRange(start=0, end = 100) {
    console.log(`素数范围: ${start} 到 ${end}`);
    for (let i = start; i <= end; i++) {
      if (isPrime(i)) {
        console.log(i);
      }
    }
  }
  
  // 打印默认范围内的素数（从0到100）
  printPrimesInRange();
  
  // 打印指定范围内的素数
  printPrimesInRange(50, 2021212118);
  