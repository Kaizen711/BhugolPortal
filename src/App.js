import React, { useEffect, useRef, useState } from 'react';
import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';
import './App.css';
import logo from './data/Image/bhugol_logo.png';
import projectData from './data/projectData';

// Utility to count group occurrences
function countBy(arr, key) {
  const counts = {};
  arr.forEach(item => {
    const value = item[key] || 'Unknown';
    counts[value] = (counts[value] || 0) + 1;
  });
  // Sorted by most projects
  return Object.entries(counts)
    .sort((a, b) => b[1] - a[1])
    .map(([name, count]) => ({ name, count }));
}

// HEADER COMPONENT
const Header = () => (
  <div className="dashboard-header">
    <div className="header-title-section">
      <img src={logo} alt="Logo" className="dashboard-logo" />
      <div>
        <h2>Bhugol GIS: A Geospatial Solution Company</h2>
        <div className="neon-accent"></div>
      </div>
    </div>
    <div>
      <span className="dashboard-time">{new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
      <div className="dashboard-date">{new Date().toLocaleDateString()}</div>
    </div>
  </div>
);

// SIDEBAR COMPONENT (unchanged)
const Sidebar = ({ filters, setFilters, uniqueValues, filteredProjects, onProjectClick }) => (
  <div className="panel sidebar">
    <h3>Filters</h3>
    <div className="filter-group">
      <label>State</label>
      <select name="state" onChange={e => setFilters(f => ({ ...f, state: e.target.value }))} value={filters.state}>
        <option value="">All</option>
        {uniqueValues("state").map(state => (
          <option key={state} value={state}>{state}</option>
        ))}
      </select>
    </div>
    <div className="filter-group">
      <label>Ownership</label>
      <select name="ownership" onChange={e => setFilters(f => ({ ...f, ownership: e.target.value }))} value={filters.ownership}>
        <option value="">All</option>
        {uniqueValues("ownership").map(owner => (
          <option key={owner} value={owner}>{owner}</option>
        ))}
      </select>
    </div>
    <div className="filter-group">
      <label>Project Type</label>
      <select name="projectType" onChange={e => setFilters(f => ({ ...f, projectType: e.target.value }))} value={filters.projectType}>
        <option value="">All</option>
        {uniqueValues("projectType").map(pt => (
          <option key={pt} value={pt}>{pt}</option>
        ))}
      </select>
    </div>
    <h3 style={{marginTop: 30}}>Projects</h3>
    <ul className="project-list">
      {filteredProjects.map(project => (
        <li key={project.id} onClick={() => onProjectClick(project)}>
          <strong>{project.name}</strong>
          <br/>
          <small>{project.city}, {project.state}</small>
        </li>
      ))}
      {filteredProjects.length === 0 && <li style={{color:'#888'}}>No projects</li>}
    </ul>
  </div>
);

// --- NEW METRICS PANEL --- //
const MetricsPanel = () => {
  const totalProjects = projectData.length;

  // Grouped counts for bars
  const projectsByOwnership = countBy(projectData, 'ownership');
  const projectsByState = countBy(projectData, 'state');

  // Uniquer fields for KPIs
  const uniqueTypes = [...new Set(projectData.map(p => p.projectType))].filter(Boolean);
  const uniqueClients = [...new Set(projectData.map(p => p.client))].filter(Boolean);

  // for horizontal bar max scaling
  const maxOwnership = Math.max(...projectsByOwnership.map(o => o.count), 1);
  const maxState = Math.max(...projectsByState.map(s => s.count), 1);

  return (
    <div className="panel metrics-panel">
      <h3>GIS Project Overview</h3>
      <div className="metrics-card kpi">
        <div>
          <span className="metric-label">Total Projects</span>
          <span className="metric-value">{totalProjects}</span>
        </div>
        <div>
          <span className="metric-label">Types</span>
          <span className="metric-value">{uniqueTypes.length}</span>
        </div>
        <div>
          <span className="metric-label">Clients</span>
          <span className="metric-value">{uniqueClients.length}</span>
        </div>
      </div>

      {/* Ownership Stats Horizontal Bar */}
      <div className="metrics-section">
        <div className="metrics-section-title">Projects by Ownership</div>
        <div className="metrics-bar-list">
          {projectsByOwnership.map(({ name, count }) => (
            <div className="metrics-bar-row" key={name}>
              <span className="metrics-bar-label">{name}</span>
              <div className="metrics-bar-outer">
                <div
                  className="metrics-bar-inner"
                  style={{
                    width: `${(count / maxOwnership) * 100}%`,
                    background: 'linear-gradient(to right, #36eaf8 60%, #6ef6c7)'
                  }}
                >
                  <span className="metrics-bar-number">{count}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* State Stats Horizontal Bar */}
      <div className="metrics-section">
        <div className="metrics-section-title">Projects by State</div>
        <div className="metrics-bar-list">
          {projectsByState.map(({ name, count }) => (
            <div className="metrics-bar-row" key={name}>
              <span className="metrics-bar-label">{name}</span>
              <div className="metrics-bar-outer">
                <div
                  className="metrics-bar-inner"
                  style={{
                    width: `${(count / maxState) * 100}%`,
                    background: 'linear-gradient(to right, #4b9cff 65%, #25ffe6 110%)'
                  }}
                >
                  <span className="metrics-bar-number">{count}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// --- MAIN APP COMPONENT --- //
const App = () => {
  const mapRef = useRef(null);
  const mapContainerRef = useRef(null);

  const [filters, setFilters] = useState({ state: '', projectType: '', ownership: '' });

  const filteredProjects = projectData.filter(project => {
    const matchesState = filters.state ? project.state === filters.state : true;
    const matchesOwnership = filters.ownership ? project.ownership === filters.ownership : true;
    const matchesProjectType = filters.projectType ? project.projectType === filters.projectType : true;
    return matchesState && matchesOwnership && matchesProjectType;
  });

  const uniqueValues = (field) => [...new Set(projectData.map(p => p[field]).filter(Boolean))];

  // Map initialize
  useEffect(() => {
    const map = new maplibregl.Map({
      container: mapContainerRef.current,
      style: process.env.REACT_APP_MAPTILER_STYLE || 'https://api.maptiler.com/maps/toner-v2/style.json?key=GET_YOUR_KEY', // dark theme
      center: [78.9629, 20.5937],
      zoom: 4,
    });
    mapRef.current = map;
    map.addControl(new maplibregl.NavigationControl(), 'top-right');
    return () => map.remove();
  }, []);

  // Map markers update
  useEffect(() => {
    const map = mapRef.current;
    if (!map) return;
    // Remove previous markers
    const oldMarkers = document.querySelectorAll('.maplibre-marker');
    oldMarkers.forEach(m => m.remove());
    // Add filtered
    filteredProjects.forEach(project => {
      const el = document.createElement('div');
      el.className = 'maplibre-marker';

      new maplibregl.Marker(el)
        .setLngLat([project.location[1], project.location[0]])
        .setPopup(
          new maplibregl.Popup({ offset: 25 }).setHTML(
            `<strong>${project.name}</strong><br/>${project.description || ''}<br/>
            <small>${project.city}, ${project.state}</small>`
          )
        )
        .addTo(map);
    });
  }, [filteredProjects]);

  // Project fly-to
  const handleProjectClick = (project) => {
    if (mapRef.current) {
      mapRef.current.flyTo({
        center: [project.location[1], project.location[0]],
        zoom: 12,
        essential: true,
      });
    }
  };

  //--- RENDER ---
  return (
    <div className="dashboard">
      <Header />
      <div className="dashboard-main">
        <Sidebar
          filters={filters}
          setFilters={setFilters}
          uniqueValues={uniqueValues}
          filteredProjects={filteredProjects}
          onProjectClick={handleProjectClick}
        />
        <div className="panel map-panel">
          <div ref={mapContainerRef} className="maplibre-container" />
        </div>
        <MetricsPanel />
      </div>
    </div>
  );
};

export default App;
