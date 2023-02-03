const isValidIP = (entry) => {
    const mainPipeline = [
      block => !isNaN(parseInt(block, 10)),
      block => parseInt(block,10) >= 0,
      block => parseInt(block,10) <= 255,
      block => String(block).length === 1
        || String(block).length > 1
        && String(block)[0] !== '0',
    ];
  
    const blocks = entry.split(".");
    if(blocks.length === 4
      && !blocks.every(block => parseInt(block, 10) === 0)) {
      return blocks.every(block =>
        mainPipeline.every(ckeck => ckeck(block) )
      );
    }
  
    return false;
  }
  
  console.log(isValidIP('1.2.3.4'));
  console.log(isValidIP('1.2.3')); 
  console.log(isValidIP('1.2.3.4.5')); 
  console.log(isValidIP('123.45.67.89')); 
  console.log(isValidIP('123.456.78.90')); 
  console.log(isValidIP('123.545.067.889'));