# Brain-Burst-Backend

## How to Contribute.

When you contribute, you will create a branch in your own name. Then, you will push your contributed code to that branch.Please Remember, After pushing the code, you must submit a pull request to the development branch.

## please follow these steps:

1. Create a branch with your own name:

   ```bash
   git checkout -b your-branch-name
   ```

2. push code:

```bash
git push origin masum
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
