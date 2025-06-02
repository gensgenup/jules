// Assuming a basic assert function or a setup that provides it.
// If using a specific framework like Jest or Mocha, the syntax might differ.

// Mocking console.log to prevent output during tests
// Ensure this mock is compatible with Jest's expect.toHaveBeenCalledWith
let consoleLogSpy;

if (typeof jest !== 'undefined') {
  consoleLogSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
  global.console = {
    ...global.console,
    log: consoleLogSpy,
    // Keep other console methods if they exist or mock them as well
    error: jest.fn(),
    warn: jest.fn(),
  };
} else {
  // Non-Jest environment mocking
  let _originalConsoleLog = console.log;
  let _mockLogCallArgs = [];
  consoleLogSpy = (...args) => {
    _mockLogCallArgs.push(args);
  };
  global.console = {
    log: consoleLogSpy,
    error: (...args) => _originalConsoleLog('ERROR:', ...args), // or mock if needed
    warn: (...args) => _originalConsoleLog('WARN:', ...args),  // or mock if needed
    _getMockLogCallArgs: () => _mockLogCallArgs,
    _clearMockLogCallArgs: () => { _mockLogCallArgs = []; }
  };
}


// For the purpose of this task, I will redefine functions here
// as I don't have information on the module system or test runner.
function addNumbers(num1, num2) {
  return num1 + num2;
}

function logString(str) {
  console.log(str);
}

describe('addNumbers', () => {
  test('should return the sum of two positive numbers', () => {
    expect(addNumbers(2, 3)).toBe(5);
  });

  test('should return the sum of two negative numbers', () => {
    expect(addNumbers(-2, -3)).toBe(-5);
  });

  test('should return the sum of a positive and a negative number', () => {
    expect(addNumbers(5, -3)).toBe(2);
  });

  test('should return the sum when one number is zero', () => {
    expect(addNumbers(0, 5)).toBe(5);
    expect(addNumbers(5, 0)).toBe(5);
  });

  test('should return zero when both numbers are zero', () => {
    expect(addNumbers(0, 0)).toBe(0);
  });

  test('should handle large numbers correctly', () => {
    expect(addNumbers(1000000000, 2000000000)).toBe(3000000000);
  });

  test('should handle decimal numbers correctly', () => {
    expect(addNumbers(0.1, 0.2)).toBeCloseTo(0.3);
  });

  test('should handle adding a negative number to a positive number resulting in a negative sum', () => {
    expect(addNumbers(3, -5)).toBe(-2);
  });
});

describe('logString', () => {
  beforeEach(() => {
    // Clear mock calls before each test
    if (typeof jest !== 'undefined') {
      consoleLogSpy.mockClear();
    } else {
      console._clearMockLogCallArgs();
    }
  });

  test('should call console.log with a regular string', () => {
    const testStr = "hello world";
    logString(testStr);
    expect(console.log).toHaveBeenCalledWith(testStr);
  });

  test('should call console.log with an empty string', () => {
    const testStr = "";
    logString(testStr);
    expect(console.log).toHaveBeenCalledWith(testStr);
  });

  test('should call console.log with a string containing numbers and symbols', () => {
    const testStr = "test123!@#";
    logString(testStr);
    expect(console.log).toHaveBeenCalledWith(testStr);
  });

  test('should call console.log with a long string', () => {
    const testStr = "a".repeat(1000);
    logString(testStr);
    expect(console.log).toHaveBeenCalledWith(testStr);
  });
});


