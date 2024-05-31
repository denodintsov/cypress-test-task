# Cypress Test Task

This repository contains the Cypress test for the "Cypress Test Task" project. 

## Test task

	•	Please write a test to test the happy path. 

  	•	Please do not spend more than an hour on this task. 

	•	Please see the video of the feature here: https://www.loom.com/share/b77861c485f649f7bf94662f8a4a1469

	•	The happy path is:
```Feature: User Registration on Axate Scenario Outline:
Registering a new user on Staging Site Axate Given the user is on the article page at https://yrk.branch-master.axate.io/articles/1
When the user clicks on "Get a day pass", yellow button, inside the article
And the user fills in a random email address
And the user selects "UK" as the country and enters a valid UK postcode
And the user selects a random preference for marketing preferences
And the user clicks "Continue"
And the user selects any payment amount
And the user selects Voucher
And the user fills in "QA2024"
And the user clicks "Continue"
Then the user should see confirmation "You are ready to read your first article"
```


## Prerequisites

Before setting up the project, ensure you have the following installed:
- [Node.js](https://nodejs.org/en/) (v12 or above)
- [npm](https://npmjs.com/) (v6 or above)

## Installation

Follow these steps to set up the project locally:

1. **Clone the Repository**

   ```bash
   git clone https://github.com/denodintsov/cypress-test-task.git
   cd cypress-test-task

2. **Install Dependencies**
```bash
    npm install
```
## Running Tests

To run the tests using Cypress, execute the following command:
```bash
npx cypress open
```
## Test Structure
The tests are structured as follows:

- **integration/**: Contains all the test suites.
- **fixtures/**: Contains static data used in tests.
- **plugins/**: Contains plugins that enhance or extend the Cypress capabilities.
- **pages/**: Contains reusable code 
- **support/**: Contains files that run before all tests, such as global configurations and behavior overrides.
