pragma solidity >=0.5.0;

contract TodoList {
  uint public taskCount = 0;

  constructor() public {
    createTask("Create simple TodoList Example");
  }

  struct Task {
    uint id;
    string description;
    bool completed;
  }

  mapping(uint => Task) public tasks;

  function createTask(string memory _content) public {
    taskCount ++;
    tasks[taskCount] = Task(taskCount, _content, false);
  }
}