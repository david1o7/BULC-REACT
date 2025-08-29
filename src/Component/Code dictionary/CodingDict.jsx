import { useState, useEffect } from "react";
import "./coding.css";
import { programming_Terms } from "./ProgrammingTerms";

const programmingTerm = programming_Terms;

function CodingDictionary() {
  const [term, setTerm] = useState("");
  const [selectedTerm, setSelectedTerm] = useState(null);
  const [result, setResult] = useState([]);

  useEffect(() => {
    if (term.trim() === "") {
      setResult([]);
      setSelectedTerm(null);
      return;
    }

    const filteredResults = programmingTerm.programming_terms.filter(
      (item) =>
        item.term.toLowerCase().includes(term.toLowerCase()) ||
        item.definition.toLowerCase().includes(term.toLowerCase())
    );

    setResult(filteredResults);
    setSelectedTerm(null);
  }, [term]);

  const handleTermClick = (termData) => {
    setSelectedTerm(termData);
  };

  return (
    <div className="xbody" id="mainContainer">
      <div className="bgbody">
        <h1 className="bigger">Welcome to the B.U.L.C Code Dictionary</h1>
        <div className="box">
          <input
            type="text"
            placeholder="Search programming terms..."
            onChange={(e) => setTerm(e.target.value)}
            value={term}
          />
          
          {term.trim() !== "" && result.length === 0 && (
            <p className="no-results">No results found for "{term}".</p>
          )}

          {result.length > 0 && (
            <div className="search-results">
              <h3>Search Results ({result.length})</h3>
              <div className="results-list">
                {result.map((item, index) => (
                  <div 
                    key={index} 
                    className={`result-item ${selectedTerm?.term === item.term ? 'active' : ''}`}
                    onClick={() => handleTermClick(item)}
                  >
                    <h4>{item.term}</h4>
                    <p className="definition-preview">{item.definition.substring(0, 100)}...</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {selectedTerm && (
            <div className="term-details">
              <div className="term-header">
                <h2>{selectedTerm.term}</h2>
                <button 
                  className="close-btn"
                  onClick={() => setSelectedTerm(null)}
                >
                  ×
                </button>
              </div>
              
              <div className="definition-section">
                <h3>Definition</h3>
                <p>{selectedTerm.definition}</p>
              </div>

              {selectedTerm.examples && selectedTerm.examples.length > 0 && (
                <div className="examples-section">
                  <h3>Examples</h3>
                  {selectedTerm.examples.map((example, index) => (
                    <div key={index} className="example-item">
                      <div className="example-header">
                        <span className="language-badge">{example.language}</span>
                      </div>
                      
                      <div className="code-block">
                        <pre><code>{example.code}</code></pre>
                      </div>
                      
                      <div className="explanation">
                        <p><strong>Explanation:</strong> {example.explanation}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {term.trim() === "" && !selectedTerm && (
            <div className="welcome-message">
              <p>Start typing to search programming terms</p>
              <div className="popular-terms">
                <h4>Popular Terms:</h4>
                <div className="term-suggestions">
                  {programmingTerm.programming_terms.slice(0, 6).map((item, index) => (
                    <span 
                      key={index} 
                      className="suggestion-chip"
                      onClick={() => {
                        setTerm(item.term);
                        setSelectedTerm(item);
                      }}
                    >
                      {item.term}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default CodingDictionary;
