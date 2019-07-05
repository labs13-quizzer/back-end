 The numbers 1️⃣ through 3️⃣ next to each item represent the week that part of the docs needs to be completed by.  Make sure to delete the numbers by the end of Labs.

 Each student has a required minimum number of meaningful PRs each week per the rubric.  Contributing to docs does NOT count as a PR to meet your weekly requirements.

# API Documentation

#### 1️⃣ Backend deployed at Heroku: https://labs13-quizzer.herokuapp.com/ <br>

## 1️⃣ Getting started 

To get the server running locally:

  adjust these scripts to match your project

- Clone this repo
- **yarn install** to install all required dependencies
- **yarn server** to start the local server
- **yarn test** to start server using testing environment

### Backend framework goes here: Express & NodeJS, OAuth for security, Stripe for payments


   Why did you choose this framework?

-    Point One: We use NodeJS and Express so that to set up the server and the intended Endpoints 
-    Point Two: We use OAuth together with Google Authentication for Register or Login of the user 
-    Point Three: We use Stripe to process payments


## 2️⃣ Endpoints


#### AuthRoute Routes

| Method  | Endpoint                  | Access Control  | Description                                                    |
| ------- | --------------------------| --------------- | -------------------------------------------------------------- |
| POST    | `/api/auth/teacher/login` | teachers        | Should Authenticate a teacher user using their Google account. |
| POST    | `/api/auth/student/login` | students        | Should Authenticate a student user using their Google account. |

#### ProfileRoute Routes

| Method | Endpoint                            | Access Control      | Description                                                        |
| ------ | ------------------------------------| ------------------- | ------------------------------------------------------------------ |
| GET    | `/api/profile/`                     | supervisors         | Should return the default route indicating Endpoint is working.    |
| GET    | `/api/profile/teacher`              | owners, supervisors | Should return all available registered Teachers from the database. |
| GET    | `/api/profile/teacher/:id`          | supervisors         | Should return available Teacher by its id from the database.       |
| POST   | `/api/profile/teacher`              | supervisors         | Should Create a new Teacher which will be stored in the database.  |
| PUT    | `/api/profile/teacher/:id`          | supervisors         | Should Update available Teacher by its id taken from the database. |
| DELETE | `/api/profile/teacher/:id`          | supervisors         | Should Delete available Teacher by its id taken from the database. |
| GET    | `/api/profile/student`              | owners, supervisors | Should return all available registered Students from the database. |
| GET    | `/api/profile/student/:id`          | owners, supervisors | Should return available Student by its id from the database.       |
| POST   | `/api/profile/student`              | owners, supervisors | Should Create a new Student which will be stored in the database.  |
| PUT    | `/api/profile/student/:id`          | owners, supervisors | Should Update available Student by its id taken from the database. |
| DELETE | `/api/profile/student/:id`          | owners, supervisors | Should Delete available Student by its id taken from the database. |
| GET    | `/api/profile/teachers/:id/students`| owners, supervisors | Should return available teachers for each student.                 |
| GET    | `/api/profile/students/:id/teachers`| owners, supervisors | Should return available students for each teacher.                 | 

#### QuizRoute Routes

| Method | Endpoint                              | Access Control      | Description                                                     |
| ------ | --------------------------------------| ------------------- | ----------------------------------------------------------------|
| GET    | `/api/quiz/quizzes`                   | owners, supervisors | Should return all available Quizzes from the database.          |
| GET    | `/api/quiz/quizzes/:id`               | owners, supervisors | Should return available Quiz by its id from the database.       |
| POST   | `/api/quiz/quizzes`                   | owners, supervisors | Should Create a new Quiz which will be stored in the database.  |
| PUT    | `/api/quiz/quizzes/:id`               | supervisors         | Should Update available Quiz by its id taken from the database. |
| DELETE | `/api/quiz/quizzes/:id`               | owners, supervisors | Should Delete available Quiz by its id taken from the database. |
| GET    | `/api/quiz/teachers/:id/quizzes`      | owners, supervisors | Should return all available Quizzes pertaining to a teacher.    |
| GET    | `/api/quiz/student/:id/quizzes`       | owners, supervisors | Should return all available Quizzes pertaining to a student.    | 
| GET    | `/api/quiz/quizzes/correct_answer/:id`| owners, supervisors | Should return all correct answers for a given quiz.             |

#### UserRoute Routes

 Method | Endpoint                   | Access Control      | Description                                                        |
