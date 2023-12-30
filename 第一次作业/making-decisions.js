let allStudents = [
    'A',
    'B-',
    1,
    4,
    5,
    2
  ];
  
  let studentsWhoPass = [];
  
  for (let i = 0; i < allStudents.length; i++) {
    let Students_score = allStudents[i];

    
    
    if (typeof Students_score === 'number') {//如果是数值型，运行第一种评分系统
     
      if (Students_score >= 3) {
        studentsWhoPass.push(Students_score);
      }
    } else if (typeof Students_score === 'string') {// 如果是string，运行第二种评分系统
      
      if (Students_score === 'A' || Students_score === 'A-' || Students_score === 'B' || Students_score === 'B-' || Students_score === 'C') {
        studentsWhoPass.push(Students_score);
      }
    }
  }
  
  console.log(studentsWhoPass);
  