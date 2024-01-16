# Brain-Burst-Backend

## Overview

Brain-Burst is a web application that allows users to take quizzes on a particular topic and share their certificates on social media. The application is built using Next.js, Node.js, Express.js, Mongoose, TypeScript, Tailwind CSS, and Ant Design.

## Features

### Quiz Taking

- Users can take quizzes on a particular topic.
- The quiz results are recorded and stored for future reference.

### Social Media Sharing

- Users can share their quiz certificates on social media platforms.

### Technology Stack

#### Frontend

- **Next.js**: A React framework for building server-rendered React applications.
- **TypeScript**: A superset of JavaScript that adds static types.
- **Tailwind CSS**: A utility-first CSS framework for building custom designs.
- **Ant Design**: A React UI library with a set of high-quality components.

#### Backend

- **Node.js**: A JavaScript runtime for building server-side applications.
- **Express.js**: A web application framework for Node.js.
- **Mongoose**: An ODM (Object Document Mapper) for MongoDB and Node.js.

## How to Contribute.

When you contribute, you will create a branch in your own name. Then, you will push your contributed code to that branch.Please Remember, After pushing the code, you must submit a pull request to the development branch.

## please follow these steps:

1. Clone the repository:

```bash
   git clone https://github.com/masumrana0/Brain-Burst-Backend.git
```

2. Create a branch with your own name:

```bash
   git checkout -b your-name
```

3.Contribute and push code:

```bash
git push origin brach-name
```

### Data Pattern

- **Register:**

```json
{
  "userName": "omukhasan123",
  "name": {
    "firstName": "Omuk",
    "lastName": "Hasan"
  },
  "email": "omukhasan@gmail.com",
  "skills": ["JavaScript", "React js"],
  "Education": ["HSC", "honus", "masters"],
  "Gender": "male",
  "Nationality": "Bangladeshi",
  "DateofBirth": "12/01/2023",
  "profilePicture": "url",
  "socialMediaLinks": ["facebook", "Linkedin", "GitHub"],
  "PhoneNumber": "01978797987"
}
```

- **Login**

```json
{
  "email": "masum.rana6267@gmail.com",
  "password": "123456"
}
```

- **Quiz**

```json
{
  "adminId": "referenceId",
  "category": "Basic",
  "qustion": "Quiz Question",
  "options": ["Option1", "Option2", "Option3", "options4"],
  "currectAnswer": "Option2"
}
```
