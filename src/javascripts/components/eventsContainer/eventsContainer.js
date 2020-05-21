
import firebase from 'firebase/app';
import 'firebase/auth';

import eventData from '../../helpers/data/eventData';
import eventCard from '../eventCard/eventCard';
import singleView from '../eventSingleView/eventSingleView';
import editEventForm from '../editEventForm/editEventForm';
import addEventModal from './eventModalForm/eventModalForm.js';
import smash from '../../helpers/data/smash';
// import charts from '../Charts/charts';

import utils from '../../helpers/utils';
import './eventsContainer.scss';

const editNewEvent = (e) => {
  e.preventDefault();
  const eventId = e.target.closest('.card').id;
  $('#modalEditEvent').modal('show');
  editEventForm.showEditEventForm(eventId);
};

const updateEvent = (e) => {
  e.preventDefault();
  const eventId = $('.edit-event-form-tag').data('id');
  const editedEvent = {
    name: $('#edit-event-name').val(),
    location: $('#edit-event-location').val(),
    timeStart: $('#edit-event-timeStart').val(),
    timeEnd: $('#edit-event-timeEnd').val(),
    date: $('#edit-event-date').val(),
    imageUrl: $('#edit-event-photo').val(),
    cost: $('#edit-event-cost').val() * 1,
    uid: utils.getMyUid(),
  };
  eventData.updateEvent(eventId, editedEvent)
    .then(() => {
      $('#modalEditEvent').modal('hide');
      // eslint-disable-next-line no-use-before-define
      buildAllEvents();
    })
    .catch((error) => console.error('could not update the event', error));
};

const makeNewEvent = (e) => {
  e.preventDefault();
  const newName = $('#event-Name').val();
  const newLocation = $('#event-location').val();
  const newImageUrl = $('#event-imageUrl').val();
  const newTimeStart = $('#event-timeStart').val();
  const newTimeEnd = $('#event-timeEnd').val();
  const newDate = $('#event-date').val();
  const creator = firebase.auth().currentUser.uid;
  const newEventData = {
    name: newName,
    location: newLocation,
    imageUrl: newImageUrl,
    timeStart: newTimeStart,
    timeEnd: newTimeEnd,
    date: newDate,
    uid: creator,
  };
  eventData.addEventData(newEventData)
    .then(() => {
      $('.modal-body input').val('');
      $('#modalAddEvent').modal('hide');
      // eslint-disable-next-line no-use-before-define
      buildAllEvents();
    })
    .catch((err) => console.error('could not add Data', err));
};
const buildAllEvents = () => {
  let domString = '';
  eventData.getEvents()
    .then((events) => {
      domString += '<div class="text-center" id="eventTitle">';
      domString += '<h2 class="mt-3">Events</h2>';
      domString += '<h3>Fun celebrations for the whole family!</h3>';
      domString += '<button class="btn btn-lg addEventBtn" id="addEventBtn"><i class="fas fa-plus"></i> Add a New Event</button>';
      domString += '</div>';
      domString += '<div class="container-fluid d-flex flex-wrap col-md-9 col-sm-10">';
      events.forEach((event) => {
        domString += eventCard.buildEventCard(event);
      });
      domString += '</div>';
      // domString += '<div id="chartdiv"></div>';
      utils.printToDom('events', domString);
      $('body').on('click', '.viewEventBtn', singleView.viewSingleEventCall);
      // Starter code for all events chart //
      // charts.buildChart();
    })
    .catch((error) => console.error('build all events has failed', error));
};

const removeEvent = (e) => {
  e.preventDefault();
  const eventId = e.target.closest('.card').id;
  smash.completelyRemoveEvent(eventId)
    .then(() => {
      buildAllEvents();
    })
    .catch((err) => console.error('could not delete complete event', err));
};

const eventActions = () => {
  $('body').on('click', '#deleteEventBtn', removeEvent);
  $('body').on('click', '#button-save-edit-event', updateEvent);
  $('body').on('click', '#editEventBtn', editNewEvent);
  $('body').on('click', '#button-save-event', makeNewEvent);
  $('body').on('click', '#addEventBtn', addEventModal.showEventModalForm);
};

export default { buildAllEvents, eventActions, editNewEvent };
