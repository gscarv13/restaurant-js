const renderFooter = () => {
  const footerContainer = document.createElement('footer');
  const paragraph = document.createElement('p');
  const link1 = document.createElement('a');
  const link2 = document.createElement('a');

  link1.href = 'https://unsplash.com/@lindsaymoe?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText';
  link1.textContent = 'Lindsay Moe';

  link2.href = 'https://unsplash.com/@lindsaymoe?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText';
  link2.textContent = 'Unsplash';

  paragraph.append('Photo by ', link1, ' on ', link2);
  footerContainer.appendChild(paragraph);
  return footerContainer;
};

export default renderFooter;