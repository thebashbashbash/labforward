# This is MVP 1 of Peak Detection

To start MVP run:

1. make sure you have the latest react and npm, then

2. npm install

3. npm start

and to test run:

1. npm test

if you have any questions contact: contact@basharmengana.com

# Defenition of done

1. The end user (scientist) is able to detect peaks by glancing a graph of their data.
2. The MVP should be written in React with React Context instead of Redux because I believe
   the new React Context API and React Hooks are the future.
3. The end user should be able to switch between
   their data sets.
4. All components should be tested for successfully rendering, using Jest/Enzyme.
5. Use material UI for all UI component. Use Victory chart for rendering graph.
6. A simple test that checks that it is possible to change the state (=change data set) using Jest/Enzyme. Future improvement: this test should be improved by rewriting it so that the test actually changes the state in the state management class (in a mock manner with Jest/Enzyme) by using React Context (this requires turning DataSetController into a class component). Future improvement: use jest-axios-mock when adding real endpoints.

# Project details

Time: 2.5 hours (1 hours for creating state management, 1 hour for researching with graph library
0.5 hours for writing a simple text that checks state and for some CSS styling)
