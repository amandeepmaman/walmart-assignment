import React from 'react';
import { useAppContext } from '../context/AppContext';

const DocumentsPage = () => {
  const { searchQuery } = useAppContext();
  
  const paragraphs = [
    "Documentation is essential for maintaining and understanding complex systems. Well-written documentation reduces onboarding time and improves collaboration among team members.",
    "Technical specifications document the requirements, design, and architecture of a system. They serve as a blueprint for development and a reference for future maintenance.",
    "User manuals provide end-users with the information they need to effectively use a product or service. Clear user documentation reduces support requests and improves user satisfaction.",
    "API documentation is crucial for developers who integrate with your services. Comprehensive API docs include endpoints, request parameters, response formats, and example code.",
    "Internal documentation helps teams maintain knowledge over time, especially as team members come and go. It includes architecture decisions, coding standards, and workflow processes.",
    "Release notes inform users about new features, bug fixes, and known issues in each release. They help users understand what has changed and how it affects their workflow.",
    "Change logs track modifications to a codebase over time. They help developers understand the evolution of a project and identify when specific changes were introduced.",
    "Design documents outline the reasoning behind design decisions. They explain why certain approaches were chosen over alternatives and document the constraints that influenced the design.",
    "Troubleshooting guides help users solve common problems on their own. They provide step-by-step instructions for diagnosing and resolving issues.",
    "Security documentation outlines the security measures implemented in a system. It includes information about encryption, authentication, authorization, and data protection practices.",
    "Documentation is essential for maintaining and understanding complex systems. Well-written documentation reduces onboarding time and improves collaboration among team members.",
    "Technical specifications document the requirements, design, and architecture of a system. They serve as a blueprint for development and a reference for future maintenance.",
    "User manuals provide end-users with the information they need to effectively use a product or service. Clear user documentation reduces support requests and improves user satisfaction.",
    "API documentation is crucial for developers who integrate with your services. Comprehensive API docs include endpoints, request parameters, response formats, and example code.",
    "Internal documentation helps teams maintain knowledge over time, especially as team members come and go. It includes architecture decisions, coding standards, and workflow processes.",
    "Release notes inform users about new features, bug fixes, and known issues in each release. They help users understand what has changed and how it affects their workflow.",
    "Change logs track modifications to a codebase over time. They help developers understand the evolution of a project and identify when specific changes were introduced.",
    "Design documents outline the reasoning behind design decisions. They explain why certain approaches were chosen over alternatives and document the constraints that influenced the design.",
    "Troubleshooting guides help users solve common problems on their own. They provide step-by-step instructions for diagnosing and resolving issues.",
    "Security documentation outlines the security measures implemented in a system. It includes information about encryption, authentication, authorization, and data protection practices.",
    "Documentation is essential for maintaining and understanding complex systems. Well-written documentation reduces onboarding time and improves collaboration among team members.",
    "Technical specifications document the requirements, design, and architecture of a system. They serve as a blueprint for development and a reference for future maintenance.",
    "User manuals provide end-users with the information they need to effectively use a product or service. Clear user documentation reduces support requests and improves user satisfaction.",
    "API documentation is crucial for developers who integrate with your services. Comprehensive API docs include endpoints, request parameters, response formats, and example code.",
    "Internal documentation helps teams maintain knowledge over time, especially as team members come and go. It includes architecture decisions, coding standards, and workflow processes.",
    "Release notes inform users about new features, bug fixes, and known issues in each release. They help users understand what has changed and how it affects their workflow.",
    "Change logs track modifications to a codebase over time. They help developers understand the evolution of a project and identify when specific changes were introduced.",
    "Design documents outline the reasoning behind design decisions. They explain why certain approaches were chosen over alternatives and document the constraints that influenced the design.",
    "Troubleshooting guides help users solve common problems on their own. They provide step-by-step instructions for diagnosing and resolving issues.",
    "Security documentation outlines the security measures implemented in a system. It includes information about encryption, authentication, authorization, and data protection practices.",
    "Documentation is essential for maintaining and understanding complex systems. Well-written documentation reduces onboarding time and improves collaboration among team members.",
    "Technical specifications document the requirements, design, and architecture of a system. They serve as a blueprint for development and a reference for future maintenance.",
    "User manuals provide end-users with the information they need to effectively use a product or service. Clear user documentation reduces support requests and improves user satisfaction.",
    "API documentation is crucial for developers who integrate with your services. Comprehensive API docs include endpoints, request parameters, response formats, and example code.",
    "Internal documentation helps teams maintain knowledge over time, especially as team members come and go. It includes architecture decisions, coding standards, and workflow processes.",
    "Release notes inform users about new features, bug fixes, and known issues in each release. They help users understand what has changed and how it affects their workflow.",
    "Change logs track modifications to a codebase over time. They help developers understand the evolution of a project and identify when specific changes were introduced.",
    "Design documents outline the reasoning behind design decisions. They explain why certain approaches were chosen over alternatives and document the constraints that influenced the design.",
    "Troubleshooting guides help users solve common problems on their own. They provide step-by-step instructions for diagnosing and resolving issues.",
    "Security documentation outlines the security measures implemented in a system. It includes information about encryption, authentication, authorization, and data protection practices."
  ];

  const highlightText = (text, query) => {
    if (!query) return text;
    
    const parts = text.split(new RegExp(`(${query})`, 'gi'));
    
    return parts.map((part, index) => 
      part.toLowerCase() === query.toLowerCase() ? 
        <span key={index} className="highlight">{part}</span> : 
        part
    );
  };

  const filteredParagraphs = searchQuery 
    ? paragraphs.filter(p => p.toLowerCase().includes(searchQuery.toLowerCase())) 
    : paragraphs;

  return (
    <div>
      <h1>Documents</h1>
      {filteredParagraphs.length > 0 ? (
        filteredParagraphs.map((paragraph, index) => (
          <p key={index} style={{ marginBottom: '20px', lineHeight: '1.6' }}>
            {highlightText(paragraph, searchQuery)}
          </p>
        ))
      ) : (
        <p>No content matches your search.</p>
      )}
    </div>
  );
};

export default DocumentsPage;