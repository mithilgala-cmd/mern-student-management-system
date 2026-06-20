// Insert a new student
db.students.insertOne({
  name: "Test",
  rollNo: 20,
  branch: "CSE",
  cgpa: 7.5,
  city: "Delhi",
  skills: ["C"]
});

// Update CGPA and city of a student
db.students.updateOne(
  { rollNo: 1 },
  { $set: { cgpa: 9.0, city: "Pune" } }
);

// Add a new skill to skills array
db.students.updateOne(
  { rollNo: 2 },
  { $push: { skills: "SQL" } }
);

// Delete a student using roll number
db.students.deleteOne({ rollNo: 20 });


// Retrieve students with CGPA greater than or equal to 9
db.students.find({ cgpa: { $gte: 9 } });

// Retrieve students with CGPA less than or equal to 6.8
db.students.find({ cgpa: { $lte: 6.8 } });

// Retrieve students with CGPA equal to 9.2
db.students.find({ cgpa: { $eq: 9.2 } });


// Retrieve students whose CGPA is not greater than 9
db.students.find({ cgpa: { $not: { $gt: 9 } } });

// Retrieve students not from Mumbai or Delhi
db.students.find({ $nor: [{ city: "Mumbai" }, { city: "Delhi" }] });

// Retrieve students from AI branch or Pune city
db.students.find({ $or: [{ branch: "AI" }, { city: "Pune" }] });

// Retrieve students from AI branch and Pune city
db.students.find({ $and: [{ branch: "AI" }, { city: "Pune" }] });


// Retrieve students having Python skill
db.students.find({ skills: { $in: ["Python"] } });

// Retrieve students not having Python skill
db.students.find({ skills: { $nin: ["Python"] } });

// Retrieve students having both Python and ML skills
db.students.find({ skills: { $all: ["Python", "ML"] } });


// Display only name and cgpa fields
db.students.find({}, { name: 1, cgpa: 1, _id: 0 });

// Sort students by CGPA in descending order
db.students.find().sort({ cgpa: -1 });

// Limit output to first 2 students
db.students.find().limit(2);

// Skip first 18 students
db.students.find().skip(18);