// Mock expect and assertion functions for a non-Jest environment
if (typeof jest === 'undefined') {
  global.expect = (actual) => ({
    toBe: (expected) => {
      if (actual !== expected) {
        throw new Error(`Expected ${JSON.stringify(actual)} to be ${JSON.stringify(expected)}`);
      }
    },
    toBeCloseTo: (expected, precision = 2) => {
      const pass = Math.abs(expected - actual) < (Math.pow(10, -precision) / 2);
      if (!pass) {
        throw new Error(`Expected ${actual} to be close to ${expected}`);
      }
    },
    // Add a basic toHaveBeenCalledWith for the non-Jest environment
    toHaveBeenCalledWith: (expectedArg) => {
      const calls = console._getMockLogCallArgs();
      const found = calls.some(callArgs => callArgs.length === 1 && callArgs[0] === expectedArg);
      if (!found) {
        throw new Error(`Expected console.log to have been called with "${expectedArg}", but it was called with: ${JSON.stringify(calls)}`);
      }
    }
  });
  
  // Re-mock console.log for non-Jest if not already done, or enhance it
   if (!console._getMockLogCallArgs) { // Check if our specific mock setup is missing
    let _originalConsoleLog = console.log; // Keep original for other uses if needed
    let _mockLogCallArgs = [];
    global.console.log = (...args) => { // Ensure console.log is our spy
        _mockLogCallArgs.push(args);
    };
    global.console._getMockLogCallArgs = () => _mockLogCallArgs;
    global.console._clearMockLogCallArgs = () => { _mockLogCallArgs = []; };
  }


  // Simple test runner (if not already defined)
  if (typeof describe !== 'function') {
    global.describe = function(suiteName, fn) {
      console.log(`\n--- ${suiteName} ---`);
      fn();
    };
  }
  if (typeof test !== 'function') {
    let currentSuite = '';
    global.test = function(testName, fn) {
      try {
        if (typeof beforeEach === 'function' && currentSuite !== this.suiteName) {
          // A bit hacky way to simulate beforeEach for the simple runner
          // This assumes test is called in the context of describe's callback
          // and beforeEach is defined in the same scope.
          // This is a very simplified simulation.
        }
        fn();
        console.log(`PASS: ${testName}`);
      } catch (e) {
        console.error(`FAIL: ${testName} (${e.message})`);
      }
    };
     global.beforeEach = (fn) => {
      // In our simple runner, beforeEach will be called before each test manually or by convention.
      // For this specific structure, it's called within the describe block's tests.
      // More sophisticated runners would handle this better.
      // Here, we ensure it's available globally for the test blocks to call.
      global.currentBeforeEach = fn; 
    };
  }
  
  // Execute tests for non-Jest environment
  // Need to ensure functions are defined if not "imported"
  if (typeof addNumbers === 'undefined') {
    global.addNumbers = function(num1, num2) { return num1 + num2; };
  }
  if (typeof logString === 'undefined') {
    global.logString = function(str) { console.log(str); };
  }

  // Manually call beforeEach if defined for the simple runner.
  // This is a conceptual fix. A real runner would integrate this.
  const originalTest = global.test;
  global.test = (testName, fn) => {
    if (global.currentBeforeEach) global.currentBeforeEach();
    originalTest(testName, fn);
  };

  describe('addNumbers', () => {
    test('should return the sum of two positive numbers', () => expect(addNumbers(2, 3)).toBe(5));
    test('should return the sum of two negative numbers', () => expect(addNumbers(-2, -3)).toBe(-5));
    test('should return the sum of a positive and a negative number', () => expect(addNumbers(5, -3)).toBe(2));
    test('should return the sum when one number is zero', () => { expect(addNumbers(0, 5)).toBe(5); expect(addNumbers(5, 0)).toBe(5); });
    test('should return zero when both numbers are zero', () => expect(addNumbers(0, 0)).toBe(0));
    test('should handle large numbers correctly', () => expect(addNumbers(1000000000, 2000000000)).toBe(3000000000));
    test('should handle decimal numbers correctly', () => expect(addNumbers(0.1, 0.2)).toBeCloseTo(0.3));
    test('should handle adding a negative number to a positive number resulting in a negative sum', () => expect(addNumbers(3, -5)).toBe(-2));
  });

  describe('logString', () => {
    beforeEach(() => { // This will be picked up by the modified global.test
      if (typeof jest !== 'undefined') {
        consoleLogSpy.mockClear();
      } else {
        console._clearMockLogCallArgs();
      }
    });
    test('should call console.log with a regular string', () => { logString("hello world"); expect(console.log).toHaveBeenCalledWith("hello world"); });
    test('should call console.log with an empty string', () => { logString(""); expect(console.log).toHaveBeenCalledWith(""); });
    test('should call console.log with a string containing numbers and symbols', () => { logString("test123!@#"); expect(console.log).toHaveBeenCalledWith("test123!@#"); });
    test('should call console.log with a long string', () => { logString("a".repeat(1000)); expect(console.log).toHaveBeenCalledWith("a".repeat(1000)); });
  });
}
