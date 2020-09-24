import React from "react";
import { Table } from "react-bootstrap";

import "./css/academics.css";

const Academics = () => {
  return (
    <div className="body-container">
      <h4 className="heading-1">Semester System</h4>
      <p>
        The acedemic session of the Institute is divided into three parts: two
        regular semeters and a summer term (though as fresher you need not to
        worry about summer term).Among regular semester the odd semester{" "}
        <span className="highlighted-text">normally</span> commences in the last
        week of July every year, and even semester in the first week of January.
      </p>
      <p>
        Academic calender of the institute for various academic activities for
        all of the students of the institute will/is available on the welsite of
        each semester.
      </p>
      <h4 className="heading-1">Course Structure and Credits</h4>
      <p>
        The institute follows a choice based credit system giving the students
        the flexibility in choosing couses. A student is exposed to earn certain
        minimum credits for the programme for which he/she is registered and
        with a minimum specified CPI(**check here**).
        {/* Add Link */}
      </p>
      <h4 className="heading-1">Attendance</h4>
      <p>
        Attendance of students in lectures, tutorials, practical and project
        work is important for the learing process. Participation of students in
        the different class room, curricular and co-cullicular, and other
        activities facilitates an interactive process of learning, making the
        attendance a very component of the Academic Programme. It also helps to
        bring discipline in the students's life, thus enhances the overall
        personal devlopment of the students.
      </p>
      <p>
        It is expected that the students would attend all the classes. However,
        it is noted that sometimes, due to some exigencies, the student might
        have to miss some classes. For a student who has an absense above 25% in
        a course, whatever may be the reason for a shortfall in attendance,
        his/her registration in the course will stand cancelled. A student is
        required to be responsible to keep track of his attendence during the
        semester continuously. The absense of 25% will be calculated as the
        absolute number, rounded to next higher integer of the actual classes
        held in a course.
      </p>
      <h4 className="heading-1">Examinations</h4>
      <p>
        There is a <span className="highlighted-text">mid-semester</span>{" "}
        examination of normally 120 minutes duration and one
        <span className="highlighted-text"> end-semester</span> examination of
        180 minutes duration. Besides these, there are{" "}
        <span className="highlighted-text"> quizzes</span>,{" "}
        <span className="highlighted-text"> assignments</span> etc. Weight for
        each of these componets gets decided by the course convener, which is
        announced at the beginning of each semester.
      </p>
      <h4 className="heading-1">Grading System</h4>
      <p>
        At the end of each semester/term, a student is awarded a letter grade in
        each of his/her course convener taking into account his/her level of
        learning based on performance in the various examinations, quizzes,
        assignment/term paper, laboratory/project work(if any), etc. A relative
        system of grade is used, and it reflects the level of learning by a
        student.
      </p>
      <p>
        The various grades to be awarded to students along with the
        corresponding grade points and their description are given in the table
        below:
      </p>
      <Table striped bordered responsive className="grade-table">
        <thead>
          <th>Grade</th>
          <th>Grade Point</th>
          <th>Description</th>
        </thead>
        <tbody>
          <tr>
            <td>A*</td>
            <td>10</td>
            <td>Outstanding (Extraordinarily high level </td>
          </tr>
          <tr>
            <td>A</td>
            <td>10</td>
            <td>Excellent</td>
          </tr>
          <tr>
            <td>A-</td>
            <td>9</td>
            <td>Very Good</td>
          </tr>
          <tr>
            <td>B</td>
            <td>8</td>
            <td>Good</td>
          </tr>
          <tr>
            <td>B-</td>
            <td>7</td>
            <td>Very Fair</td>
          </tr>
          <tr>
            <td>C</td>
            <td>6</td>
            <td>Fair</td>
          </tr>
          <tr>
            <td>C-</td>
            <td>5</td>
            <td>Poor (But Pass grade for the course)</td>
          </tr>
          <tr>
            <td>F</td>
            <td>0</td>
            <td>Fail (Extremely low level of learning)</td>
          </tr>
          <tr>
            <td>S</td>
            <td>-</td>
            <td>Satisfactory</td>
          </tr>
          <tr>
            <td>X</td>
            <td>-</td>
            <td>Unsatisfactory</td>
          </tr>
          <tr>
            <td>I</td>
            <td>-</td>
            <td>Incomplete</td>
          </tr>
          <tr>
            <td>T</td>
            <td>-</td>
            <td>Waiver/Transfer</td>
          </tr>
          <tr>
            <td>W</td>
            <td>-</td>
            <td>Withdrawn/Cancelled Registration</td>
          </tr>
        </tbody>
      </Table>
      <p>
        Along with grades for each semester two parameters are also calculated
        at end of each semester and that is
        <span className="highlighted-text"> SPI</span>(Semester Performance
        Index) - for each semester and{" "}
        <span className="highlighted-text"> CPI</span>(Cumulative Performance
        Index) - upto that semester in discussion. Formula for calculation of
        SPI and CPI are given below:
      </p>
      {/* Add formula */}
      <h4 className="heading-1">Branch Change Rules</h4>
      <h4 className="heading-2">Change of Discipline</h4>
      <p>
        A student enrolled in a UGD/IDD programme through JEE, shall be eligible
        for a change of discipline/programme at end of the first semester
        provided he/she has scored CPI greater than or equal to 8.0 for a
        limited number of seats. The change of discipline/branch will be there
        from one discipline to the other within their respective programmes
        only, i.e the students of 4-year programmes may change discipline within
        4-year programmes, and the students of 5-year programmes may change
        disciplines within 5-year programmes only. A student admitted through
        preparatory course shall not be permitted of change of discipline.
      </p>
      <h4 className="heading-2">Change of Programme</h4>
      <p>
        A student enrolled in 4-year B.Tech shall also be eligible for a change
        of programme from B.Tech to 5-year Integrated Dual Degree Programme
        within same discipline before date of registration in the 7th semester
        provided he/she has minimum CPI of 6.5 at the time of application.
      </p>
      <h4 className="heading-1">Scholarships</h4>
      <p>
        Various scholarships, including Merit-cum-Means are avilable to the
        undergraduate students. A good number of Endowment Scholarships are also
        available. Some of these scholarships are on a loan basis. The institute
        is also one of the reconized institutions for the award of scholarships
        to SC/ST students under Scholarships Scheme of Top class education
        scheme of Ministry of Social Justice and Empowerment and Minstry of
        Tribal Affairs. IDD students are provided a stipend in 9th and 10th
        semesters on fulfilling certain criteria.
      </p>
    </div>
  );
};

export default Academics;
