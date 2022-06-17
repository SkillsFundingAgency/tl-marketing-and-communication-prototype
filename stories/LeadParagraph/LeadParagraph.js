import '../../public/stylesheets/application.css';

export const LeadParagraph = ({
  text,
}) => {
  const paragraph = document.createElement('p');
  paragraph.innerText = text;
  paragraph.className = ['govuk-body-lead'].join(' ');

  return paragraph;
};
