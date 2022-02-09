$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("uni/fmi/task/Task.feature");
formatter.feature({
  "line": 1,
  "name": "Работа със задачи",
  "description": "",
  "id": "работа-със-задачи",
  "keyword": "Feature"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "Потребителят отваря екрана за работа със задача",
  "keyword": "Given "
});
formatter.match({
  "location": "TaskSteps.openTaskScreen()"
});
formatter.result({
  "duration": 194012000,
  "status": "passed"
});
formatter.scenario({
  "line": 7,
  "name": "Създаване на задача",
  "description": "",
  "id": "работа-със-задачи;създаване-на-задача",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 8,
  "name": "Въведе име на задача",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "въведе статус",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "натисне бутона за създаване на задача",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Вижда съобщение: \"Успешно създаване на задача!\"",
  "keyword": "Then "
});
formatter.match({
  "location": "TaskSteps.insertTaskName()"
});
formatter.result({
  "duration": 79300,
  "status": "passed"
});
formatter.match({
  "location": "TaskSteps.insertStatus()"
});
formatter.result({
  "duration": 69900,
  "status": "passed"
});
formatter.match({
  "location": "TaskSteps.clickInsertTaskButton()"
});
formatter.result({
  "duration": 708000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Успешно създаване на задача!",
      "offset": 18
    }
  ],
  "location": "TaskSteps.checkMessage(String)"
});
formatter.result({
  "duration": 3784101,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "Потребителят отваря екрана за работа със задача",
  "keyword": "Given "
});
formatter.match({
  "location": "TaskSteps.openTaskScreen()"
});
formatter.result({
  "duration": 126501,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Създаване на подзадача",
  "description": "",
  "id": "работа-със-задачи;създаване-на-подзадача",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 14,
  "name": "Въведе име на подзадача",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "въведе статус",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "натисне бутона за създаване на подзадача",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "Вижда съобщение: \"Успешно създаване на задача!\"",
  "keyword": "Then "
});
formatter.match({
  "location": "TaskSteps.insertSmallerTaskName()"
});
formatter.result({
  "duration": 67100,
  "status": "passed"
});
formatter.match({
  "location": "TaskSteps.insertStatus()"
});
formatter.result({
  "duration": 51901,
  "status": "passed"
});
formatter.match({
  "location": "TaskSteps.clickInsertSmallerTaskButton()"
});
formatter.result({
  "duration": 68700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Успешно създаване на задача!",
      "offset": 18
    }
  ],
  "location": "TaskSteps.checkMessage(String)"
});
formatter.result({
  "duration": 106299,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "Потребителят отваря екрана за работа със задача",
  "keyword": "Given "
});
formatter.match({
  "location": "TaskSteps.openTaskScreen()"
});
formatter.result({
  "duration": 123800,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "Създаване на подзадача с невалиден статус",
  "description": "",
  "id": "работа-със-задачи;създаване-на-подзадача-с-невалиден-статус",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 20,
  "name": "Въведе име на задача",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "въведе невалиден статус",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "натисне бутона за създаване на задача",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "Вижда съобщение: \"Въведете валиден статус!\"",
  "keyword": "Then "
});
formatter.match({
  "location": "TaskSteps.insertTaskName()"
});
formatter.result({
  "duration": 42599,
  "status": "passed"
});
formatter.match({
  "location": "TaskSteps.insertInvalidStatus()"
});
formatter.result({
  "duration": 69300,
  "status": "passed"
});
formatter.match({
  "location": "TaskSteps.clickInsertTaskButton()"
});
formatter.result({
  "duration": 63100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Въведете валиден статус!",
      "offset": 18
    }
  ],
  "location": "TaskSteps.checkMessage(String)"
});
formatter.result({
  "duration": 97600,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "Потребителят отваря екрана за работа със задача",
  "keyword": "Given "
});
formatter.match({
  "location": "TaskSteps.openTaskScreen()"
});
formatter.result({
  "duration": 119600,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "Започване на работа по задача",
  "description": "",
  "id": "работа-със-задачи;започване-на-работа-по-задача",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 26,
  "name": "Въведе име на задача",
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "въведе валидно име на разработчик",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "натисне бутона за започване на работа по задача",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "Вижда съобщение: \"Успешно започване на работа по задача!\"",
  "keyword": "Then "
});
formatter.match({
  "location": "TaskSteps.insertTaskName()"
});
formatter.result({
  "duration": 41799,
  "status": "passed"
});
formatter.match({
  "location": "TaskSteps.insertDeveloperName()"
});
formatter.result({
  "duration": 68000,
  "status": "passed"
});
formatter.match({
  "location": "TaskSteps.clickStartTaskButton()"
});
formatter.result({
  "duration": 2902300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Успешно започване на работа по задача!",
      "offset": 18
    }
  ],
  "location": "TaskSteps.checkMessage(String)"
});
formatter.result({
  "duration": 91101,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "Потребителят отваря екрана за работа със задача",
  "keyword": "Given "
});
formatter.match({
  "location": "TaskSteps.openTaskScreen()"
});
formatter.result({
  "duration": 115399,
  "status": "passed"
});
formatter.scenario({
  "line": 31,
  "name": "Започване на работа по задача с невалидно име на разработчик",
  "description": "",
  "id": "работа-със-задачи;започване-на-работа-по-задача-с-невалидно-име-на-разработчик",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 32,
  "name": "Въведе име на задача",
  "keyword": "When "
});
formatter.step({
  "line": 33,
  "name": "въведе невалидно име на разработчик",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "натисне бутона за започване на работа по задача",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "Вижда съобщение: \"Въведете валидно име на разработчик!\"",
  "keyword": "Then "
});
formatter.match({
  "location": "TaskSteps.insertTaskName()"
});
formatter.result({
  "duration": 70201,
  "status": "passed"
});
formatter.match({
  "location": "TaskSteps.insertInvalidDeveloperName()"
});
formatter.result({
  "duration": 79700,
  "status": "passed"
});
formatter.match({
  "location": "TaskSteps.clickStartTaskButton()"
});
formatter.result({
  "duration": 89000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Въведете валидно име на разработчик!",
      "offset": 18
    }
  ],
  "location": "TaskSteps.checkMessage(String)"
});
formatter.result({
  "duration": 93199,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "Потребителят отваря екрана за работа със задача",
  "keyword": "Given "
});
formatter.match({
  "location": "TaskSteps.openTaskScreen()"
});
formatter.result({
  "duration": 123100,
  "status": "passed"
});
formatter.scenario({
  "line": 37,
  "name": "Смяна на статус на задача",
  "description": "",
  "id": "работа-със-задачи;смяна-на-статус-на-задача",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 38,
  "name": "Въведе име на задача",
  "keyword": "When "
});
formatter.step({
  "line": 39,
  "name": "въведе статус",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "натисне бутона за промяна на статус на задача",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "Вижда съобщение: \"Успешно променихте статуса на задачата!\"",
  "keyword": "Then "
});
formatter.match({
  "location": "TaskSteps.insertTaskName()"
});
formatter.result({
  "duration": 41899,
  "status": "passed"
});
formatter.match({
  "location": "TaskSteps.insertStatus()"
});
formatter.result({
  "duration": 42801,
  "status": "passed"
});
formatter.match({
  "location": "TaskSteps.clickChangeStatusButton()"
});
formatter.result({
  "duration": 71400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Успешно променихте статуса на задачата!",
      "offset": 18
    }
  ],
  "location": "TaskSteps.checkMessage(String)"
});
formatter.result({
  "duration": 93700,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "Потребителят отваря екрана за работа със задача",
  "keyword": "Given "
});
formatter.match({
  "location": "TaskSteps.openTaskScreen()"
});
formatter.result({
  "duration": 154700,
  "status": "passed"
});
formatter.scenario({
  "line": 43,
  "name": "Смяна на статус на завършена задача",
  "description": "",
  "id": "работа-със-задачи;смяна-на-статус-на-завършена-задача",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 44,
  "name": "Въведе име на задача",
  "keyword": "When "
});
formatter.step({
  "line": 45,
  "name": "въведе статус на завършена задача",
  "keyword": "And "
});
formatter.step({
  "line": 46,
  "name": "натисне бутона за промяна на статус на задача",
  "keyword": "And "
});
formatter.step({
  "line": 47,
  "name": "Вижда съобщение: \"Статусът на завършена задача не може да бъде сменен!\"",
  "keyword": "Then "
});
formatter.match({
  "location": "TaskSteps.insertTaskName()"
});
formatter.result({
  "duration": 45599,
  "status": "passed"
});
formatter.match({
  "location": "TaskSteps.changeStatusToFinishedTask()"
});
formatter.result({
  "duration": 60099,
  "status": "passed"
});
formatter.match({
  "location": "TaskSteps.clickChangeStatusButton()"
});
formatter.result({
  "duration": 48299,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Статусът на завършена задача не може да бъде сменен!",
      "offset": 18
    }
  ],
  "location": "TaskSteps.checkMessage(String)"
});
formatter.result({
  "duration": 103300,
  "status": "passed"
});
});