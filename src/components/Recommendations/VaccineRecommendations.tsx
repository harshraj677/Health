import React, { useState } from 'react';

const VaccineRecommendations: React.FC = () => {
    const [age, setAge] = useState<number | ''>('');
    const [gender, setGender] = useState<string>('male');
    const [recommendations, setRecommendations] = useState<string[]>([]);

    const handleAgeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setAge(Number(e.target.value));
    };

    const handleGenderChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setGender(e.target.value);
    };

    const getRecommendations = () => {
        let recs: string[] = [];
        if (age < 18) {
            recs.push('Recommended: MMR, DTaP, Varicella');
        } else if (age >= 18 && age < 65) {
            recs.push('Recommended: Tdap, Influenza, COVID-19');
        } else {
            recs.push('Recommended: Shingles, Pneumococcal, Influenza');
        }

        if (gender === 'female') {
            recs.push('Consider: HPV vaccine if under 26');
        }

        setRecommendations(recs);
    };

    return (
        <div>
            <h2>Vaccine Recommendations</h2>
            <div>
                <label>
                    Age:
                    <input type="number" value={age} onChange={handleAgeChange} />
                </label>
                <label>
                    Gender:
                    <select value={gender} onChange={handleGenderChange}>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select>
                </label>
                <button onClick={getRecommendations}>Get Recommendations</button>
            </div>
            <div>
                <h3>Recommendations:</h3>
                <ul>
                    {recommendations.map((rec, index) => (
                        <li key={index}>{rec}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default VaccineRecommendations;