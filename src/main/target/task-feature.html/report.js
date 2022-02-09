$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("uni/fmi/task/Task.feature");
formatter.feature({
  "line": 1,
  "name": "Работа със задачи",
  "description": "",
  "id": "работа-със-задачи",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 7,
  "name": "Създаване на задача",
  "description": "",
  "id": "работа-със-задачи;създаване-на-задача",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 8,
  "name": "Въведе \u003cиме\u003e на име",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "въведе \u003cстатус\u003e на статус на задача",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "натисне бутона за създаване на задача",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Вижда съобщение: \u003cсъобщение\u003e",
  "keyword": "Then "
});
formatter.examples({
  "line": 13,
  "name": "",
  "description": "",
  "id": "работа-със-задачи;създаване-на-задача;",
  "rows": [
    {
      "cells": [
        "име",
        "статус",
        "съобщение"
      ],
      "line": 14,
      "id": "работа-със-задачи;създаване-на-задача;;1"
    },
    {
      "cells": [
        "задача1",
        "нова",
        "Успешно създаване на задача!"
      ],
      "line": 15,
      "id": "работа-със-задачи;създаване-на-задача;;2"
    },
    {
      "cells": [
        "задача2",
        "нова",
        "Успешно създаване на задача!"
      ],
      "line": 16,
      "id": "работа-със-задачи;създаване-на-задача;;3"
    },
    {
      "cells": [
        "задача3",
        "нова",
        "Успешно създаване на задача!"
      ],
      "line": 17,
      "id": "работа-със-задачи;създаване-на-задача;;4"
    }
  ],
  "keyword": "Examples"
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
  "duration": 178273400,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Създаване на задача",
  "description": "",
  "id": "работа-със-задачи;създаване-на-задача;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 8,
  "name": "Въведе задача1 на име",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "въведе нова на статус на задача",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "натисне бутона за създаване на задача",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Вижда съобщение: Успешно създаване на задача!",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 13
    }
  ],
  "location": "TaskSteps.insertTaskName1(int)"
});
formatter.result({
  "duration": 2395900,
  "status": "passed"
});
formatter.match({
  "location": "TaskSteps.changeStatusToFinishedTask2()"
});
formatter.result({
  "duration": 61500,
  "status": "passed"
});
formatter.match({
  "location": "TaskSteps.clickInsertTaskButton()"
});
formatter.result({
  "duration": 803100,
  "status": "passed"
});
formatter.match({
  "location": "TaskSteps.checkSuccessMessage()"
});
formatter.result({
  "duration": 1565599,
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
  "duration": 117400,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Създаване на задача",
  "description": "",
  "id": "работа-със-задачи;създаване-на-задача;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 8,
  "name": "Въведе задача2 на име",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "въведе нова на статус на задача",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "натисне бутона за създаване на задача",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Вижда съобщение: Успешно създаване на задача!",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 13
    }
  ],
  "location": "TaskSteps.insertTaskName1(int)"
});
formatter.result({
  "duration": 92300,
  "status": "passed"
});
formatter.match({
  "location": "TaskSteps.changeStatusToFinishedTask2()"
});
formatter.result({
  "duration": 22701,
  "status": "passed"
});
formatter.match({
  "location": "TaskSteps.clickInsertTaskButton()"
});
formatter.result({
  "duration": 27301,
  "status": "passed"
});
formatter.match({
  "location": "TaskSteps.checkSuccessMessage()"
});
formatter.result({
  "duration": 25100,
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
  "duration": 69499,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Създаване на задача",
  "description": "",
  "id": "работа-със-задачи;създаване-на-задача;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 8,
  "name": "Въведе задача3 на име",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "въведе нова на статус на задача",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "натисне бутона за създаване на задача",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Вижда съобщение: Успешно създаване на задача!",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 13
    }
  ],
  "location": "TaskSteps.insertTaskName1(int)"
});
formatter.result({
  "duration": 86399,
  "status": "passed"
});
formatter.match({
  "location": "TaskSteps.changeStatusToFinishedTask2()"
});
formatter.result({
  "duration": 23000,
  "status": "passed"
});
formatter.match({
  "location": "TaskSteps.clickInsertTaskButton()"
});
formatter.result({
  "duration": 21600,
  "status": "passed"
});
formatter.match({
  "location": "TaskSteps.checkSuccessMessage()"
});
formatter.result({
  "duration": 19201,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 20,
  "name": "Създаване на подзадача",
  "description": "",
  "id": "работа-със-задачи;създаване-на-подзадача",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 21,
  "name": "Въведе \u003cиме\u003e на име",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "въведе \u003cстатус\u003e на статус на задача",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "натисне бутона за създаване на подзадача",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "Вижда съобщение: \u003cсъобщение\u003e",
  "keyword": "Then "
});
formatter.examples({
  "line": 26,
  "name": "",
  "description": "",
  "id": "работа-със-задачи;създаване-на-подзадача;",
  "rows": [
    {
      "cells": [
        "име",
        "статус",
        "съобщение"
      ],
      "line": 27,
      "id": "работа-със-задачи;създаване-на-подзадача;;1"
    },
    {
      "cells": [
        "подзадача1",
        "нова",
        "Успешно създаване на задача!"
      ],
      "line": 28,
      "id": "работа-със-задачи;създаване-на-подзадача;;2"
    },
    {
      "cells": [
        "подзадача2",
        "нова",
        "Успешно създаване на задача!"
      ],
      "line": 29,
      "id": "работа-със-задачи;създаване-на-подзадача;;3"
    },
    {
      "cells": [
        "подзадача3",
        "нова",
        "Успешно създаване на задача!"
      ],
      "line": 30,
      "id": "работа-със-задачи;създаване-на-подзадача;;4"
    }
  ],
  "keyword": "Examples"
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
  "duration": 103801,
  "status": "passed"
});
formatter.scenario({
  "line": 28,
  "name": "Създаване на подзадача",
  "description": "",
  "id": "работа-със-задачи;създаване-на-подзадача;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 21,
  "name": "Въведе подзадача1 на име",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "въведе нова на статус на задача",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "натисне бутона за създаване на подзадача",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "Вижда съобщение: Успешно създаване на задача!",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 16
    }
  ],
  "location": "TaskSteps.insertSmallTaskName(int)"
});
formatter.result({
  "duration": 112301,
  "status": "passed"
});
formatter.match({
  "location": "TaskSteps.changeStatusToFinishedTask2()"
});
formatter.result({
  "duration": 22200,
  "status": "passed"
});
formatter.match({
  "location": "TaskSteps.clickInsertSmallerTaskButton()"
});
formatter.result({
  "duration": 30000,
  "status": "passed"
});
formatter.match({
  "location": "TaskSteps.checkSuccessMessage()"
});
formatter.result({
  "duration": 22200,
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
  "duration": 108201,
  "status": "passed"
});
formatter.scenario({
  "line": 29,
  "name": "Създаване на подзадача",
  "description": "",
  "id": "работа-със-задачи;създаване-на-подзадача;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 21,
  "name": "Въведе подзадача2 на име",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "въведе нова на статус на задача",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "натисне бутона за създаване на подзадача",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "Вижда съобщение: Успешно създаване на задача!",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 16
    }
  ],
  "location": "TaskSteps.insertSmallTaskName(int)"
});
formatter.result({
  "duration": 121701,
  "status": "passed"
});
formatter.match({
  "location": "TaskSteps.changeStatusToFinishedTask2()"
});
formatter.result({
  "duration": 28000,
  "status": "passed"
});
formatter.match({
  "location": "TaskSteps.clickInsertSmallerTaskButton()"
});
formatter.result({
  "duration": 29501,
  "status": "passed"
});
formatter.match({
  "location": "TaskSteps.checkSuccessMessage()"
});
formatter.result({
  "duration": 24200,
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
  "duration": 105100,
  "status": "passed"
});
formatter.scenario({
  "line": 30,
  "name": "Създаване на подзадача",
  "description": "",
  "id": "работа-със-задачи;създаване-на-подзадача;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 21,
  "name": "Въведе подзадача3 на име",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "въведе нова на статус на задача",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "натисне бутона за създаване на подзадача",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "Вижда съобщение: Успешно създаване на задача!",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 16
    }
  ],
  "location": "TaskSteps.insertSmallTaskName(int)"
});
formatter.result({
  "duration": 121301,
  "status": "passed"
});
formatter.match({
  "location": "TaskSteps.changeStatusToFinishedTask2()"
});
formatter.result({
  "duration": 33700,
  "status": "passed"
});
formatter.match({
  "location": "TaskSteps.clickInsertSmallerTaskButton()"
});
formatter.result({
  "duration": 53801,
  "status": "passed"
});
formatter.match({
  "location": "TaskSteps.checkSuccessMessage()"
});
formatter.result({
  "duration": 23400,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 34,
  "name": "Смяна на статус на завършена задача",
  "description": "",
  "id": "работа-със-задачи;смяна-на-статус-на-завършена-задача",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 35,
  "name": "Въведе \u003cиме\u003e на име",
  "keyword": "When "
});
formatter.step({
  "line": 36,
  "name": "въведе \u003cстатус\u003e на статус на задача",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "натисне бутона за създаване на задача",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "Вижда съобщение: \u003cсъобщение\u003e",
  "keyword": "Then "
});
formatter.examples({
  "line": 40,
  "name": "",
  "description": "",
  "id": "работа-със-задачи;смяна-на-статус-на-завършена-задача;",
  "rows": [
    {
      "cells": [
        "име",
        "статус",
        "съобщение"
      ],
      "line": 41,
      "id": "работа-със-задачи;смяна-на-статус-на-завършена-задача;;1"
    },
    {
      "cells": [
        "задача1",
        "стат1",
        "Въведете валиден статус!"
      ],
      "line": 42,
      "id": "работа-със-задачи;смяна-на-статус-на-завършена-задача;;2"
    },
    {
      "cells": [
        "задача2",
        "стат2",
        "Въведете валиден статус!"
      ],
      "line": 43,
      "id": "работа-със-задачи;смяна-на-статус-на-завършена-задача;;3"
    }
  ],
  "keyword": "Examples"
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
  "duration": 126900,
  "status": "passed"
});
formatter.scenario({
  "line": 42,
  "name": "Смяна на статус на завършена задача",
  "description": "",
  "id": "работа-със-задачи;смяна-на-статус-на-завършена-задача;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 35,
  "name": "Въведе задача1 на име",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 36,
  "name": "въведе стат1 на статус на задача",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "натисне бутона за създаване на задача",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "Вижда съобщение: Въведете валиден статус!",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 13
    }
  ],
  "location": "TaskSteps.insertTaskName1(int)"
});
formatter.result({
  "duration": 181400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 11
    }
  ],
  "location": "TaskSteps.insertInvalidStatus1(int)"
});
formatter.result({
  "duration": 118800,
  "status": "passed"
});
formatter.match({
  "location": "TaskSteps.clickInsertTaskButton()"
});
formatter.result({
  "duration": 29000,
  "status": "passed"
});
formatter.match({
  "location": "TaskSteps.checkStatMessage()"
});
formatter.result({
  "duration": 64499,
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
  "duration": 120500,
  "status": "passed"
});
formatter.scenario({
  "line": 43,
  "name": "Смяна на статус на завършена задача",
  "description": "",
  "id": "работа-със-задачи;смяна-на-статус-на-завършена-задача;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 35,
  "name": "Въведе задача2 на име",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 36,
  "name": "въведе стат2 на статус на задача",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "натисне бутона за създаване на задача",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "Вижда съобщение: Въведете валиден статус!",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 13
    }
  ],
  "location": "TaskSteps.insertTaskName1(int)"
});
formatter.result({
  "duration": 145400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 11
    }
  ],
  "location": "TaskSteps.insertInvalidStatus1(int)"
});
formatter.result({
  "duration": 117901,
  "status": "passed"
});
formatter.match({
  "location": "TaskSteps.clickInsertTaskButton()"
});
formatter.result({
  "duration": 28501,
  "status": "passed"
});
formatter.match({
  "location": "TaskSteps.checkStatMessage()"
});
formatter.result({
  "duration": 31800,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 46,
  "name": "Започване на работа по задача",
  "description": "",
  "id": "работа-със-задачи;започване-на-работа-по-задача",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 47,
  "name": "Въведе \u003cзадача\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 48,
  "name": "въведе \u003cиме\u003e на разработчик",
  "keyword": "And "
});
formatter.step({
  "line": 49,
  "name": "натисне бутона за започване на работа по задача",
  "keyword": "And "
});
formatter.step({
  "line": 50,
  "name": "Вижда съобщение: \u003cсъобщение\u003e",
  "keyword": "Then "
});
formatter.examples({
  "line": 52,
  "name": "",
  "description": "",
  "id": "работа-със-задачи;започване-на-работа-по-задача;",
  "rows": [
    {
      "cells": [
        "задача",
        "име",
        "съобщение"
      ],
      "line": 53,
      "id": "работа-със-задачи;започване-на-работа-по-задача;;1"
    },
    {
      "cells": [
        "задача1",
        "Станислав Иванов",
        "Успешно започване на работа по задача!"
      ],
      "line": 54,
      "id": "работа-със-задачи;започване-на-работа-по-задача;;2"
    }
  ],
  "keyword": "Examples"
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
  "duration": 76600,
  "status": "passed"
});
formatter.scenario({
  "line": 54,
  "name": "Започване на работа по задача",
  "description": "",
  "id": "работа-със-задачи;започване-на-работа-по-задача;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 47,
  "name": "Въведе задача1",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 48,
  "name": "въведе Станислав Иванов на разработчик",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 49,
  "name": "натисне бутона за започване на работа по задача",
  "keyword": "And "
});
formatter.step({
  "line": 50,
  "name": "Вижда съобщение: Успешно започване на работа по задача!",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 13
    }
  ],
  "location": "TaskSteps.insertTaskName(int)"
});
formatter.result({
  "duration": 112099,
  "status": "passed"
});
formatter.match({
  "location": "TaskSteps.insertDeveloperName1()"
});
formatter.result({
  "duration": 37800,
  "status": "passed"
});
formatter.match({
  "location": "TaskSteps.clickStartTaskButton()"
});
formatter.result({
  "duration": 1792100,
  "status": "passed"
});
formatter.match({
  "location": "TaskSteps.checkStartMessage()"
});
formatter.result({
  "duration": 47901,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 59,
  "name": "Започване на работа по задача с невалидно име на разработчик",
  "description": "",
  "id": "работа-със-задачи;започване-на-работа-по-задача-с-невалидно-име-на-разработчик",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 60,
  "name": "Въведе \u003cзадача\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 61,
  "name": "въведе \u003cиме\u003e на разработчик",
  "keyword": "And "
});
formatter.step({
  "line": 62,
  "name": "натисне бутона за започване на работа по задача",
  "keyword": "And "
});
formatter.step({
  "line": 63,
  "name": "Вижда съобщение: \u003cсъобщение\u003e",
  "keyword": "Then "
});
formatter.examples({
  "line": 65,
  "name": "",
  "description": "",
  "id": "работа-със-задачи;започване-на-работа-по-задача-с-невалидно-име-на-разработчик;",
  "rows": [
    {
      "cells": [
        "задача",
        "име",
        "съобщение"
      ],
      "line": 66,
      "id": "работа-със-задачи;започване-на-работа-по-задача-с-невалидно-име-на-разработчик;;1"
    },
    {
      "cells": [
        "задача1",
        "Димитър Иванов",
        "Въведете валидно име на разработчик!"
      ],
      "line": 67,
      "id": "работа-със-задачи;започване-на-работа-по-задача-с-невалидно-име-на-разработчик;;2"
    }
  ],
  "keyword": "Examples"
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
  "duration": 66400,
  "status": "passed"
});
formatter.scenario({
  "line": 67,
  "name": "Започване на работа по задача с невалидно име на разработчик",
  "description": "",
  "id": "работа-със-задачи;започване-на-работа-по-задача-с-невалидно-име-на-разработчик;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 60,
  "name": "Въведе задача1",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 61,
  "name": "въведе Димитър Иванов на разработчик",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 62,
  "name": "натисне бутона за започване на работа по задача",
  "keyword": "And "
});
formatter.step({
  "line": 63,
  "name": "Вижда съобщение: Въведете валидно име на разработчик!",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 13
    }
  ],
  "location": "TaskSteps.insertTaskName(int)"
});
formatter.result({
  "duration": 92200,
  "status": "passed"
});
formatter.match({
  "location": "TaskSteps.insertDeveloperName2()"
});
formatter.result({
  "duration": 42799,
  "status": "passed"
});
formatter.match({
  "location": "TaskSteps.clickStartTaskButton()"
});
formatter.result({
  "duration": 43099,
  "status": "passed"
});
formatter.match({
  "location": "TaskSteps.checkStartErrorMessage()"
});
formatter.result({
  "duration": 26600,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 70,
  "name": "Смяна на статус на задача",
  "description": "",
  "id": "работа-със-задачи;смяна-на-статус-на-задача",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 71,
  "name": "Въведе \u003cиме\u003e на име",
  "keyword": "When "
});
formatter.step({
  "line": 72,
  "name": "въведе \u003cстатус\u003e на статус на задача",
  "keyword": "And "
});
formatter.step({
  "line": 73,
  "name": "натисне бутона за промяна на статус на задача",
  "keyword": "And "
});
formatter.step({
  "line": 74,
  "name": "Вижда съобщение: \u003cсъобщение\u003e",
  "keyword": "Then "
});
formatter.examples({
  "line": 76,
  "name": "",
  "description": "",
  "id": "работа-със-задачи;смяна-на-статус-на-задача;",
  "rows": [
    {
      "cells": [
        "име",
        "статус",
        "съобщение"
      ],
      "line": 77,
      "id": "работа-със-задачи;смяна-на-статус-на-задача;;1"
    },
    {
      "cells": [
        "задача5",
        "в процес на разработка",
        "Успешно променихте статуса на задачата!"
      ],
      "line": 78,
      "id": "работа-със-задачи;смяна-на-статус-на-задача;;2"
    },
    {
      "cells": [
        "задача87",
        "в процес на разработка",
        "Успешно променихте статуса на задачата!"
      ],
      "line": 79,
      "id": "работа-със-задачи;смяна-на-статус-на-задача;;3"
    }
  ],
  "keyword": "Examples"
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
  "duration": 89699,
  "status": "passed"
});
formatter.scenario({
  "line": 78,
  "name": "Смяна на статус на задача",
  "description": "",
  "id": "работа-със-задачи;смяна-на-статус-на-задача;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 71,
  "name": "Въведе задача5 на име",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 72,
  "name": "въведе в процес на разработка на статус на задача",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 73,
  "name": "натисне бутона за промяна на статус на задача",
  "keyword": "And "
});
formatter.step({
  "line": 74,
  "name": "Вижда съобщение: Успешно променихте статуса на задачата!",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 13
    }
  ],
  "location": "TaskSteps.insertTaskName1(int)"
});
formatter.result({
  "duration": 120600,
  "status": "passed"
});
formatter.match({
  "location": "TaskSteps.changeStatusToWorkingOnTask1()"
});
formatter.result({
  "duration": 43300,
  "status": "passed"
});
formatter.match({
  "location": "TaskSteps.clickChangeStatusButton()"
});
formatter.result({
  "duration": 43000,
  "status": "passed"
});
formatter.match({
  "location": "TaskSteps.checkMessageStatusUpdated()"
});
formatter.result({
  "duration": 37300,
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
  "duration": 99699,
  "status": "passed"
});
formatter.scenario({
  "line": 79,
  "name": "Смяна на статус на задача",
  "description": "",
  "id": "работа-със-задачи;смяна-на-статус-на-задача;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 71,
  "name": "Въведе задача87 на име",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 72,
  "name": "въведе в процес на разработка на статус на задача",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 73,
  "name": "натисне бутона за промяна на статус на задача",
  "keyword": "And "
});
formatter.step({
  "line": 74,
  "name": "Вижда съобщение: Успешно променихте статуса на задачата!",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "87",
      "offset": 13
    }
  ],
  "location": "TaskSteps.insertTaskName1(int)"
});
formatter.result({
  "duration": 99700,
  "status": "passed"
});
formatter.match({
  "location": "TaskSteps.changeStatusToWorkingOnTask1()"
});
formatter.result({
  "duration": 21601,
  "status": "passed"
});
formatter.match({
  "location": "TaskSteps.clickChangeStatusButton()"
});
formatter.result({
  "duration": 18700,
  "status": "passed"
});
formatter.match({
  "location": "TaskSteps.checkMessageStatusUpdated()"
});
formatter.result({
  "duration": 20899,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 82,
  "name": "Смяна на статус на завършена задача",
  "description": "",
  "id": "работа-със-задачи;смяна-на-статус-на-завършена-задача",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 83,
  "name": "Въведе \u003cиме\u003e на име",
  "keyword": "When "
});
formatter.step({
  "line": 84,
  "name": "въведе \u003cстатус\u003e на статус на задача",
  "keyword": "And "
});
formatter.step({
  "line": 85,
  "name": "натисне бутона за промяна на статус на задача",
  "keyword": "And "
});
formatter.step({
  "line": 86,
  "name": "Вижда съобщение: \u003cсъобщение\u003e",
  "keyword": "Then "
});
formatter.examples({
  "line": 88,
  "name": "",
  "description": "",
  "id": "работа-със-задачи;смяна-на-статус-на-завършена-задача;",
  "rows": [
    {
      "cells": [
        "име",
        "статус",
        "съобщение"
      ],
      "line": 89,
      "id": "работа-със-задачи;смяна-на-статус-на-завършена-задача;;1"
    },
    {
      "cells": [
        "задача1",
        "стара",
        "Статусът на завършена задача не може да бъде сменен!"
      ],
      "line": 90,
      "id": "работа-със-задачи;смяна-на-статус-на-завършена-задача;;2"
    },
    {
      "cells": [
        "задача2",
        "нова",
        "Статусът на завършена задача не може да бъде сменен!"
      ],
      "line": 91,
      "id": "работа-със-задачи;смяна-на-статус-на-завършена-задача;;3"
    }
  ],
  "keyword": "Examples"
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
  "duration": 72699,
  "status": "passed"
});
formatter.scenario({
  "line": 90,
  "name": "Смяна на статус на завършена задача",
  "description": "",
  "id": "работа-със-задачи;смяна-на-статус-на-завършена-задача;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 83,
  "name": "Въведе задача1 на име",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 84,
  "name": "въведе стара на статус на задача",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 85,
  "name": "натисне бутона за промяна на статус на задача",
  "keyword": "And "
});
formatter.step({
  "line": 86,
  "name": "Вижда съобщение: Статусът на завършена задача не може да бъде сменен!",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 13
    }
  ],
  "location": "TaskSteps.insertTaskName1(int)"
});
formatter.result({
  "duration": 100201,
  "status": "passed"
});
formatter.match({
  "location": "TaskSteps.changeStatusToFinishedTask1()"
});
formatter.result({
  "duration": 48700,
  "status": "passed"
});
formatter.match({
  "location": "TaskSteps.clickChangeStatusButton()"
});
formatter.result({
  "duration": 28500,
  "status": "passed"
});
formatter.match({
  "location": "TaskSteps.checkMessage1()"
});
formatter.result({
  "duration": 31200,
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
  "duration": 87199,
  "status": "passed"
});
formatter.scenario({
  "line": 91,
  "name": "Смяна на статус на завършена задача",
  "description": "",
  "id": "работа-със-задачи;смяна-на-статус-на-завършена-задача;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 83,
  "name": "Въведе задача2 на име",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 84,
  "name": "въведе нова на статус на задача",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 85,
  "name": "натисне бутона за промяна на статус на задача",
  "keyword": "And "
});
formatter.step({
  "line": 86,
  "name": "Вижда съобщение: Статусът на завършена задача не може да бъде сменен!",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 13
    }
  ],
  "location": "TaskSteps.insertTaskName1(int)"
});
formatter.result({
  "duration": 120900,
  "status": "passed"
});
formatter.match({
  "location": "TaskSteps.changeStatusToFinishedTask2()"
});
formatter.result({
  "duration": 24499,
  "status": "passed"
});
formatter.match({
  "location": "TaskSteps.clickChangeStatusButton()"
});
formatter.result({
  "duration": 25400,
  "status": "passed"
});
formatter.match({
  "location": "TaskSteps.checkMessage1()"
});
formatter.result({
  "duration": 21299,
  "status": "passed"
});
});