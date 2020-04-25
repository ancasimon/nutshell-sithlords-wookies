import './eventSingleView.scss';
import '../../../styles/main.scss';

import eventFoodSmash from '../../helpers/data/eventFoodSmash';

import utils from '../../helpers/utils';

const closeSingleEvent = () => {
  utils.printToDom('single-view-event', '');
  $('#foodCards').removeClass('hide');
  $('#souvenirs').removeClass('hide');
  $('#staff-collection').removeClass('hide');
  $('#shows').removeClass('hide');
  $('#events').removeClass('hide');
  $('#single-view-event').addClass('hide');
};

const eventFoodDetails = (singleEvent) => {
  let domString = '';
  domString += '<table class="table-responsive table-dark">';
  domString += '<thead>';
  domString += '<tr>';
  domString += '<th scope="col">Food Type</th>';
  domString += '<th scope="col">Price</th>';
  domString += '<th scope="col">Qty</th>';
  domString += '</tr>';
  domString += '</thead>';
  domString += '<tbody>';
  singleEvent.food.forEach((foodItem) => {
    domString += '<tr>';
    domString += `<th scope="row">${foodItem.type}</th>`;
    domString += `<td>$${foodItem.price}</>`;
    domString += `<td>${foodItem.quantity}</td>`;
    domString += '<td><button id="deleteEventFoodBtn" class="btn btn-default deleteEventBtn"><i class="far fa-trash-alt"></i></button></td>';
    domString += '</tr>';
  });
  domString += '</tbody>';
  domString += '</table>';

  return domString;
};

const viewSingleEvent = (eventId) => {
  eventFoodSmash.getSingleEventWithDetails(eventId)
    .then((singleEvent) => {
      console.error('SINGLE EVENT', singleEvent);
      let domString = '';
      domString += '<div class="singleEventTitle">';
      domString += `<h2>${singleEvent.name}</h2>`;
      domString += `<h5>${singleEvent.location}</h5>`;
      domString += `<h5>${singleEvent.date}</h5>`;
      domString += `<h5>${singleEvent.timeStart} - ${singleEvent.timeEnd}</h5>`;
      domString += '<button id="closeSingleEvent" class="btn btn-lg closeEventBtn"><i class="fas fa-times"></i> Close event details</button>';
      domString += '</div>';
      domString += '<div id="eventDetails" class="container-fluid d-flex flex-wrap">';
      domString += '<div id="eventFoodSection" class="quad col-md-4 col-sm-12">';
      domString += '<h4 class="eventSectionTitle">Food Details</h4>';
      domString += eventFoodDetails(singleEvent);
      domString += '</div>';
      domString += '<div id="eventSouvenirsSection" class="quad">';
      domString += '<h4 class="eventSectionTitle">Souvenirs Details</h4>';
      domString += '<p>DETAILS HERE!!!!</p>';
      domString += '</div>';
      domString += '<div id="eventStaffSection" class="quad">';
      domString += '<h4 class="eventSectionTitle">Staff Details</h4>';
      domString += '<p>DETAILS HERE!!!!</p>';
      domString += '</div>';
      domString += '<div id="eventShowsSection" class="quad">';
      domString += '<h4 class="eventSectionTitle">Shows Details</h4>';
      domString += '<p>DETAILS HERE!!!!</p>';
      domString += '</div>';
      domString += '</div>';
      utils.printToDom('single-view-event', domString);
      $('body').on('click', '#closeSingleEvent', closeSingleEvent);
      $('#foodCards').addClass('hide');
      $('#souvenirs').addClass('hide');
      $('#staff-collection').addClass('hide');
      $('#shows').addClass('hide');
      $('#events').addClass('hide');
      $('#single-view-event').removeClass('hide');
    })
    .catch((error) => console.error('problem with single event', error));
};

const viewSingleEventCall = (e) => {
  const eventId = e.target.closest('.card').id;
  viewSingleEvent(eventId);
};

export default { viewSingleEventCall };
