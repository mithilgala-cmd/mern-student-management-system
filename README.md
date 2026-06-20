# MERN Student Management System

## 📌 Overview

This project is a MongoDB-based Student Management System designed to demonstrate core database operations and query techniques. It covers CRUD operations, query operators, and data retrieval methods using MongoDB. 

This project serves as a foundational step towards building a full MERN stack application.

---

## 🧱 Collection Schema

The collection used in this project is **students**, with the following fields:

* name (String)
* rollNo (Number)
* branch (String)
* cgpa (Number)
* city (String)
* skills (Array)

---

## ⚙️ Features Implemented

### 🔹 CRUD Operations

* Insert new student records
* Update student details (CGPA, city)
* Add skills using `$push`
* Delete records using roll number

### 🔹 Query Operators

**Comparison Operators**

* $gte, $lte, $eq

**Logical Operators**

* $and, $or, $not, $nor

**Array Operators**

* $in, $nin, $all

---

## 📊 Data Retrieval

* Projection (select specific fields)
* Sorting (based on CGPA)
* Limit (restrict number of results)
* Skip (pagination-like behavior)

---

## 📂 Project Structure

```
database/
  ├── queries.js
  └── sample-data.json

MongoDB_Assignment_MithilGala.pdf

README.md
```


## 🚀 Future Scope


* Build REST APIs using Node.js and Express
* Connect MongoDB with backend services
* Develop frontend using React
* Convert into full MERN stack application

It simulates a real-world student database system with structured queries and operations.
