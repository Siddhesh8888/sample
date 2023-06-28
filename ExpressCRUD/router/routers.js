const express = require("express");
const router = express.Router();
const connection = require("../db/dbconnect");

//all employee
router.get("/employees", function (req, resp) {
  connection.query("select * from employee", function (err, data, field) {
    if (err) {
      resp.status(500).send("No data found!!" + JSON.stringify(err));
    } else {
      resp.send(data);
    }
  });
});

// router.post("/employee/employees/:eid", function (request, response) {
//   var empid = request.body.empid;
//   var ename = request.body.ename;
//   var sal = request.body.sal;

//   //var empidx = request.params.eid;

//   console.log("EMP ID : " + empid);
//   console.log("EMP NAME : " + ename);
//   console.log("EMP SAL : " + sal);

//   //console.log("EMP ID X : " + empidx);

//   connection.query(
//     "insert into employee values(?,?,?)",
//     [empid, ename, sal],
//     (err, data) => {
//       if (err) {
//         response
//           .status(500)
//           .send("---<Error In Insertion !>---" + JSON.stringify(err));
//       } else {
//         if (result.affectedRows > 0) {
//           resp.send("{'msg':'inserted successfully'}");
//         } else {
//           resp.send("{'msg':'not inserted '}");
//         }
//       }
//     }
//   );
// });

// router.post("/employee/employee/:eid", (req, resp) => {
//   var empid = req.body.empid;
//   var ename = req.body.ename;
//   var sal = req.body.sal;
//   connection.query(
//     "insert into employee values(?,?,?)",
//     [empid, ename, sal],
//     (err, result) => {
//       console.log(result);
//       if (err) {
//         resp.status(500).send("data not inserted");
//       } else {
//         if (result.affectedRows > 0)
//           resp.send("{'msg':'inserted successfully'}");
//         else resp.send("{'msg':'not inserted '}");
//       }
//     }
//   );
// });

router.post("/employee/employees/:eid", function (request, response) {
  var empid = request.body.empid;
  var ename = request.body.ename;
  var sal = request.body.sal;
  connection.query(
    "insert into employee values(?,?,?)",
    [empid, ename, sal],
    (err, data) => {
      if (err) {
        response
          .status(500)
          .send("---< Error In 3rd Method >---" + JSON.stringify(err));
      } else {
        if (data.affectedRows === 1) {
          response.send("{'MSG':'Employee Inserted Succesfully !'}");
        } else {
          response.send("{'MSG':'Employee Insertion Failed Miserably ! '}");
        }
      }
    }
  );
}); //end of 3rd Method

router.get("/delete/:empid", function (req, resp) {
  connection.query(
    "delete from employee where empid=?",
    [req.params.empid],
    (err, result) => {
      if (err) {
        resp.status(500).send("Employee not deleted!! " + JSON.stringify(err));
      } else {
        resp.send("Employee deleted successfully!!!");
      }
    }
  );
});

module.exports = router;
