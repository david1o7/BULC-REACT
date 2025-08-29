import React, { useState, useEffect } from 'react';
import './CgpaCalc.css'; // Assuming the CSS is updated as well

const CgpaCalc = () => {
  // Main CGPA calculation states
  const [semesters, setSemesters] = useState([{ id: 1, gpa: '', units: '' }]);
  const [cgpa, setCgpa] = useState(null);
  const [totalUnitsAccumulated, setTotalUnitsAccumulated] = useState(0);

  // Session GPA calculation states
  const [firstSemCgpa, setFirstSemCgpa] = useState('');
  const [firstSemUnits, setFirstSemUnits] = useState('');
  const [secondSemCgpa, setSecondSemCgpa] = useState('');
  const [secondSemUnits, setSecondSemUnits] = useState('');
  const [sessionGpa, setSessionGpa] = useState(null);

  // Course Impact Analysis states
  const [courses, setCourses] = useState([{ id: 1, name: '', grade: '', units: '' }]);
  const [initialCgpaForImpact, setInitialCgpaForImpact] = useState('');
  const [initialUnitsForImpact, setInitialUnitsForImpact] = useState('');
  const [simulatedCgpa, setSimulatedCgpa] = useState(null);

  // To manage active tab/section
  const [activeSection, setActiveSection] = useState('overall'); // 'overall', 'session', 'impact'

  // Helper function to convert letter grade to 5.0 scale (example)
  const gradeToPoints = (grade) => {
    switch (grade.toUpperCase()) {
      case 'A': return 5.0;
      case 'B': return 4.0;
      case 'C': return 3.0;
      case 'D': return 2.0;
      case 'E': return 1.0;
      case 'F': return 0.0;
      default: return 0.0; // Or indicate error
    }
  };

  // Helper to determine color for GPA/CGPA progress bar
  const getGpaColor = (score) => {
    if (score >= 4.5) return '#4CAF50'; // Green (Excellent)
    if (score >= 3.5) return '#8BC34A'; // Light Green (Very Good)
    if (score >= 2.5) return '#FFEB3B'; // Yellow (Good)
    if (score >= 1.5) return '#FFC107'; // Amber (Pass)
    return '#F44336'; // Red (Probation/Fail)
  };

  // --- Overall CGPA Calculation Logic ---
  const handleOverallInputChange = (id, field, value) => {
    const newSemesters = semesters.map(sem =>
      sem.id === id ? { ...sem, [field]: value } : sem
    );
    setSemesters(newSemesters);
  };

  const addSemester = () => {
    setSemesters([...semesters, { id: semesters.length + 1, gpa: '', units: '' }]);
  };

  const removeSemester = (id) => {
    setSemesters(semesters.filter(sem => sem.id !== id));
    // No need to recalculate immediately, button handles it
  };

  const calculateOverallCgpa = () => {
    let totalGradePoints = 0;
    let accumulatedUnits = 0;

    semesters.forEach(sem => {
      const gpa = parseFloat(sem.gpa);
      const units = parseFloat(sem.units);

      if (!isNaN(gpa) && !isNaN(units) && units > 0) {
        totalGradePoints += gpa * units;
        accumulatedUnits += units;
      }
    });

    if (accumulatedUnits > 0) {
      const calculatedCgpa = totalGradePoints / accumulatedUnits;
      setCgpa(calculatedCgpa.toFixed(2));
      setTotalUnitsAccumulated(accumulatedUnits);
    } else {
      setCgpa(null);
      setTotalUnitsAccumulated(0);
    }
  };

  // --- Session GPA Calculation Logic ---
  const calculateSessionGpa = () => {
    const firstGpa = parseFloat(firstSemCgpa);
    const firstUnits = parseFloat(firstSemUnits);
    const secondGpa = parseFloat(secondSemCgpa);
    const secondUnits = parseFloat(secondSemUnits);

    if (isNaN(firstGpa) || isNaN(firstUnits) || isNaN(secondGpa) || isNaN(secondUnits) || firstUnits <= 0 || secondUnits <= 0) {
      setSessionGpa(null);
      alert('Please enter valid CGPA and Units for both semesters to calculate Session GPA.');
      return;
    }

    const totalGradePoints = (firstGpa * firstUnits) + (secondGpa * secondUnits);
    const totalUnits = firstUnits + secondUnits;

    if (totalUnits > 0) {
      setSessionGpa((totalGradePoints / totalUnits).toFixed(2));
    } else {
      setSessionGpa(null);
    }
  };

  // --- Course Impact Analysis Logic ---
  const handleCourseInputChange = (id, field, value) => {
    const newCourses = courses.map(course =>
      course.id === id ? { ...course, [field]: value } : course
    );
    setCourses(newCourses);
  };

  const addCourse = () => {
    setCourses([...courses, { id: courses.length + 1, name: '', grade: '', units: '' }]);
  };

  const removeCourse = (id) => {
    setCourses(courses.filter(course => course.id !== id));
  };

  const calculateCourseImpact = () => {
    const initialCgpa = parseFloat(initialCgpaForImpact);
    const initialUnits = parseFloat(initialUnitsForImpact);

    if (isNaN(initialCgpa) || isNaN(initialUnits) || initialUnits < 0) {
      alert('Please enter your current CGPA and accumulated units to simulate course impact.');
      setSimulatedCgpa(null);
      return;
    }

    let currentTotalGradePoints = initialCgpa * initialUnits;
    let currentTotalUnits = initialUnits;

    courses.forEach(course => {
      const gradePoints = gradeToPoints(course.grade);
      const units = parseFloat(course.units);

      if (!isNaN(gradePoints) && !isNaN(units) && units > 0) {
        currentTotalGradePoints += gradePoints * units;
        currentTotalUnits += units;
      }
    });

    if (currentTotalUnits > 0) {
      setSimulatedCgpa((currentTotalGradePoints / currentTotalUnits).toFixed(2));
    } else {
      setSimulatedCgpa(null);
    }
  };

  // --- Course Combination Logic (Conceptual Framework) ---
  // This function would be triggered by a dedicated button for "Find Best Combinations"
  const findBestCourseCombinations = () => {
      const initialCgpa = parseFloat(initialCgpaForImpact);
      const initialUnits = parseFloat(initialUnitsForImpact);

      if (isNaN(initialCgpa) || isNaN(initialUnits) || initialUnits < 0 || courses.length === 0) {
          alert("Please enter your current CGPA, accumulated units, and add prospective courses to find combinations.");
          return;
      }

      // Filter out courses that already have a grade, focus on those where grade is yet to be determined
      const prospectiveCourses = courses.filter(c => !c.grade || c.grade === '');
      if (prospectiveCourses.length === 0) {
          alert("No prospective courses with unset grades to analyze for combinations.");
          return;
      }

      // Define possible grades for analysis (e.g., A, B, C, D, E, F)
      const possibleGrades = ['A', 'B', 'C', 'D', 'E', 'F'];
      const results = [];

      // Recursive function to generate combinations
      const generateCombinations = (index, currentGrades) => {
          if (index === prospectiveCourses.length) {
              // Base case: a full combination is formed
              let combinedTotalGradePoints = initialCgpa * initialUnits;
              let combinedTotalUnits = initialUnits;

              prospectiveCourses.forEach((course, i) => {
                  const grade = currentGrades[i];
                  const gradePoints = gradeToPoints(grade);
                  const units = parseFloat(course.units);

                  if (!isNaN(gradePoints) && !isNaN(units) && units > 0) {
                      combinedTotalGradePoints += gradePoints * units;
                      combinedTotalUnits += units;
                  }
              });

              if (combinedTotalUnits > 0) {
                  const simulatedCGPA = (combinedTotalGradePoints / combinedTotalUnits).toFixed(2);
                  results.push({ grades: { ...currentGrades }, simulatedCGPA });
              }
              return;
          }

          // Recursive step: try each possible grade for the current course
          const currentCourse = prospectiveCourses[index];
          if (isNaN(parseFloat(currentCourse.units)) || parseFloat(currentCourse.units) <= 0) {
              // Skip courses with invalid units or if no units are specified.
              // For a robust app, you might want to force unit input.
              generateCombinations(index + 1, currentGrades); // Move to next course without setting grade
              return;
          }

          possibleGrades.forEach(grade => {
              currentGrades[index] = grade; // Assign grade for current course
              generateCombinations(index + 1, { ...currentGrades }); // Recurse for next course
          });
      };

      generateCombinations(0, {}); // Start generating from the first prospective course

      // --- Post-processing Results (for Display) ---
      // This is where you would filter, sort, and present the "combinations to focus on"
      // Examples:
      // 1. Filter for combinations that achieve a certain target CGPA (e.g., >= 3.0)
      // 2. Sort by highest CGPA
      // 3. Highlight combinations with minimal "A"s or "B"s required
      // 4. Group similar outcomes

      const targetCgpaThreshold = 3.5; // Example: find combinations that lead to 3.5 CGPA or higher
      const goodCombinations = results.filter(res => parseFloat(res.simulatedCGPA) >= targetCgpaThreshold);

      // Sort by CGPA descending
      goodCombinations.sort((a, b) => parseFloat(b.simulatedCGPA) - parseFloat(a.simulatedCGPA));

      console.log("All combinations:", results); // For debugging
      console.log(`Combinations achieving >= ${targetCgpaThreshold} CGPA:`, goodCombinations);

      // You would then update a state variable to display these `goodCombinations` in the UI.
      // For simplicity, let's just show an alert with a few top ones.
      if (goodCombinations.length > 0) {
          let message = `Top combinations to achieve >= ${targetCgpaThreshold} CGPA:\n\n`;
          goodCombinations.slice(0, Math.min(5, goodCombinations.length)).forEach((combo, idx) => {
              message += `${idx + 1}. Predicted CGPA: ${combo.simulatedCGPA}\n`;
              Object.keys(combo.grades).forEach(courseIdx => {
                  const originalCourse = prospectiveCourses[courseIdx];
                  message += `   - ${originalCourse.name || `Course ${originalCourse.id}`}: ${combo.grades[courseIdx]}\n`;
              });
              message += '\n';
          });
          alert(message);
      } else {
          alert(`No combinations found that achieve a CGPA of ${targetCgpaThreshold} or higher with the given courses.`);
      }
  };

  // --- Render UI ---
  return (
    <div className="cgpa-calculator-container">
      <h1 className="cgpa-calculator-title">Academic Calculator</h1>

      <div className="section-tabs">
        <button
          className={`tab-button ${activeSection === 'overall' ? 'active' : ''}`}
          onClick={() => setActiveSection('overall')}
        >
          Overall CGPA
        </button>
        <button
          className={`tab-button ${activeSection === 'session' ? 'active' : ''}`}
          onClick={() => setActiveSection('session')}
        >
          Session GPA
        </button>
        <button
          className={`tab-button ${activeSection === 'impact' ? 'active' : ''}`}
          onClick={() => setActiveSection('impact')}
        >
          Course Impact / Focus
        </button>
      </div>

      {activeSection === 'overall' && (
        <div className="section-content">
          <h2>Calculate Overall CGPA</h2>
      {semesters.map(sem => (
        <div key={sem.id} className="semester-input-group">
          <h3>Semester {sem.id}</h3>
          <div className="input-fields">
            <input
              type="number"
              step="0.01"
              placeholder="GPA (e.g., 4.5)"
              value={sem.gpa}
                  onChange={(e) => handleOverallInputChange(sem.id, 'gpa', e.target.value)}
              min="0"
              max="5"
            />
            <input
              type="number"
              step="1"
              placeholder="Units (e.g., 18)"
              value={sem.units}
                  onChange={(e) => handleOverallInputChange(sem.id, 'units', e.target.value)}
              min="0"
            />
          </div>
          {semesters.length > 1 && (
            <button className="remove-semester-btn" onClick={() => removeSemester(sem.id)}>
              Remove
            </button>
          )}
           {sem.gpa && sem.units && !isNaN(parseFloat(sem.gpa)) && !isNaN(parseFloat(sem.units)) && (
            <div className="gpa-progress-bar-container">
              <div
                className="gpa-progress-bar"
                style={{
                  width: `${(parseFloat(sem.gpa) / 5) * 100}%`,
                  backgroundColor: getGpaColor(parseFloat(sem.gpa))
                }}
              >
                {parseFloat(sem.gpa).toFixed(2)}
              </div>
            </div>
          )}
        </div>
      ))}

      <div className="actions">
        <button className="add-semester-btn" onClick={addSemester}>
          Add Semester
        </button>
            <button className="calculate-btn" onClick={calculateOverallCgpa}>
              Calculate Overall CGPA
        </button>
      </div>

      {cgpa !== null && (
        <div className="results-section">
              <h2>Your Overall CGPA: <span style={{ color: getGpaColor(parseFloat(cgpa)) }}>{cgpa}</span></h2>
              <p>Total Units Accumulated: {totalUnitsAccumulated}</p>
          <div className="cgpa-overall-progress">
            <div
              className="cgpa-progress-bar-overall"
              style={{
                width: `${(parseFloat(cgpa) / 5) * 100}%`,
                backgroundColor: getGpaColor(parseFloat(cgpa))
              }}
            >
              CGPA Progress ({cgpa})
            </div>
          </div>
            </div>
          )}
        </div>
      )}

      {activeSection === 'session' && (
        <div className="section-content">
          <h2>Calculate Session GPA</h2>
          <p>Enter your 1st and 2nd semester CGPA and total units for each.</p>
          <div className="semester-input-group">
            <h3>1st Semester (Previous CGPA)</h3>
            <div className="input-fields">
              <input
                type="number"
                step="0.01"
                placeholder="1st Sem CGPA"
                value={firstSemCgpa}
                onChange={(e) => setFirstSemCgpa(e.target.value)}
                min="0"
                max="5"
              />
              <input
                type="number"
                step="1"
                placeholder="1st Sem Units"
                value={firstSemUnits}
                onChange={(e) => setFirstSemUnits(e.target.value)}
                min="0"
              />
            </div>
          </div>

          <div className="semester-input-group">
            <h3>2nd Semester (Current CGPA)</h3>
            <div className="input-fields">
              <input
                type="number"
                step="0.01"
                placeholder="2nd Sem CGPA"
                value={secondSemCgpa}
                onChange={(e) => setSecondSemCgpa(e.target.value)}
                min="0"
                max="5"
              />
              <input
                type="number"
                step="1"
                placeholder="2nd Sem Units"
                value={secondSemUnits}
                onChange={(e) => setSecondSemUnits(e.target.value)}
                min="0"
              />
            </div>
          </div>

          <button className="calculate-btn" onClick={calculateSessionGpa}>
            Calculate Session GPA
          </button>

          {sessionGpa !== null && (
            <div className="results-section">
              <h2>Your Session GPA: <span style={{ color: getGpaColor(parseFloat(sessionGpa)) }}>{sessionGpa}</span></h2>
              <div className="cgpa-overall-progress">
                <div
                  className="cgpa-progress-bar-overall"
                  style={{
                    width: `${(parseFloat(sessionGpa) / 5) * 100}%`,
                    backgroundColor: getGpaColor(parseFloat(sessionGpa))
                  }}
                >
                  Session GPA Progress ({sessionGpa})
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      {activeSection === 'impact' && (
        <div className="section-content">
          <h2>Course Impact & Focus</h2>
          <p>Enter your current overall CGPA and accumulated units before these courses.</p>
          <div className="initial-cgpa-input-group">
            <input
              type="number"
              step="0.01"
              placeholder="Current Overall CGPA"
              value={initialCgpaForImpact}
              onChange={(e) => setInitialCgpaForImpact(e.target.value)}
              min="0"
              max="5"
            />
            <input
              type="number"
              step="1"
              placeholder="Current Total Units"
              value={initialUnitsForImpact}
              onChange={(e) => setInitialUnitsForImpact(e.target.value)}
              min="0"
            />
          </div>

          {courses.map(course => (
            <div key={course.id} className="course-input-group semester-input-group"> {/* Reusing semester-input-group for styling */}
              <h4>Course {course.id}</h4>
              <div className="input-fields course-fields">
                <input
                  type="text"
                  placeholder="Course Name (e.g., MTH101)"
                  value={course.name}
                  onChange={(e) => handleCourseInputChange(course.id, 'name', e.target.value)}
                />
                 <select
                  value={course.grade}
                  onChange={(e) => handleCourseInputChange(course.id, 'grade', e.target.value)}
                >
                  <option value="">Select Grade</option>
                  <option value="A">A (5.0)</option>
                  <option value="B">B (4.0)</option>
                  <option value="C">C (3.0)</option>
                  <option value="D">D (2.0)</option>
                  <option value="E">E (1.0)</option>
                  <option value="F">F (0.0)</option>
                </select>
                <input
                  type="number"
                  step="1"
                  placeholder="Units"
                  value={course.units}
                  onChange={(e) => handleCourseInputChange(course.id, 'units', e.target.value)}
                  min="0"
                />
              </div>
              {courses.length > 1 && (
                <button className="remove-semester-btn" onClick={() => removeCourse(course.id)}>
                  Remove Course
                </button>
              )}
            </div>
          ))}

          <div className="actions">
            <button className="add-semester-btn" onClick={addCourse}>
              Add Course
            </button>
            <button className="calculate-btn" onClick={calculateCourseImpact}>
              Simulate CGPA
            </button>
             <button className="calculate-btn focus-btn" onClick={findBestCourseCombinations}>
              Find Course Combinations to Focus On
            </button>
          </div>

          {simulatedCgpa !== null && (
            <div className="results-section">
              <h2>Simulated Overall CGPA: <span style={{ color: getGpaColor(parseFloat(simulatedCgpa)) }}>{simulatedCgpa}</span></h2>
              <p>Based on current CGPA and prospective courses.</p>
              <div className="cgpa-overall-progress">
                <div
                  className="cgpa-progress-bar-overall"
                  style={{
                    width: `${(parseFloat(simulatedCgpa) / 5) * 100}%`,
                    backgroundColor: getGpaColor(parseFloat(simulatedCgpa))
                  }}
                >
                  Simulated CGPA Progress ({simulatedCgpa})
                </div>
              </div>
            </div>
          )}

           {/* Here you would render the results of findBestCourseCombinations */}
           {/* For now, it uses an alert, but for better UX, display it here */}
           {/*
           {bestCombinations.length > 0 && (
               <div className="results-section combinations-results">
                   <h3>Recommended Course Combinations:</h3>
                   // Render goodCombinations here
               </div>
           )}
           */}

        </div>
      )}

      <div className="grade-scale-info">
        <h3>Grade Scale (Example: 5.0 CGPA System)</h3>
        <ul>
          <li><span style={{ color: '#4CAF50' }}>4.50 - 5.00:</span> Excellent (A)</li>
          <li><span style={{ color: '#8BC34A' }}>3.50 - 4.49:</span> Very Good (B)</li>
          <li><span style={{ color: '#FFEB3B' }}>2.50 - 3.49:</span> Good (C)</li>
          <li><span style={{ color: '#FFC107' }}>1.50 - 2.49:</span> Pass (D/E)</li>
          <li><span style={{ color: '#F44336' }}>0.00 - 1.49:</span> Probation/Fail (F)</li>
        </ul>
      </div>
    </div>
  );
};

export default CgpaCalc;