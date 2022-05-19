import '../../public/stylesheets/application.css';

export const Tag = ({
  text,
  active,
}) => {
  const tag = document.createElement('div');
  tag.innerText = text;
  const isActive = active ? '' : 'govuk-tag--grey';
  tag.className = ['govuk-tag', isActive].join(' ');

  return tag;
};
