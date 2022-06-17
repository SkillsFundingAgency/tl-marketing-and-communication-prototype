import '../../public/stylesheets/application.css';

export const Tag = ({
  text,
  state,
}) => {
  let tagState = '';
  switch (state) {
    case 'Beta':
      tagState = '';
      break;
    case 'Urgent':
      tagState = 'govuk-tag--red';
      break;
    case 'Active':
      tagState = 'govuk-tag--turquoise';
      break;
    case 'Inactive':
      tagState = 'govuk-tag--grey';
      break;
    case 'New':
      tagState = 'govuk-tag--green';
      break;
    case 'Pending':
      tagState = 'govuk-tag--blue';
      break;
    case 'Received':
      tagState = 'govuk-tag--purple';
      break;
    case 'Sent':
      tagState = 'govuk-tag--pink';
      break;
    case 'Rejected':
      tagState = 'govuk-tag--red';
      break;
    case 'Declined':
      tagState = 'govuk-tag--orange';
      break;
    case 'Delayed':
      tagState = 'govuk-tag--yellow';
      break;
    case 'Finished':
      tagState = 'govuk-tag--green';
      break;
    case 'Waiting On':
      tagState = 'govuk-tag--yellow';
      break;
    default:
      tagState = '';
  }
  const tag = document.createElement('div');
  tag.innerText = text;
  tag.className = ['govuk-tag', tagState].join(' ');
  return tag;
};
