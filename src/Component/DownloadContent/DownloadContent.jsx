import React, { useMemo, useState } from 'react';
import './DownloadContent.css';
import Navbar from '../Navbar/Navbar';

export default function DownloadContent({
  title = 'Downloads',
  description = 'Find and download your course resources.',
  resources: resourcesProp,
  categories: categoriesProp,
}) {
  const stat = "https://drive.google.com/file/d/13x9ICmnE917H5nkYm4JCPDlsn9QN3K7v/view?usp=sharing"

  const defaultResources = useMemo(() => ([
    {
      id: 'STAT112-PAST QUESTIONS',
      title: 'STAT 112 Lecture Notes (PDF)',
      category: 'Statistics',
      tags: ['notes', 'pdf', 'intro'],
      size: '12.4 MB',
      url:  "https://drive.google.com/file/d/13x9ICmnE917H5nkYm4JCPDlsn9QN3K7v/view?usp=sharing",
    },
    {
      id: 'mat201-examples',
      title: 'MAT 201 Solved Examples (ZIP)',
      category: 'Mathematics',
      tags: ['examples', 'zip', 'calculus'],
      size: '8.7 MB',
      url: 'https://drive.google.com/drive/folders/1pdbET0GzEjMQ3lcfGqSxpn0UNIJ2hA29?usp=sharing',
    },
    {
      id: 'phy112-lab',
      title: 'PHY 112 Lab Manual (PDF)',
      category: 'Physics',
      tags: ['lab', 'pdf'],
      size: '3.1 MB',
      url: 'https://drive.google.com/drive/folders/1pdbET0GzEjMQ3lcfGqSxpn0UNIJ2hA29?usp=sharing',
    },
  ]), []);

  const resources = resourcesProp && resourcesProp.length ? resourcesProp : defaultResources;
  const categories = useMemo(() => {
    const set = new Set(resources.map(r => r.category).filter(Boolean));
    return ['All', ...Array.from(set)];
  }, [resources]);

  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('All');
  const [selectedTags, setSelectedTags] = useState([]);

  const allTags = useMemo(() => {
    const set = new Set();
    resources.forEach(r => (r.tags || []).forEach(t => set.add(t)));
    return Array.from(set).sort();
  }, [resources]);

  const filtered = useMemo(() => {
    return resources.filter(r => {
      const matchesQuery =
        !query ||
        r.title.toLowerCase().includes(query.toLowerCase()) ||
        (r.tags || []).some(t => t.toLowerCase().includes(query.toLowerCase()));
      const matchesCategory = category === 'All' || r.category === category;
      const matchesTags =
        selectedTags.length === 0 ||
        selectedTags.every(t => (r.tags || []).includes(t));
      return matchesQuery && matchesCategory && matchesTags;
    });
  }, [resources, query, category, selectedTags]);

  const toggleTag = (tag) => {
    setSelectedTags(prev =>
      prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev, tag]
    );
  };

  return (
    <>
    <Navbar/>
    <div style={{width:"100%" , height:"80px" , backgroundColor:"#000"}}></div>
    <br/>
    <br/>
    <br />
    <br />
    <div className="downloads-wrap">
      <div className="downloads-container">
        <div className="downloads-header">
          <h1 style={{color:"#000"}}>{title}</h1>
          <p style={{color:"#000"}} >{description}</p>
        </div>

        {/* Filters */}
        <div className="downloads-filters">
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search by title or tag..."
            className="input-basic"
          />
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="select-basic"
          >
            {(categoriesProp?.length ? ['All', ...categoriesProp] : categories).map((cat) => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
        </div>

        {/* Tag pills */}
        {!!allTags.length && (
          <div className="tags-row">
            {allTags.map(tag => (
              <button
                key={tag}
                onClick={() => toggleTag(tag)}
                className={selectedTags.includes(tag) ? 'tag-pill active' : 'tag-pill'}
              >
                #{tag}
              </button>
            ))}
          </div>
        )}

        {/* Results */}
        <div className="results">
          {filtered.length === 0 ? (
            <div className="results-empty">
              No resources found. Try adjusting your filters.
            </div>
          ) : (
            <ul className="results-list">
              {filtered.map((r) => (
                <li key={r.id} className="result-item">
                  <div>
                    <div className="result-title">{r.title}</div>
                    <div className="result-meta">
                      {r.category} {r.size ? `• ${r.size}` : ''}
                    </div>
                    <div className="result-tags">
                      {(r.tags || []).map(t => (
                        <span key={t} className="result-tag">
                          #{t}
                        </span>
                      ))}
                    </div>
                  </div>
                  <a
                    href={r.url}
                    target='_blank'
                    rel="noopener noreferrer"
                    className="btn-download"
                  >
                    Download
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
    </>
  );
}