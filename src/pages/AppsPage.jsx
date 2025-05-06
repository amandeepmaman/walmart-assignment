import React from 'react';
import { useAppContext } from '../context/AppContext';

const AppsPage = () => {
  const { searchQuery } = useAppContext();
  
  const paragraphs = [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor. Ut in nulla enim.",
    "Phasellus molestie magna non est bibendum non venenatis nisl tempor. Suspendisse dictum feugiat nisl ut dapibus. Mauris iaculis porttitor posuere. Praesent id metus massa, ut blandit odio.",
    "Proin quis tortor orci. Etiam at risus et justo dignissim congue. Donec congue lacinia dui, a porttitor lectus condimentum laoreet. Nunc eu ullamcorper orci. Quisque eget odio ac lectus vestibulum faucibus eget in metus.",
    "The mobile applications we develop are designed to provide seamless user experiences across all platforms. Our app development process includes thorough market research, prototyping, and rigorous testing.",
    "Web applications today need to be responsive, secure, and performance-optimized. We leverage the latest technologies to ensure your web apps meet modern standards and expectations.",
    "Cloud-based applications offer flexibility and scalability that traditional software cannot match. Our cloud solutions enable businesses to adapt quickly to changing market demands.",
    "Desktop applications still have important use cases for many industries. We develop native desktop apps that provide powerful functionality with intuitive interfaces.",
    "Enterprise applications require robust architecture and seamless integration with existing systems. Our enterprise solutions are built with scalability and security in mind.",
    "Gaming applications present unique challenges in terms of performance and user engagement. Our game development team focuses on creating immersive experiences that keep users coming back.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor. Ut in nulla enim.",
    "Phasellus molestie magna non est bibendum non venenatis nisl tempor. Suspendisse dictum feugiat nisl ut dapibus. Mauris iaculis porttitor posuere. Praesent id metus massa, ut blandit odio.",
    "Proin quis tortor orci. Etiam at risus et justo dignissim congue. Donec congue lacinia dui, a porttitor lectus condimentum laoreet. Nunc eu ullamcorper orci. Quisque eget odio ac lectus vestibulum faucibus eget in metus.",
    "The mobile applications we develop are designed to provide seamless user experiences across all platforms. Our app development process includes thorough market research, prototyping, and rigorous testing.",
    "Web applications today need to be responsive, secure, and performance-optimized. We leverage the latest technologies to ensure your web apps meet modern standards and expectations.",
    "Cloud-based applications offer flexibility and scalability that traditional software cannot match. Our cloud solutions enable businesses to adapt quickly to changing market demands.",
    "Desktop applications still have important use cases for many industries. We develop native desktop apps that provide powerful functionality with intuitive interfaces.",
    "Enterprise applications require robust architecture and seamless integration with existing systems. Our enterprise solutions are built with scalability and security in mind.",
    "Gaming applications present unique challenges in terms of performance and user engagement. Our game development team focuses on creating immersive experiences that keep users coming back.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor. Ut in nulla enim.",
    "Phasellus molestie magna non est bibendum non venenatis nisl tempor. Suspendisse dictum feugiat nisl ut dapibus. Mauris iaculis porttitor posuere. Praesent id metus massa, ut blandit odio.",
    "Proin quis tortor orci. Etiam at risus et justo dignissim congue. Donec congue lacinia dui, a porttitor lectus condimentum laoreet. Nunc eu ullamcorper orci. Quisque eget odio ac lectus vestibulum faucibus eget in metus.",
    "The mobile applications we develop are designed to provide seamless user experiences across all platforms. Our app development process includes thorough market research, prototyping, and rigorous testing.",
    "Web applications today need to be responsive, secure, and performance-optimized. We leverage the latest technologies to ensure your web apps meet modern standards and expectations.",
    "Cloud-based applications offer flexibility and scalability that traditional software cannot match. Our cloud solutions enable businesses to adapt quickly to changing market demands.",
    "Desktop applications still have important use cases for many industries. We develop native desktop apps that provide powerful functionality with intuitive interfaces.",
    "Enterprise applications require robust architecture and seamless integration with existing systems. Our enterprise solutions are built with scalability and security in mind.",
    "Gaming applications present unique challenges in terms of performance and user engagement. Our game development team focuses on creating immersive experiences that keep users coming back."
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
      <h1>Apps</h1>
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

export default AppsPage;