| ------ | --------------------------| ------------------- | ------------------------------------------------------------------ |
| GET    | `/api/users`              | supervisors         | Should return the default route indicating Endpoint is working.    |
| GET    | `/api/users/:id`          | supervisors         | Should return available User by its id from the database.          |
| POST   | `/api/users`              | supervisors         | Should Create a new User which will be stored in the database.     |
| PUT    | `/api/users/:id`          | supervisors         | Should Update available User by its id taken from the database.    |
| DELETE | `/api/users/:id`          | supervisors         | Should Delete available User by its id taken from the database.    |

#### QuestionRoute Routes

| Method | Endpoint                    | Access Control      | Description                                                     |
| ------ | ----------------------------| ------------------- | ----------------------------------------------------------------|
| GET    | `/api/quest/`               | supervisors         | Should return the default route indicating Endpoint is working. |
| GET    | `/api/quest/question`       | owners, supervisors | Should return all available questions from the database.        |
| GET    | `/api/quest/question/:id`   | owners, supervisors | Should return available question by its id from the database.   |
| POST   | `/api/quest/question`       | owners, supervisors | Should Create a new question and store it in the database.      |
| PUT    | `/api/quest/question/:id`   | supervisors         | Should Update available question by its id from the database.   |
| DELETE | `/api/quest/question/:id`   | owners, supervisors | Should Delete available question by its id from the database.   |

#### Stripe Routes

| Method | Endpoint                         | Access Control      | Description                                                               |
| ------ | ---------------------------------| ------------------- | --------------------------------------------------------------------------|
| POST   | `/api/stripe/customer/create`    | supervisors         | Should add customer details for the slated payment transaction.           |
| POST   | `/api/stripe/customer/subscribe` | owners, supervisors | Should access the customers payment plan of choice and charge accordingly.|

# Data Model

Throughout the whole data action model's of the project the following model was used:

    find     -- Which supposed to Find the provided entry from the Database
    findBy   -- Which supposed to Find by id the provided entry from the Database 
    add      -- Which supposed to Add the provided entry to the Database 
    findById -- Which supposed to Find by id the provided entry from the Database
    remove   -- Which supposed to Delete the provided entry from the Database
    update   -- Which supposed to Update the provided entry to the Database 

#### 2️⃣ ORGANIZATIONS

---

```
{
  id: UUID
  name: STRING
  industry: STRING
  paid: BOOLEAN
  customer_id: STRING
  subscription_id: STRING
}
```

#### USERS

---

```
{
  id: UUID
  organization_id: UUID foreign key in ORGANIZATIONS table
  first_name: STRING
  last_name: STRING
  role: STRING [ 'owner', 'supervisor', 'employee' ]
  email: STRING
  phone: STRING
  cal_visit: BOOLEAN
  emp_visit: BOOLEAN
  emailpref: BOOLEAN
  phonepref: BOOLEAN
}
```
    
## Contributing

When contributing to this repository, please first discuss the change you wish to make via issue, email, or any other method with the owners of this repository before making a change.

Please note we have a [code of conduct](./code_of_conduct.md). Please follow it in all your interactions with the project.

### Issue/Bug Request

 **If you are having an issue with the existing project code, please submit a bug report under the following guidelines:**
 - Check first to see if your issue has already been reported.
 - Check to see if the issue has recently been fixed by attempting to reproduce the issue using the latest master branch in the repository.
 - Create a live example of the problem.
 - Submit a detailed bug report including your environment & browser, steps to reproduce the issue, actual and expected outcomes,  where you believe the issue is originating from, and any potential solutions you have considered.

### Feature Requests

We would love to hear from you about new features which would improve this app and further the aims of our project. Please provide as much detail and information as possible to show us why you think your new feature should be implemented.

### Pull Requests

If you have developed a patch, bug fix, or new feature that would improve this app, please submit a pull request. It is best to communicate your ideas with the developers first before investing a great deal of time into a pull request to ensure that it will mesh smoothly with the project.

Remember that this project is licensed under the MIT license, and by submitting a pull request, you agree that your work will be, too.

#### Pull Request Guidelines

- Ensure any install or build dependencies are removed before the end of the layer when doing a build.
- Update the README.md with details of changes to the interface, including new plist variables, exposed ports, useful file locations and container parameters.
- Ensure that your code conforms to our existing code conventions and test coverage.
- Include the relevant issue number, if applicable.
- You may merge the Pull Request in once you have the sign-off of two other developers, or if you do not have permission to do that, you may request the second reviewer to merge it for you.

### Attribution

These contribution guidelines have been adapted from [this good-Contributing.md-template](https://gist.github.com/PurpleBooth/b24679402957c63ec426).

## Documentation

See [Frontend Documentation](🚫link to your frontend readme here) for details on the frontend of our project.
🚫 Add DS iOS and/or Android links here if applicable.
