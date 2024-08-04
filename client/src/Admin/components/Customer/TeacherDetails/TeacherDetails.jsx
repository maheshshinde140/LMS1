import React from "react";

function TeacherDetails({ teacher }) {
  return (
    <main>
      <h1>{teacher?.teacherFullName}</h1>
      {teacher?.adminEmail}
      {teacher?.teacherUserName}
      {teacher?.teacherEmail}
      {teacher?.teacherPhoneNumber}
    </main>
  );
}

export default TeacherDetails;
