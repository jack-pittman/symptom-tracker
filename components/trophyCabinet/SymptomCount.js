import dataStore from '../../app/database'; // Import the dataStore

export default function SymptomCount() {
    // get array from dataStore
    const symptoms = dataStore.symptomData; 
    
    // get length of array
    // console.log(symptoms.length);

    // if array is greater than 1, return "bronze" as a string 
    return symptoms.length; 
}

SymptomCount();