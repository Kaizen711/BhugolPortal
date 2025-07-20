import React, { useEffect, useRef, useState } from 'react';
import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';
import './App.css'; // Optional: custom CSS
import projectData from './data/projectData';

const App = () => {
  const mapContainerRef = useRef(null);
  const mapRef = useRef(null);

  const [filters, setFilters] = useState({
    state: '',
    projectType: '',
    ownership: ''
  });

  const filteredProjects = projectData.filter(project => {
    const matchesState = filters.state ? project.state === filters.state : true;
    const matchesOwnership = filters.ownership ? project.ownership === filters.ownership : true;
    const matchesProjectType = filters.projectType ? project.projectType === filters.projectType : true;
    return matchesState && matchesOwnership && matchesProjectType;
  });

  const uniqueValues = (field) => [...new Set(projectData.map(p => p[field]).filter(Boolean))];

  useEffect(() => {
    const map = new maplibregl.Map({
      container: mapContainerRef.current,
      style: process.env.REACT_APP_MAPTILER_STYLE,
      center: [78.9629, 20.5937],
      zoom: 4,
    });

    mapRef.current = map;

    // Add navigation control (zoom buttons)
    map.addControl(new maplibregl.NavigationControl(), 'top-right');

    return () => map.remove();
  }, []);

  useEffect(() => {
    const map = mapRef.current;
    if (!map) return;

    // Remove existing markers
    const currentMarkers = document.querySelectorAll('.maplibre-marker');
    currentMarkers.forEach(m => m.remove());

    // Add filtered markers
    filteredProjects.forEach(project => {
      const el = document.createElement('div');
      el.className = 'maplibre-marker';
      el.style.width = '12px';
      el.style.height = '12px';
      el.style.backgroundColor = '#2e7d32';
      el.style.borderRadius = '50%';

      new maplibregl.Marker(el)
        .setLngLat([project.location[1], project.location[0]])
        .setPopup(
          new maplibregl.Popup({ offset: 25 }).setHTML(`
            <strong>${project.name}</strong><br/>
            ${project.description}<br/>
            <small>${project.city}, ${project.state}</small>
          `)
        )
        .addTo(map);
    });
  }, [filteredProjects]);

  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      {/* Sidebar */}
      <div style={{
        width: '300px',
        backgroundColor: '#f0f0f0',
        padding: '20px',
        overflowY: 'auto',
        borderRight: '1px solid #ccc'
      }}>
        <h2>Projects</h2>

        <div style={{ marginBottom: '10px' }}>
          <label>State:</label>
          <select name="state" onChange={(e) => setFilters({ ...filters, state: e.target.value })} value={filters.state}>
            <option value="">All</option>
            {uniqueValues("state").map(state => (
              <option key={state} value={state}>{state}</option>
            ))}
          </select>
        </div>

        <div style={{ marginBottom: '10px' }}>
          <label>Ownership:</label>
          <select name="ownership" onChange={(e) => setFilters({ ...filters, ownership: e.target.value })} value={filters.ownership}>
            <option value="">All</option>
            {uniqueValues("ownership").map(o => (
              <option key={o} value={o}>{o}</option>
            ))}
          </select>
        </div>

        <div style={{ marginBottom: '10px' }}>
          <label>Project Type:</label>
          <select name="projectType" onChange={(e) => setFilters({ ...filters, projectType: e.target.value })} value={filters.projectType}>
            <option value="">All</option>
            {uniqueValues("projectType").map(p => (
              <option key={p} value={p}>{p}</option>
            ))}
          </select>
        </div>

        <ul style={{ padding: 0, listStyle: 'none' }}>
          {filteredProjects.map(project => (
            <li
              key={project.id}
              style={{ cursor: 'pointer', marginBottom: '10px' }}
              onClick={() => {
                if (mapRef.current) {
                  mapRef.current.flyTo({
                    center: [project.location[1], project.location[0]],
                    zoom: 12
                  });
                }
              }}
            >
              <strong>{project.name}</strong><br />
              <small>{project.city}, {project.state}</small>
            </li>
          ))}
        </ul>
      </div>

      {/* Map Container */}
      <div ref={mapContainerRef} style={{ flex: 1 }} />
    </div>
  );
};

export default App;
