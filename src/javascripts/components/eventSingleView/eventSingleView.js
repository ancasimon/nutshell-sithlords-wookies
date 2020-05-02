import eventFoodData from '../../helpers/data/eventFoodData';
import eventFoodDetails from './eventFoodDetails';
import eventStaffData from '../../helpers/data/eventStaffData';
import eventStaffDetails from './eventStaffDetails';
import eventShowData from '../../helpers/data/eventShowData';
import eventAnimalData from '../../helpers/data/eventAnimalData';
import eventAnimalDetails from './eventAnimalDetails';
import eventSouvenirDetails from './eventSouvenirDetails';
import eventSouvenirData from '../../helpers/data/eventSouvenirData';
import smashData from '../../helpers/data/smash';
import singleEventCharts from '../singleEventCharts/singleEventCharts';
import utils from '../../helpers/utils';

import showDetails from './eventShowDetails';

import './eventSingleView.scss';
import '../../../styles/main.scss';


const closeSingleEvent = () => {
  utils.printToDom('single-view-event', '');
  $('#foodCards').removeClass('hide');
  $('#souvenirs').removeClass('hide');
  $('#staff-collection').removeClass('hide');
  $('#shows').removeClass('hide');
  $('#events').removeClass('hide');
  $('#single-view-event').addClass('hide');
  $('#animals').removeClass('hide');
};

const removeEventFood = (e) => {
  const eventFoodId = e.target.closest('button').dataset.id;
  const eventId = $('.foodRow').data('container');
  eventFoodData.getSingleEventFood(eventFoodId)
    .then(() => {
      eventFoodData.deleteEventFood(eventFoodId)
        .then(() => {
          // eslint-disable-next-line no-use-before-define
          viewSingleEvent(eventId);
        });
    })
    .catch((error) => console.error('could not delete food item from event', error));
};

const removeEventShow = (e) => {
  e.preventDefault();
  const eventShowId = e.target.closest('button').id;
  const eventId = e.target.closest('.showRow').id;
  eventShowData.getSingleEventShow(eventShowId)
    .then(() => {
      eventShowData.deleteEventShow(eventShowId)
        .then(() => {
          // eslint-disable-next-line no-use-before-define
          viewSingleEvent(eventId);
        });
    })
    .catch((error) => console.error('could not delete show from event', error));
};

const removeEventStaff = (e) => {
  e.preventDefault();
  const eventStaffId = e.target.closest('button').id;
  const eventId = e.target.closest('.staffRow').id;
  eventStaffData.getSingleEventStaff(eventStaffId)
    .then(() => {
      eventStaffData.deleteEventStaff(eventStaffId)
        .then(() => {
          // eslint-disable-next-line no-use-before-define
          viewSingleEvent(eventId);
        });
    })
    .catch((error) => console.error('could not delete staff member from event', error));
};

const removeEventAnimal = (e) => {
  e.preventDefault();
  const eventAnimalId = e.target.closest('button').id;
  // console.log('INSIDE FUNCTION RESULT EVENT ANIMAL', eventAnimalId);
  const eventId = e.target.closest('.animalRow').id;
  // console.log('INSIDE FUNCTION EVENT ID', eventId);
  eventAnimalData.getSingleEventAnimal(eventAnimalId)
    .then(() => {
      eventAnimalData.deleteEventAnimal(eventAnimalId)
        .then(() => {
          // eslint-disable-next-line no-use-before-define
          viewSingleEvent(eventId);
        });
    })
    .catch((error) => console.error('could not delete animal item from event', error));
};

const removeEventSouvenir = (e) => {
  e.preventDefault();
  const eventSouvenirId = e.target.closest('button').id;
  const eventId = e.target.closest('.souvenirRow').id;
  eventSouvenirData.getSingleEventSouvenir(eventSouvenirId)
    .then(() => {
      eventSouvenirData.deleteEventSouvenir(eventSouvenirId)
        .then(() => {
          // eslint-disable-next-line no-use-before-define
          viewSingleEvent(eventId);
        });
    })
    .catch((error) => console.error('could not delete souvenir item from event', error));
};

const viewSingleEvent = (eventId) => {
  smashData.getCompleteEvent(eventId)
    .then((singleEvent) => {
      let domString = '';
      domString += '<div class="singleEventTitle">';
      domString += `<h2>${singleEvent.name}</h2>`;
      domString += `<h5>${singleEvent.location}</h5>`;
      domString += `<h5>${singleEvent.date}</h5>`;
      domString += `<h5>${singleEvent.timeStart} - ${singleEvent.timeEnd}</h5>`;
      domString += '<button id="closeSingleEvent" class="btn btn-lg closeEventBtn"><i class="fas fa-times"></i> Close event details</button>';
      domString += '</div>';
      domString += '<div id="eventDetails" class="container-fluid d-flex flex-wrap">';
      domString += eventFoodDetails.getEventFoodDetails(singleEvent);
      domString += eventSouvenirDetails.getEventSouvenirDetails(singleEvent);
      domString += '<div id="eventStaffSection" class="quad col-md-4 col-sm-12">';
      domString += '<h4 class="eventSectionTitle">Staff Details</h4>';
      domString += eventStaffDetails.getEventStaffDetails(singleEvent);
      domString += '<div id="eventShowsSection" class="quad col-md-4 col-sm-12">';
      domString += '<h4 class="eventSectionTitle">Shows Details</h4>';
      domString += showDetails.eventShowDetails(singleEvent);
      domString += '</div>';
      domString += '<div id="eventAnimalsSection" class="quad col-md-4 col-sm-12">';
      domString += '<h4 class="eventSectionTitle">Animal Encounter Details</h4>';
      domString += eventAnimalDetails.getEventAnimalDetails(singleEvent);
      domString += '</div>';
      domString += '</div>';
      domString += '<div id="chartDiv"></div>';
      utils.printToDom('single-view-event', domString);
      singleEventCharts.buildSingleEventChart();
      $('body').on('click', '#closeSingleEvent', closeSingleEvent);
      $('body').on('click', '.deleteEventFoodBtn', removeEventFood);
      $('body').on('click', '.deleteEventStaffBtn', removeEventStaff);
      $('body').on('click', '.deleteEventShowBtn', removeEventShow);
      $('body').on('click', '.deleteEventanimalBtn', removeEventAnimal);
      $('body').on('click', '.deleteEventSouvenirBtn', removeEventSouvenir);
      $('#foodCards').addClass('hide');
      $('#souvenirs').addClass('hide');
      $('#staff-collection').addClass('hide');
      $('#shows').addClass('hide');
      $('#events').addClass('hide');
      $('#animals').addClass('hide');
      $('#single-view-event').removeClass('hide');
    })
    .catch((error) => console.error('problem with single event', error));
};

const viewSingleEventCall = (e) => {
  const eventId = e.target.dataset.id;
  viewSingleEvent(eventId);
};

export default { viewSingleEventCall, removeEventAnimal };
