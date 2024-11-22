import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const ProjectDetails = () => {
  const project = {
    "projectName": "Jaguare Garment Industry",
    "projectLocation": "New York, USA",
    "clientName": "Jaguare Inc.",
    "projectDetails": "This project involved the design and construction of a garment industry facility.",
    "projectPhotos": [
      "https://example.com/project1.jpg",
      "https://example.com/project2.jpg",
      "https://example.com/project3.jpg"
    ],
    "projectVideos": [
      "https://example.com/project1.mp4",
      "https://example.com/project2.mp4"
    ]
  };
  const { projectName, projectLocation, clientName, projectDetails, projectPhotos, projectVideos } = project;

  return (
    <div style={{ padding: '20px' }}>
      <h2 style={{ fontSize: '2em', marginBottom: '10px' }}>{projectName}</h2>

      <div style={{ marginBottom: '15px' }}>
        <p style={{ fontSize: '1.2em', margin: '5px 0' }}>
          <strong>Project Location:</strong> {projectLocation}
        </p>
        <p style={{ fontSize: '1.2em', margin: '5px 0' }}>
          <strong>Client Name:</strong> {clientName}
        </p>
      </div>

      <p style={{ fontSize: '1.1em', marginBottom: '20px' }}>{projectDetails}</p>

      <div style={{ marginBottom: '20px' }}>
        <h3 style={{ fontSize: '1.5em', marginBottom: '10px' }}>Project Photos</h3>
        <Carousel>
          {projectPhotos.map((photo, index) => (
            <div key={index}>
              <img src={photo} alt={`Project Photo ${index + 1}`} style={{ width: '100%', borderRadius: '8px' }} />
            </div>
          ))}
        </Carousel>
      </div>

      <div>
        <h3 style={{ fontSize: '1.5em', marginBottom: '10px' }}>Project Videos</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {projectVideos.map((video, index) => (
            <video key={index} src={video} controls style={{ width: '100%', borderRadius: '8px' }} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;

