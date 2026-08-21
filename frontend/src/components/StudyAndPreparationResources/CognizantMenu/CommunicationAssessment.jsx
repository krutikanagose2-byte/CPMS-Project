import React from 'react';

const CommunicationAssessment = ({ company, currentYear }) => {
  return (
    <div className="csr-content-body">
      {company.name === 'Cognizant' ? (
        <>
          <h1 className="csr-page-title" style={{ textAlign: 'center' }}>
            {company.name} GenC Communication Assessment Test {currentYear}
          </h1>

          <p className="csr-paragraph">
            Test details of {company.name} GenC Communication Assessment {currentYear} (it may vary)
          </p>

          <div className="csr-curr-table-wrapper" style={{ margin: '24px 0' }}>
            <table className="csr-curr-table">
              <thead>
                <tr>
                  <th>Sections</th>
                  <th>Time Allotted</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Reading</td>
                  <td>60 mins (shared)</td>
                </tr>
                <tr>
                  <td>Grammar and Comprehension</td>
                  <td>60 mins (shared)</td>
                </tr>
                <tr>
                  <td>Speaking and Listening</td>
                  <td>60 mins (shared)</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div style={{ textAlign: 'center', margin: '32px 0' }}>
            <button className="csr-green-btn">👉 {company.name} GenC Syllabus {currentYear}</button>
          </div>

          <p className="csr-paragraph">
            Above table denotes that there are 3 sections in {company.name} GenC Communication Assessment Test {currentYear} and the total time allotted for this round is 60 mins. The difficulty of this section is moderate and is highly important section as it happens after aptitude assessment.
          </p>
          <p className="csr-paragraph">
            If you will clear this round then you will be called for Aptitude + Technical Assessment round.
          </p>

          <h3 className="csr-red-heading" style={{ fontSize: '16px' }}>Evaluation Criteria</h3>
          <p className="csr-paragraph">
            In the <strong>Speaking and Listening</strong> section, candidates are assessed based on:
          </p>
          <ul className="csr-curr-list bullet-list">
            <li><strong>Fluency:</strong> The ability to speak smoothly without unnecessary pauses or fillers.</li>
            <li><strong>Pronunciation:</strong> Correct articulation of words to ensure clarity.</li>
            <li><strong>Vocabulary:</strong> Use of appropriate and varied words to convey ideas effectively.</li>
            <li><strong>Sentence Mastery:</strong> Constructing grammatically correct and coherent sentences.</li>
          </ul>
          <p className="csr-paragraph">These criteria are crucial for evaluating a candidate's communication proficiency.</p>

          <h2 className="csr-section-title" style={{ textAlign: 'center', marginTop: '48px', marginBottom: '24px' }}>
            Communication Assessment Sectional Analysis
          </h2>

          <div className="csr-metrics-grid">
            <div className="csr-metric">
              <span className="csr-metric-icon">🗣️</span>
              <span className="csr-metric-value text-blue">60</span>
              <span className="csr-metric-label">Total Question</span>
            </div>
            <div className="csr-metric">
              <span className="csr-metric-icon">⏱️</span>
              <span className="csr-metric-value text-blue">60 minutes</span>
              <span className="csr-metric-label">Total Time</span>
            </div>
            <div className="csr-metric">
              <span className="csr-metric-icon">📑</span>
              <span className="csr-metric-value text-blue">1st</span>
              <span className="csr-metric-label">Round</span>
            </div>
            <div className="csr-metric">
              <span className="csr-metric-icon">⚖️</span>
              <span className="csr-metric-value text-blue">Moderate</span>
              <span className="csr-metric-label">Difficulty</span>
            </div>
          </div>

          <h2 className="csr-section-title" style={{ textAlign: 'center', marginTop: '48px', marginBottom: '24px' }}>
            {company.name} GenC Communication Assessment Do's & Don'ts
          </h2>

          <div className="csr-dos-donts-grid">
            <div className="csr-dos-card">
              <div className="csr-dos-icon">📖</div>
              <div className="csr-dos-title">Reading</div>

              <div className="csr-dos-section">
                <span>Do's</span>
                <ol className="csr-dos-list">
                  <li>Go through whole paragraph thoroughly.</li>
                  <li>Have a clear idea about each paragraph.</li>
                </ol>
              </div>

              <div className="csr-dos-section">
                <span>Don'ts</span>
                <ol className="csr-dos-list">
                  <li>Don't cling to difficult words for too long.</li>
                  <li>Don't be in hurry.</li>
                </ol>
              </div>
            </div>

            <div className="csr-dos-card">
              <div className="csr-dos-icon">🧑‍🏫</div>
              <div className="csr-dos-title">Grammar and Comprehension</div>

              <div className="csr-dos-section">
                <span>Do's</span>
                <ol className="csr-dos-list">
                  <li>Attempt Comprehension part carefully.</li>
                  <li>Have an idea of each comprehension.</li>
                </ol>
              </div>

              <div className="csr-dos-section">
                <span>Don'ts</span>
                <ol className="csr-dos-list">
                  <li>Distraction</li>
                  <li>Getting bored</li>
                </ol>
              </div>
            </div>

            <div className="csr-dos-card">
              <div className="csr-dos-icon">🗣️</div>
              <div className="csr-dos-title">Speaking and Listening</div>

              <div className="csr-dos-section">
                <span>Do's</span>
                <ol className="csr-dos-list">
                  <li>Pronounce well.</li>
                  <li>Listen carefully to attempt.</li>
                </ol>
              </div>

              <div className="csr-dos-section">
                <span>Don'ts</span>
                <ol className="csr-dos-list">
                  <li>Don't be in hurry.</li>
                  <li>Don't forget to use proper punctuation.</li>
                </ol>
              </div>
            </div>
          </div>

          <h2 className="csr-section-title" style={{ textAlign: 'center', marginTop: '48px', marginBottom: '24px' }}>
            {company.name} GenC Communication Assessment Test {currentYear}
          </h2>

          <h3 className="csr-red-heading">Reading</h3>
          <p className="csr-paragraph">This is the first section that appears in {company.name} GenC Communication Assessment exam.</p>
          <p className="csr-paragraph">There are few paragraphs in this section and students have to go through the whole paragraph and answer the questions accordingly.</p>
          <p className="csr-paragraph"><strong>Pattern:</strong></p>
          <p className="csr-paragraph">There will be multiple questions one after another, there will be timer in every question, once the time ends the AI will ask you questions and you have to mark the correct answer.</p>
          <p className="csr-paragraph"><strong>Point to remember:</strong></p>
          <ol className="csr-curr-list num-list">
            <li>Read the sentence/passage thoroughly.</li>
            <li>Do not stress out because of timer.</li>
            <li>Do not get confuse with tough words.</li>
            <li>Answer with proper grammar.</li>
          </ol>

          <h3 className="csr-red-heading">Grammar and Comprehension</h3>
          <p className="csr-paragraph">This is the second section of the {company.name} GenC Communication Assessment, and it requires strong attention to detail. In this section, students must attempt a short paragraph and answer questions that test their understanding of grammar and comprehension.</p>
          <p className="csr-paragraph"><strong>Pattern:</strong></p>
          <ul className="csr-curr-list bullet-list">
            <li>Attempt the passage, students must answer questions related to grammar, sentence structure, and comprehension.</li>
          </ul>
          <p className="csr-paragraph"><strong>Points to Remember:</strong></p>
          <ul className="csr-curr-list bullet-list">
            <li>Read attentively to the entire passage.</li>
            <li>Focus on key grammar rules, such as tense usage, sentence formation, and punctuation.</li>
            <li>Understand the context of the passage to answer comprehension questions correctly.</li>
            <li>Avoid distractions and stay focused throughout the passage.</li>
          </ul>

          <h3 className="csr-red-heading">Speaking and Listening</h3>
          <p className="csr-paragraph">This the final section of {company.name} GenC Communication Assessment {currentYear}, where you have to dictate a short essay or passage on provided topics.</p>
          <p className="csr-paragraph"><strong>Pattern:</strong></p>
          <p className="csr-paragraph">There will be a topic on the screen, you will get time to think about that topic and then you have to dictate the whole passage or story based on that topic.</p>
          <p className="csr-paragraph"><strong>Points to remember:</strong></p>
          <ol className="csr-curr-list num-list">
            <li>Use of proper punctuation.</li>
            <li>Use of proper grammar.</li>
            <li>Try not to stammer.</li>
            <li>Use complete sentences.</li>
            <li>Try not to complete sentence with question mark.</li>
          </ol>

          <div className="csr-faq">
            <h2 className="csr-section-title" style={{ textAlign: 'center', marginTop: '48px', marginBottom: '24px' }}>FAQ's</h2>

            <h4><u>IS THERE ANY NEGATIVE MARKING FOR THIS SECTION?</u></h4>
            <p>No, there will be no negative marking for {company.name} GenC Communication Assessment Test. You can attempt all the questions but you need to practice well for this round.</p>

            <h4><u>WHAT IS THE DIFFICULTY LEVEL OF THIS SECTION?</u></h4>
            <p>This year the difficulty is going to be moderate to high as now they are mostly AI based questions, in which students have to pay extra attention.</p>

            <h4><u>HOW TO ATTEMPT THIS SECTION?</u></h4>
            <p>As it will be an non-adaptive section we will advise to attempt wisely, because mostly there will be listening and speaking in which you have to answer in proper grammar, with punctuation. Also, you have to remember what you have read or listened to answer later. So paying attention is most important.</p>
          </div>
        </>
      ) : (
        <div className="csr-content-card" style={{ marginTop: '24px' }}>
          <h2 className="csr-section-title">{company.name} Communication Assessment</h2>
          <p className="csr-paragraph">Details for {company.name} Communication Assessment will be updated soon.</p>
        </div>
      )}
    </div>
  );
};

export default CommunicationAssessment;
