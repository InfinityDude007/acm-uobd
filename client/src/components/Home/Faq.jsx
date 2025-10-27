import React from 'react';
import '../../assets/css/Home/Faq.css';

const FAQSection = () => {
  const faqData = {
    leftColumn: [
      {
        id: 'collapseOne',
        headingId: 'headingOne',
        question: 'What is ACM?',
        answer: 'ACM (Association for Computing Machinery) is the world\'s largest educational and scientific computing society. It brings together computing educators, researchers, and professionals to inspire dialogue, share resources, and address the field\'s challenges.',
        delay: '0.1s'
      },
      {
        id: 'collapseTwo',
        headingId: 'headingTwo',
        question: 'Who can join the ACM Student Chapter?',
        answer: 'Any currently enrolled student at our university can join the ACM Student Chapter, regardless of their major or technical background. We welcome students from all disciplines who are interested in computing and technology.',
        delay: '0.2s'
      },
      {
        id: 'collapseThree',
        headingId: 'headingThree',
        question: 'What are the benefits of joining the ACM Student Chapter?',
        answer: 'Members enjoy access to networking events, workshops, coding competitions, career development opportunities, mentorship programs, and exclusive resources from ACM International.',
        delay: '0.3s'
      },
      {
        id: 'collapseFour',
        headingId: 'headingFour',
        question: 'How do I become a member?',
        answer: 'You can join by attending one of our meetings and signing up with our membership coordinator. There are no membership fees for the student chapter, and all students are welcome to participate.',
        delay: '0.4s'
      }
    ],
    rightColumn: [
      {
        id: 'collapseFive',
        headingId: 'headingFive',
        question: 'What kind of events does the ACM Student Chapter host?',
        answer: 'We host a variety of events including technical workshops, guest speaker sessions, hackathons, coding competitions, study groups, and social networking events throughout the academic year.',
        delay: '0.5s'
      },
      {
        id: 'collapseSix',
        headingId: 'headingSix',
        question: 'Do I need prior programming or technical skills to participate?',
        answer: 'No prior experience is required! We welcome students at all skill levels and offer beginner-friendly workshops and resources to help you get started with programming and computer science concepts.',
        delay: '0.6s'
      },
      {
        id: 'collapseSeven',
        headingId: 'headingSeven',
        question: 'How can I get involved in leadership or event planning?',
        answer: 'We encourage active participation! You can join our planning committees, volunteer for events, or run for elected positions during our annual elections. Attend our meetings to learn about current opportunities.',
        delay: '0.7s'
      }
    ]
  };

  const FAQItem = ({ item, accordionId }) => (
    <div className="accordion-item" data-wow-delay={item.delay}>
      <h2 className="accordion-header" id={item.headingId}>
        <button 
          className="accordion-button collapsed" 
          type="button" 
          data-bs-toggle="collapse"
          data-bs-target={`#${item.id}`} 
          aria-expanded="false" 
          aria-controls={item.id}
        >
          {item.question}
        </button>
      </h2>
      <div 
        id={item.id} 
        className="accordion-collapse collapse" 
        aria-labelledby={item.headingId}
        data-bs-parent={`#${accordionId}`}
      >
        <div className="accordion-body">
          {item.answer}
        </div>
      </div>
    </div>
  );

  return (
    <div className="faq-container">
      <div className="faq-header">
        <h1 className="faq-title">Frequently Asked Questions</h1>
      </div>
      <div className="faq-content">
        <div className="faq-column">
          <div className="accordion" id="accordionFAQ1">
            {faqData.leftColumn.map((item) => (
              <FAQItem 
                key={item.id}
                item={item}
                accordionId="accordionFAQ1"
              />
            ))}
          </div>
        </div>
        <div className="faq-column">
          <div className="accordion" id="accordionFAQ2">
            {faqData.rightColumn.map((item) => (
              <FAQItem 
                key={item.id}
                item={item}
                accordionId="accordionFAQ2"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQSection;