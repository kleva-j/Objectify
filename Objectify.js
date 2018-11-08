

// function showResults(data) {
//   const element = document.querySelector('code');
//   return element.textContent = JSON.stringify(data, null, 2);
// }

// function Objectify(array) {
//   const results = {};
//   array.forEach(data => {
//     if (Array.isArray(data)) {
//       if (!results['array']) results['array'] = [];
//       results['array'].push(data);
//     } else {
//       if(!results[`${typeof(data)}`]) results[`${typeof(data)}`] = []; 
//       results[`${typeof(data)}`].push(data);
//     }
//   });

//   return showResults(results);
// }


// document.querySelector('form')
//   .addEventListener('submit', (e) => {
//     e.preventDefault();
//     let inputValue = document.querySelector('input').value;
//     inputValue = inputValue.replace(/'/g, '"');

//     try {
//       const parsedData = JSON.parse(inputValue);
//     } catch(err) {

//     }


//     return Objectify(parsedData);
//   });

//////////////////////////////////////////////////


function showResults(data) {
  const element = document.querySelector('code');
  return element.textContent = JSON.stringify(data, null, 2);
}

function Objectify(array) {
  const results = {};
  array.forEach(data => {
    if (Array.isArray(data)) {
      if (!results['array']) results['array'] = [];
      results['array'].push(data);
    } else {
      if(!results[`${typeof(data)}`]) results[`${typeof(data)}`] = []; 
      results[`${typeof(data)}`].push(data);
    }
  });

  return showResults(results);
}

function handleError() {
  const errMsg = 'Please check your input'; 
  document.querySelector('.errMsg').textContent = errMsg;
}

function clearErrorMsg() {
  document.querySelector('.errMsg').textContent = '';
}

document.querySelector('form')
  .addEventListener('submit', (e) => {
    e.preventDefault();
  	clearErrorMsg();
    let inputValue = document.querySelector('input').value;
    inputValue = inputValue.replace(/'/g, '"');

    try {
      const parsedData = JSON.parse(inputValue);
      return Objectify(parsedData);
    } 
  	catch(err) {
			handleError();
    }
  });
