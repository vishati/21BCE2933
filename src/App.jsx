import React, { useState, useEffect } from 'react';

const App = () => {
  const [jsonInput, setJsonInput] = useState('');
  const [responseData, setResponseData] = useState(null);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    document.title = "21BCE2933";
  }, []);

  const handleJsonChange = (e) => {
    setJsonInput(e.target.value);
  };

  const handleSubmit = async () => {
    try {
      // Try to parse the JSON to validate it
      const parsedData = JSON.parse(jsonInput);
      
      // If valid, clear any previous error
      setError(null);

      // Call the API with the JSON payload
      // const response = await fetch('YOUR_API_ENDPOINT/bfhl', {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify(parsedData),
      // });

      // if (!response.ok) {
      //   throw new Error('API call failed');
      // }

      // const data = await response.json();
      // sample data for checking
      const data = {
        "is_success": true, 
        "user_id": "john_doe_17091999", 
        "email" : "john@xyz.com", 
        "roll_number":"ABCD123", 
        "numbers": [], 
        "alphabets": ["A","C","Z","c","i"], 
        "highest_lowercase_alphabet":["i"] 

      }
      setResponseData(data);
    } catch (error) {
      // If JSON is invalid or API call fails, show an error
      setError('Invalid JSON input or API call failed');
    }
  };

  const handleOptionSelect = (e) => {
    const option = e.target.value;
    if (!selectedOptions.includes(option)) {
      setSelectedOptions([...selectedOptions, option]);
    }
  };

  const handleRemoveOption = (optionToRemove) => {
    setSelectedOptions(selectedOptions.filter(option => option !== optionToRemove));
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <h1 className="text-2xl font-bold mb-6">21BCE2933</h1>
      <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-md">
        <input
          type="text"
          value={jsonInput}
          onChange={handleJsonChange}
          placeholder='Enter JSON'
          className="w-full p-2 mb-4 border border-gray-300 rounded"
        />
        <button
          onClick={handleSubmit}
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition-colors"
        >
          Submit
        </button>

        {/* Show error message if JSON is invalid */}
        {error && <p className="text-red-500 mt-2">{error}</p>}

        {/* Show dropdown only if valid JSON was submitted */}
        {responseData && (
          <div>
            <select
              onChange={handleOptionSelect}
              className="w-full mt-4 p-2 border border-gray-300 rounded"
              value="" // Ensure no option is selected after choosing one
            >
              <option value="" disabled>Select an option</option>
              <option value="Alphabets">Alphabets</option>
              <option value="Numbers">Numbers</option>
              <option value="Highest lowercase alphabet">Highest lowercase alphabet</option>
            </select>

            {/* Display selected options with remove buttons */}
            <div className="mt-4">
              <h3 className="text-lg font-semibold">Selected Options:</h3>
              <ul className="flex flex-wrap gap-2">
                {selectedOptions.map(option => (
                  <li
                    key={option}
                    className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full flex items-center"
                  >
                    {option}
                    <button
                      onClick={() => handleRemoveOption(option)}
                      className="ml-2 text-red-500 hover:text-red-700"
                    >
                      &times;
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}

        {/* Display the response data based on selected dropdown options */}
        {responseData && selectedOptions.length > 0 && (
          <div className="mt-6">
            {selectedOptions.includes('Alphabets') && responseData.alphabets && (
              <div className="mb-4">
                <h3 className="text-lg font-semibold">Alphabets:</h3>
                <p className="text-gray-700">{responseData.alphabets.join(', ')}</p>
              </div>
            )}
            {selectedOptions.includes('Numbers') && responseData.numbers && (
              <div className="mb-4">
                <h3 className="text-lg font-semibold">Numbers:</h3>
                <p className="text-gray-700">{responseData.numbers.join(', ')}</p>
              </div>
            )}
            {selectedOptions.includes('Highest lowercase alphabet') && responseData.highest_lowercase_alphabet && (
              <div className="mb-4">
                <h3 className="text-lg font-semibold">Highest Lowercase Alphabet:</h3>
                <p className="text-gray-700">{responseData.highest_lowercase_alphabet}</p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};


export default App;
