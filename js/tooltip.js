let globalVocabTerms;

fetch('/data/vocab_terms.json')
  .then(response => response.json())
  .then(vocabTerms => {
    globalVocabTerms = vocabTerms
  })
  .catch(error => console.error('Error loading vocabulary terms:', error));

document.querySelectorAll('.vocab-term').forEach(term => {
    term.addEventListener('mouseenter', function() {
      const termName = this.getAttribute('data-term-id');
      console.log(termName);
      const definition = globalVocabTerms[termName];
      console.log(definition);
      const tooltip = document.createElement('div');
      tooltip.className = 'tooltip';
      tooltip.textContent = definition;
      this.appendChild(tooltip);
      tooltip.style.visibility = 'visible';
    });
  
    term.addEventListener('mouseleave', function() {
      this.removeChild(this.querySelector('.tooltip'));
    });
  });
  