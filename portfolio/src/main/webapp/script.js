// Copyright 2020 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * Adds a random fact about me to the page.
 */
function addRandomFact() {
  const facts =
      ['Favorite animal is the wolf', 'I have over 50+ videogames.', 'I would like to move to another country.', 'I want to learn how to speak Korean.', 'I would LOVE to own a Tibetan Mastiff. They are basically pokemon.','I have 7 siblings.', 'Sushi is my favorite food.', 'I enjoy watching anime.', 'Steven Universe and the Netflix She Ra had my emotions everywhere.','Cried HARD after watching Coco.',
       'I could watch The Prince of Egypt over and over again.', 'I prefer live-action plays/musicals over movies in general.', 'Want to desperately see Wicked in person.', 'Would like to own an island since that is just PEAK seclusion.', 'Cannot watch Tinkerbell and the Legend of the Neverbeast without bawling my eyes out.', 'Wonder how many unique facts you have seen so far. :)'];

  // Pick a random fact.
  const fact = facts[Math.floor(Math.random() * facts.length)];

  // Add it to the page.
  const factContainer = document.getElementById('fact-container');
  factContainer.innerText = fact;
}
function loadTasks() {
  fetch('/get-form').then(response => response.json()).then((tasks) => {
    const taskListElement = document.getElementById('task-list');
    tasks.forEach((task) => {
      taskListElement.appendChild(createTaskElement(task));
    })
  });
}

/** Creates an element that represents a task, including its delete button. */
function createTaskElement(task) {
  const taskElement = document.createElement('li');
  taskElement.className = 'task';

  const titleElement = document.createElement('span');
  titleElement.innerText = task.recommendation;

  const deleteButtonElement = document.createElement('button');
  deleteButtonElement.innerText = 'Delete';
  deleteButtonElement.addEventListener('click', () => {
    deleteTask(task);

    // Remove the task from the DOM.
    taskElement.remove();
  });

  taskElement.appendChild(titleElement);
  taskElement.appendChild(deleteButtonElement);
  return taskElement;
}

/** Tells the server to delete the task. */
function deleteTask(task) {
  const params = new URLSearchParams();
  params.append('id', task.id);
  fetch('/delete-rec', {method: 'POST', body: params});
}
/* <---SPS fetch HelloWorldServlet Tutorial--->
async function showHello() {
  const responseFromServer = await fetch('/hello');
  const textFromResponse = await responseFromServer.text();

  const helloContainer = document.getElementById('hello-container');
  helloContainer.innerText = textFromResponse;
}*/

async function showMusicTaste() {
    const serverRequest = await fetch("/music");
    const messageFromServer = await serverRequest.json();

    const musicContainer = document.getElementById("music-container");
    const musicNum = messageFromServer.length;
    const random = Math.floor(Math.random()* musicNum);
    musicContainer.innerText = messageFromServer[random];
}
