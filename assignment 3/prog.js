// Function that returns a Promise for getting data
function getData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const data = 'Some data';
            resolve(data);
        }, 1000);
    });
}

// Function that returns a Promise for processing data
function processData(data) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const processedData = data.toUpperCase();
            resolve(processedData);
        }, 1000);
    });
}

// Function to display the data
function displayData(data) {
    console.log('Data:', data);
}

// Async function to handle the data processing flow
async function handleData() {
    try {
        const data = await getData();
        const processedData = await processData(data);
        displayData(processedData);
    } catch (error) {
        console.error('Error:', error);
    }
}

// Using the async function
handleData();
