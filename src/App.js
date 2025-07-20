import React, { useEffect, useRef, useState } from 'react';
import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';
import './App.css'; // Custom styles
import projectData from './data/projectData';

const App = () => {
  const mapContainerRef = useRef(null); // Reference to the map container
  const mapRef = useRef(null);          // To store the map instance
  const popupRef = useRef(null);        // For managing a single popup instance

  // Project filter state
  const [filters, setFilters] = useState({
    state: '',
    projectType: '',
    ownership: ''
  });

  // Filtered project list
  const filteredProjects = projectData.filter(project => {
    const matchesState = filters.state ? project.state === filters.state : true;
    const matchesOwnership = filters.ownership ? project.ownership === filters.ownership : true;
    const matchesProjectType = filters.projectType ? project.projectType === filters.projectType : true;
    return matchesState && matchesOwnership && matchesProjectType;
  });

  // Get unique values for dropdown filters
  const uniqueValues = (field) =>
    [...new Set(projectData.map(p => p[field]).filter(Boolean))];

  // Initialize map on first render
  useEffect(() => {
    const map = new maplibregl.Map({
      container: mapContainerRef.current,
      style: process.env.REACT_APP_MAPTILER_STYLE, // Vector tile style from MapTiler
      center: [78.9629, 20.5937], // India center
      zoom: 4,
    });

    mapRef.current = map;

    // Add zoom & rotate controls
    map.addControl(new maplibregl.NavigationControl(), 'top-right');

    return () => map.remove(); // Cleanup on unmount
  }, []);

  // Add markers based on filtered data
  useEffect(() => {
    const map = mapRef.current;
    if (!map) return;

    // Remove old markers
    document.querySelectorAll('.maplibre-marker').forEach(m => m.remove());

    // Add new markers
    filteredProjects.forEach(project => {
      const el = document.createElement('div');
      el.className = 'maplibre-marker';
      el.style.width = '12px';
      el.style.height = '12px';
      el.style.backgroundColor = '#2e7d32';
      el.style.borderRadius = '50%';

      const popup = new maplibregl.Popup({ offset: 25 }).setHTML(`
        <strong>${project.name}</strong><br/>
        ${project.description}<br/>
        <small>${project.city}, ${project.state}</small>
      `);

      new maplibregl.Marker(el)
        .setLngLat([project.location[1], project.location[0]])
        .setPopup(popup)
        .addTo(map);
    });
  }, [filteredProjects]);

  // Zoom and open popup on project list click
  const handleProjectClick = (project) => {
    const map = mapRef.current;
    if (map) {
      const lngLat = [project.location[1], project.location[0]];
      map.flyTo({ center: lngLat, zoom: 12 });

      // Reuse popup
      if (popupRef.current) {
        popupRef.current.remove();
      }

      const popup = new maplibregl.Popup({ offset: 25 })
        .setLngLat(lngLat)
        .setHTML(`
          <strong>${project.name}</strong><br/>
          ${project.description}<br/>
          <small>${project.city}, ${project.state}</small>
        `)
        .addTo(map);

      popupRef.current = popup;
    }
  };

  return (
    <div className="app-container">
      {/* Sidebar for filters and project list */}
      <div className="sidebar">
        <h2>Projects</h2>

        {/* Filters */}
        <div style={{ marginBottom: '10px' }}>
          <label>State:</label>
          <select
            name="state"
            value={filters.state}
            onChange={(e) => setFilters({ ...filters, state: e.target.value })}
          >
            <option value="">All</option>
            {uniqueValues('state').map(state => (
              <option key={state} value={state}>{state}</option>
            ))}
          </select>
        </div>

        <div style={{ marginBottom: '10px' }}>
          <label>Ownership:</label>
          <select
            name="ownership"
            value={filters.ownership}
            onChange={(e) => setFilters({ ...filters, ownership: e.target.value })}
          >
            <option value="">All</option>
            {uniqueValues('ownership').map(owner => (
              <option key={owner} value={owner}>{owner}</option>
            ))}
          </select>
        </div>

        <div style={{ marginBottom: '10px' }}>
          <label>Project Type:</label>
          <select
            name="projectType"
            value={filters.projectType}
            onChange={(e) => setFilters({ ...filters, projectType: e.target.value })}
          >
            <option value="">All</option>
            {uniqueValues('projectType').map(type => (
              <option key={type} value={type}>{type}</option>
            ))}
          </select>
        </div>

        {/* Project List */}
        <ul className="project-list">
          {filteredProjects.map(project => (
            <li key={project.id} onClick={() => handleProjectClick(project)}>
              <strong>{project.name}</strong><br />
              <small>{project.city}, {project.state}</small><br />
              <small>{project.projectType} ({project.ownership})</small>
            </li>
          ))}
        </ul>
      </div>

      {/* Map container */}
      <div ref={mapContainerRef} className="map-container" />
    </div>
  );
};

export default App;
