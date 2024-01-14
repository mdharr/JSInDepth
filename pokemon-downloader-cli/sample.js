async function fetchData(name) {
    const url = `https://pokeapi.co/api/v2/pokemon/${name}`;
  
    try {
      const response = await fetch(url);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching data:', error);
      return null;
    }
  }
  
  async function promptUser() {
    let searchAgain = true;
  
    while (searchAgain) {
      const answers = await inquirer.prompt([
        {
          type: 'input',
          name: 'name',
          message: 'Enter a name to fetch:',
        }
      ]);
  
      const data = await fetchData(answers.name);
      console.log('Fetched Data:', data);
  
      const confirm = await inquirer.prompt([
        {
          type: 'confirm',
          name: 'searchAgain',
          message: 'Do you want to search for another name?',
          default: false,
        }
      ]);
  
      searchAgain = confirm.searchAgain;
    }
  }